import { readFile, writeFile } from "node:fs/promises";

const paths = {
  matches: "data/matches.json",
  ratings: "data/team-ratings.json",
  modelInputs: "data/model-inputs.json",
};

const teamAliases = {
  mexico: "mexico",
  southafrica: "southAfrica",
  rsa: "southAfrica",
  korearepublic: "korea",
  southkorea: "korea",
  korea: "korea",
  czechia: "czechia",
  czechrepublic: "czechia",
  canada: "canada",
  bosniaandherzegovina: "bosnia",
  bosniaherzegovina: "bosnia",
  bosnia: "bosnia",
  unitedstates: "usa",
  unitedstatesofamerica: "usa",
  usa: "usa",
  paraguay: "paraguay",
  brazil: "brazil",
  morocco: "morocco",
  germany: "germany",
  curacao: "curacao",
  curaao: "curacao",
  spain: "spain",
  caboverde: "capeVerde",
  capeverde: "capeVerde",
  capeverdeislands: "capeVerde",
  france: "france",
  senegal: "senegal",
  argentina: "argentina",
  algeria: "algeria",
  austria: "austria",
  jordan: "jordan",
  england: "england",
  croatia: "croatia",
  portugal: "portugal",
  colombia: "colombia",
};

const competitionCode = process.env.FOOTBALL_DATA_COMPETITION || "WC";
const season = process.env.FOOTBALL_DATA_SEASON || "2026";

const existingMatches = await readJson(paths.matches, { matches: [] });
const existingRatings = await readJson(paths.ratings, { teams: {} });
const existingModelInputs = await readJson(paths.modelInputs, {});

let nextMatches = existingMatches;
let nextRatings = existingRatings;

if (process.env.FOOTBALL_DATA_API_KEY) {
  nextMatches = await fetchFootballDataMatches(existingMatches);
} else {
  console.log("No FOOTBALL_DATA_API_KEY configured. Keeping existing match cache.");
}

if (process.env.TEAM_RATINGS_SOURCE_URL) {
  nextRatings = await fetchTeamRatings(existingRatings);
} else {
  console.log("No TEAM_RATINGS_SOURCE_URL configured. Keeping existing team rating cache.");
}

const nextModelInputs = {
  ...existingModelInputs,
  meta: {
    ...(existingModelInputs.meta || {}),
    updatedAt: new Date().toISOString(),
    sources: [
      "football-data.org for fixtures, scores, and match status",
      "The Odds API for market odds",
      "External TEAM_RATINGS_SOURCE_URL for Elo/FIFA-style team rating cache",
    ],
  },
};

await writeJson(paths.matches, nextMatches);
await writeJson(paths.ratings, nextRatings);
await writeJson(paths.modelInputs, nextModelInputs);
console.log("Real data caches updated.");

async function fetchFootballDataMatches(fallback) {
  const url = new URL(`https://api.football-data.org/v4/competitions/${competitionCode}/matches`);
  url.searchParams.set("season", season);

  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      "X-Auth-Token": process.env.FOOTBALL_DATA_API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error(`football-data.org failed: ${response.status} ${await response.text()}`);
  }

  const payload = await response.json();
  const fallbackByKey = new Map((fallback.matches || []).map((match) => [match.key, match]));
  const mapped = [];

  for (const item of payload.matches || []) {
    const home = resolveTeamKey(item.homeTeam?.name || item.homeTeam?.shortName);
    const away = resolveTeamKey(item.awayTeam?.name || item.awayTeam?.shortName);
    if (!home || !away) continue;

    const key = `${home}-${away}`;
    const fallbackMatch = fallbackByKey.get(key) || {};
    mapped.push({
      ...fallbackMatch,
      key,
      group: normalizeGroup(item.group || fallbackMatch.group),
      date: formatChineseDate(item.utcDate || fallbackMatch.kickoffAt),
      kickoffAt: item.utcDate || fallbackMatch.kickoffAt,
      status: normalizeStatus(item.status),
      result: normalizeScore(item.score),
      venue: item.venue || fallbackMatch.venue || "场地待定",
      home,
      away,
      sourceId: item.id,
    });
  }

  return {
    meta: {
      source: "football-data.org",
      updatedAt: new Date().toISOString(),
      competition: payload.competition?.name || "FIFA World Cup",
      competitionCode,
      season,
    },
    matches: mapped.length > 0 ? mapped : fallback.matches || [],
  };
}

