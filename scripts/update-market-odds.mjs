import { readFile, writeFile } from "node:fs/promises";

const outputPath = process.argv[2] || "data/market-odds.json";
const matchesPath = "data/matches.json";
const teamSearchNames = {
  korea: ["southkorea", "korearepublic", "korea"],
  czechia: ["czechia", "czechrepublic", "czech"],
  usa: ["unitedstates", "unitedstatesofamerica", "usa"],
  southAfrica: ["southafrica", "rsa"],
  capeVerde: ["capeverde", "caboverde", "capeverdeislands"],
  saudiArabia: ["saudiarabia", "saudi", "ksa"],
  newZealand: ["newzealand"],
  ivoryCoast: ["ivorycoast", "cotedivoire", "ctedivoire"],
  drCongo: ["drcongo", "congodr", "democraticrepublicofcongo"],
  turkiye: ["turkiye", "turkey"],
};
const existing = await readExistingOdds();
const matchMap = await readMatchMap();
const now = new Date().toISOString();

let nextOdds = existing;
let shouldWrite = false;

if (process.env.MARKET_ODDS_SOURCE_URL) {
  nextOdds = await fetchNormalizedOdds(existing);
  shouldWrite = true;
} else if (process.env.ODDS_API_KEY) {
  nextOdds = await fetchTheOddsApi(existing);
  shouldWrite = true;
} else {
  console.log("No odds provider configured. Skipping market odds cache update.");
}

if (!shouldWrite) {
  process.exit(0);
}

await writeFile(outputPath, `${JSON.stringify(nextOdds, null, 2)}\n`);
console.log(`Wrote ${outputPath} at ${now}`);

async function readExistingOdds() {
  try {
    return JSON.parse(await readFile(outputPath, "utf8"));
  } catch {
    return {};
  }
}

async function readMatchMap() {
  try {
    const data = JSON.parse(await readFile(matchesPath, "utf8"));
    return (data.matches || []).map((match) => ({
      key: match.key || `${match.home}-${match.away}`,
      home: teamTerms(match.home),
      away: teamTerms(match.away),
    }));
  } catch {
    return Object.keys(existing).map((key) => {
      const [home, away] = key.split("-");
      return { key, home: teamTerms(home), away: teamTerms(away) };
    });
  }
}

async function fetchNormalizedOdds(fallback) {
  const headers = { Accept: "application/json" };
  if (process.env.MARKET_ODDS_BEARER_TOKEN) {
    headers.Authorization = `Bearer ${process.env.MARKET_ODDS_BEARER_TOKEN}`;
  }

  const response = await fetch(process.env.MARKET_ODDS_SOURCE_URL, { headers });
  if (!response.ok) {
    throw new Error(`Normalized odds source failed: ${response.status} ${await response.text()}`);
  }

  const data = await response.json();
  return mergeWithFallback(data, fallback, "授权市场数据");
}

async function fetchTheOddsApi(fallback) {
  const sport = process.env.ODDS_API_SPORT || "soccer_fifa_world_cup";
  const regions = process.env.ODDS_API_REGIONS || "us,uk,eu";
  const bookmakers = process.env.ODDS_API_BOOKMAKERS || "";
  const markets = process.env.ODDS_API_MARKETS || "h2h,spreads,totals";
  const url = new URL(`https://api.the-odds-api.com/v4/sports/${sport}/odds`);
  url.searchParams.set("apiKey", process.env.ODDS_API_KEY);
  url.searchParams.set("regions", regions);
  url.searchParams.set("markets", markets);
  url.searchParams.set("oddsFormat", "decimal");
  if (bookmakers) url.searchParams.set("bookmakers", bookmakers);

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`The Odds API failed: ${response.status} ${await response.text()}`);
  }

  const events = await response.json();
  const mapped = {};

  for (const match of matchMap) {
    const event = events.find((item) => matchesEvent(item, match));
    if (!event) continue;

    const h2hMarket = firstMarket(event, "h2h");
    if (!h2hMarket) continue;

    const home = findOutcomePrice(h2hMarket, event.home_team);
    const away = findOutcomePrice(h2hMarket, event.away_team);
    const draw = findOutcomePrice(h2hMarket, "Draw");
    if (!home || !away || !draw) continue;
    const spreads = normalizeSpread(firstMarket(event, "spreads"), event);
    const totals = normalizeTotal(firstMarket(event, "totals"));

    mapped[match.key] = {
      ...fallback[match.key],
      source: event.bookmakers?.[0]?.title || "The Odds API",
      updatedAt: new Date(event.bookmakers?.[0]?.last_update || Date.now()).toISOString(),
      winner: { home, draw, away },
      ...(spreads ? { spreads } : {}),
      ...(totals ? { totals } : {}),
    };
  }

  return mergeWithFallback(mapped, fallback, "The Odds API");
}

function mergeWithFallback(incoming, fallback, sourceLabel) {
  const merged = { ...fallback };
  for (const [key, value] of Object.entries(incoming || {})) {
    merged[key] = {
      ...fallback[key],
      ...value,
      source: value.source || sourceLabel,
      updatedAt: value.updatedAt || new Date().toISOString(),
    };
  }
  return merged;
}

function matchesEvent(event, match) {
  const home = normalizeName(event.home_team);
  const away = normalizeName(event.away_team);
  return (
    (nameMatches(home, match.home) && nameMatches(away, match.away)) ||
    (nameMatches(home, match.away) && nameMatches(away, match.home))
  );
}

function teamTerms(key) {
  const terms = teamSearchNames[key] || [key];
  return terms.map(normalizeName);
}

function nameMatches(eventName, terms) {
  return terms.some((term) => eventName.includes(term) || term.includes(eventName));
}

function firstMarket(event, key) {
  return event.bookmakers?.flatMap((book) => book.markets || []).find((market) => market.key === key);
}

function findOutcomePrice(market, name) {
  return market.outcomes?.find((outcome) => normalizeName(outcome.name).includes(normalizeName(name)))?.price;
}

function normalizeSpread(market, event) {
  if (!market?.outcomes?.length) return undefined;
  const home = market.outcomes.find((outcome) => normalizeName(outcome.name).includes(normalizeName(event.home_team)));
  const away = market.outcomes.find((outcome) => normalizeName(outcome.name).includes(normalizeName(event.away_team)));
  const favorite = [home, away]
    .filter((outcome) => typeof outcome?.point === "number")
    .sort((a, b) => a.point - b.point)[0];
  if (!favorite) return undefined;
  return {
    side: favorite === away ? "away" : "home",
    line: favorite.point,
    price: favorite.price,
  };
}

function normalizeTotal(market) {
  if (!market?.outcomes?.length) return undefined;
  const over = market.outcomes.find((outcome) => normalizeName(outcome.name).includes("over"));
  const under = market.outcomes.find((outcome) => normalizeName(outcome.name).includes("under"));
  if (typeof over?.point !== "number" && typeof under?.point !== "number") return undefined;
  return {
    line: over?.point ?? under?.point,
    over: over?.price,
    under: under?.price,
  };
}

function normalizeName(name) {
  return String(name || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");
}
