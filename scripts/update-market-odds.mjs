import { readFile, writeFile } from "node:fs/promises";

const outputPath = "data/market-odds.json";
const existing = await readExistingOdds();
const now = new Date().toISOString();

let nextOdds = existing;

if (process.env.MARKET_ODDS_SOURCE_URL) {
  nextOdds = await fetchNormalizedOdds(existing);
} else if (process.env.ODDS_API_KEY) {
  nextOdds = await fetchTheOddsApi(existing);
} else {
  console.log("No odds provider configured. Keeping existing data unchanged.");
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
  const url = new URL(`https://api.the-odds-api.com/v4/sports/${sport}/odds`);
  url.searchParams.set("apiKey", process.env.ODDS_API_KEY);
  url.searchParams.set("regions", regions);
  url.searchParams.set("markets", "h2h");
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

    const market = firstH2HMarket(event);
    if (!market) continue;

    const home = findOutcomePrice(market, event.home_team);
    const away = findOutcomePrice(market, event.away_team);
    const draw = findOutcomePrice(market, "Draw");
    if (!home || !away || !draw) continue;

    mapped[match.key] = {
      ...fallback[match.key],
      source: event.bookmakers?.[0]?.title || "The Odds API",
      updatedAt: new Date(event.bookmakers?.[0]?.last_update || Date.now()).toISOString(),
      winner: { home, draw, away },
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
    (home.includes(match.home) && away.includes(match.away)) ||
    (home.includes(match.away) && away.includes(match.home))
  );
}

function firstH2HMarket(event) {
  return event.bookmakers?.flatMap((book) => book.markets || []).find((market) => market.key === "h2h");
}

function findOutcomePrice(market, name) {
  return market.outcomes?.find((outcome) => normalizeName(outcome.name).includes(normalizeName(name)))?.price;
}

function normalizeName(name) {
  return String(name || "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

const matchMap = [
  { key: "mexico-southAfrica", home: "mexico", away: "southafrica" },
  { key: "korea-czechia", home: "southkorea", away: "czech" },
  { key: "canada-bosnia", home: "canada", away: "bosnia" },
  { key: "usa-paraguay", home: "unitedstates", away: "paraguay" },
  { key: "brazil-morocco", home: "brazil", away: "morocco" },
  { key: "germany-curacao", home: "germany", away: "curacao" },
  { key: "spain-capeVerde", home: "spain", away: "capeverde" },
  { key: "france-senegal", home: "france", away: "senegal" },
  { key: "argentina-algeria", home: "argentina", away: "algeria" },
  { key: "austria-jordan", home: "austria", away: "jordan" },
  { key: "england-croatia", home: "england", away: "croatia" },
  { key: "portugal-colombia", home: "portugal", away: "colombia" },
];