async function fetchTeamRatings(fallback) {
  const response = await fetch(process.env.TEAM_RATINGS_SOURCE_URL, {
    headers: { Accept: "application/json" },
  });
  if (!response.ok) {
    throw new Error(`Team ratings source failed: ${response.status} ${await response.text()}`);
  }

  const payload = await response.json();
  const incoming = Array.isArray(payload) ? payload : payload.teams || {};
  const teams = { ...(fallback.teams || {}) };

  if (Array.isArray(incoming)) {
    for (const item of incoming) {
      const key = item.key || resolveTeamKey(item.name || item.team);
      if (!key || !teams[key]) continue;
      teams[key] = mergeRating(teams[key], item);
    }
  } else {
    for (const [key, item] of Object.entries(incoming)) {
      if (!teams[key]) continue;
      teams[key] = mergeRating(teams[key], item);
    }
  }

  return {
    meta: {
      source: payload.source || process.env.TEAM_RATINGS_SOURCE_URL,
      updatedAt: new Date().toISOString(),
    },
    teams,
  };
}

function mergeRating(existing, item) {
  const rating = Number(item.rating ?? eloToRating(item.elo) ?? existing.rating);
  const rankBoost = item.fifaRank ? Math.max(0, 90 - Number(item.fifaRank)) / 4 : 0;
  return {
    ...existing,
    rating: clamp(Math.round(rating + rankBoost), 45, 96),
    form: clamp(Math.round(Number(item.form ?? existing.form)), 35, 96),
    attack: clamp(Math.round(Number(item.attack ?? existing.attack)), 35, 96),
    defense: clamp(Math.round(Number(item.defense ?? existing.defense)), 35, 96),
    experience: clamp(Math.round(Number(item.experience ?? existing.experience)), 35, 98),
    elo: item.elo ? Number(item.elo) : existing.elo,
    fifaRank: item.fifaRank ? Number(item.fifaRank) : existing.fifaRank,
    dataSource: item.dataSource || item.source || "external-rating-cache",
  };
}

function eloToRating(elo) {
  if (!elo) return null;
  return clamp(Math.round((Number(elo) - 1300) / 10), 45, 96);
}

function normalizeStatus(status) {
  if (status === "FINISHED") return "final";
  if (["IN_PLAY", "PAUSED", "LIVE"].includes(status)) return "live";
  return "pre";
}

function normalizeScore(score) {
  const home = score?.fullTime?.home;
  const away = score?.fullTime?.away;
  if (typeof home !== "number" || typeof away !== "number") return undefined;
  return { home, away };
}

function normalizeGroup(group) {
  if (!group) return "小组赛";
  return String(group).replace(/^Group\s+/i, "").replace(/^([A-L])$/, "$1组");
}

function formatChineseDate(value) {
  if (!value) return "时间待定";
  const date = new Date(value);
  return `${date.getUTCMonth() + 1}月${date.getUTCDate()}日`;
}

function resolveTeamKey(name) {
  const normalized = normalizeName(name);
  return teamAliases[normalized] || null;
}

function normalizeName(name) {
  return String(name || "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]/g, "");
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

async function readJson(path, fallback) {
  try {
    return JSON.parse(await readFile(path, "utf8"));
  } catch {
    return fallback;
  }
}

async function writeJson(path, value) {
  await writeFile(path, `${JSON.stringify(value, null, 2)}\n`);
}
