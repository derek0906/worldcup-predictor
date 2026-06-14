import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, stat, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { setTimeout as delay } from "node:timers/promises";
import { spawnSync } from "node:child_process";

const appSource = await readFile("app.js", "utf8");
const indexSource = await readFile("index.html", "utf8");
const stylesSource = await readFile("styles.css", "utf8");
const netlifyConfig = await readFile("netlify.toml", "utf8");
const leaderboardStoreSource = await readFile("netlify/functions/_leaderboard-store.mjs", "utf8");
const autoUpdateWorkflow = await readFile(".github/workflows/update-data.yml", "utf8").catch(() => "");
const marketOdds = JSON.parse(await readFile("data/market-odds.json", "utf8"));
const realMatches = JSON.parse(await readFile("data/matches.json", "utf8"));
const teamRatings = JSON.parse(await readFile("data/team-ratings.json", "utf8"));
const modelInputs = JSON.parse(await readFile("data/model-inputs.json", "utf8"));
const oddsUpdaterSource = await readFile("scripts/update-market-odds.mjs", "utf8");

const matchBlock = appSource.match(/(?:const|let) matches = \[(?<body>[\s\S]*?)\];/);
assert.ok(matchBlock, "app.js should define matches");
assert.match(appSource, /kickoffAt:/, "matches should include ISO kickoffAt values");
assert.match(appSource, /status:/, "matches should include pre/live/final status");
assert.match(appSource, /renderMatchStatus/, "UI should render match status instead of only static dates");
assert.match(appSource, /Array\.isArray\(market\.correctScore\)/, "market rendering should tolerate missing correctScore");
assert.match(appSource, /market\.corners &&/, "market rendering should tolerate missing corners");
assert.match(appSource, /loadRealDataCache/, "frontend should try to load real data cache");
assert.match(appSource, /applyRealDataCache/, "frontend should apply real data before rendering");
assert.match(appSource, /seedByKey/, "frontend should replace the seed schedule with the full real-data schedule");
assert.doesNotMatch(indexSource, /id="copyButton"/, "quick judgment should not keep a duplicate share button");
assert.doesNotMatch(indexSource, /复制分享文案/, "quick judgment share copy should be removed");
assert.match(indexSource, /今日投注雷达/, "match brief should include betting radar content");
assert.match(indexSource, /世界杯朋友局策略桌/, "site should use a friend-group strategy table identity");
assert.match(indexSource, /今日策略雷达/, "radar copy should feel like a strategy helper instead of a model report");
assert.match(indexSource, /id="copyMultiStrategyButton"/, "prediction panel should include multi-match strategy sharing");
assert.match(indexSource, /id="matchQuickFilter"/, "match selector should include quick date filters");
assert.match(indexSource, /id="matchSearchInput"/, "match selector should include search for large schedules");
assert.match(indexSource, /id="multiScorePanel"/, "prediction panel should include a batch score picker");
assert.match(indexSource, /id="nicknameInput"/, "friend interaction should keep nickname input");
assert.doesNotMatch(indexSource, /class="pick-buttons"/, "friend interaction should not show single-match pick buttons");
assert.doesNotMatch(indexSource, /id="scoreHomeInput"/, "friend interaction should not show single-match score inputs");
assert.doesNotMatch(indexSource, /id="strategyCard"/, "friend interaction should not show the single-match strategy card");
assert.match(indexSource, /id="predictionPanel"/, "index.html should include prediction panel");
assert.match(indexSource, /id="leaderboardRows"/, "index.html should include leaderboard rows");
assert.match(appSource, /loadLeaderboard/, "app.js should load shared leaderboard");
assert.match(appSource, /submitPredictionBatch/, "app.js should submit one same-day batch to leaderboard");
assert.match(appSource, /buildFunTags/, "app.js should render fun tags");
assert.match(appSource, /buildBettingRadar/, "app.js should build the betting radar replacement for quick judgment");
assert.match(appSource, /buildExpandedStrategyCard/, "app.js should build expanded betting strategy sections");
assert.match(appSource, /buildMultiMatchStrategyShare/, "app.js should build compact multi-match strategy copy");
assert.match(appSource, /renderMatchSelectorOptions/, "app.js should render filtered match selector options");
assert.match(appSource, /renderMultiScorePanel/, "app.js should let users fill multiple same-day scores before sharing");
assert.match(appSource, /multiStrategySelection/, "multi-match sharing should use a shared same-day selection helper");
assert.match(appSource, /updateDraftForMatch/, "batch score inputs should save into the same draft storage as single match strategy");
assert.match(appSource, /userStrategyChoiceText/, "strategy card should be built from user-selected strategy choices");
assert.match(appSource, /buildPredictionBatchPayload/, "frontend should build one payload containing all same-day predictions");
assert.match(appSource, /isMultiScoreLocked/, "frontend should stop upload when any batch match has kicked off");
assert.match(appSource, /renderLeaderboardStrategy/, "leaderboard should render another user's saved strategy");
assert.match(appSource, /看策略/, "leaderboard rows should offer a view-strategy action");
assert.match(appSource, /batchScoreText/, "leaderboard should display batch hit totals such as 4中几");
assert.match(appSource, /我的选择/, "shared strategy copy should emphasize the user's own choices");
assert.match(appSource, /SHARE_SITE_URL/, "shared strategy copy should include a reusable site URL");
assert.match(appSource, /来这里生成你的策略/, "shared strategy copy should invite friends back to the site");
assert.match(appSource, /今日多场策略/, "shared prediction text should include today's multi-match strategy");
assert.match(appSource, /风险等级/, "shared prediction text should include risk level");
assert.match(appSource, /让球/, "shared strategy text should include spread strategy");
assert.match(appSource, /大小球/, "shared strategy text should include totals strategy");
assert.match(appSource, /波胆/, "shared strategy text should include correct-score strategy");
assert.match(appSource, /开球/, "shared strategy text should include kickoff strategy");
assert.match(appSource, /角球/, "shared strategy text should include corner strategy");
assert.match(stylesSource, /--grass/, "visual style should include grass-green theme tokens");
assert.match(stylesSource, /--gold-bright/, "visual style should include gold highlight tokens");
assert.match(stylesSource, /--ticket/, "strategy cards should use a ticket-like surface token");
assert.match(await readFile("netlify/functions/_leaderboard-store.mjs", "utf8"), /latestStrategy/, "leaderboard API should expose each user's latest strategy");
assert.match(await readFile("netlify/functions/_leaderboard-store.mjs", "utf8"), /sanitizePredictionBatch/, "leaderboard storage should sanitize batch predictions");
assert.match(await readFile("netlify/functions/_leaderboard-store.mjs", "utf8"), /clientIpHash/, "leaderboard storage should limit submissions by hashed IP");
assert.match(await readFile("netlify/functions/_leaderboard-store.mjs", "utf8"), /batchScoreText/, "leaderboard rows should include readable batch scores");
assert.match(await readFile("netlify/functions/_leaderboard-store.mjs", "utf8"), /spreadChoice/, "leaderboard storage should persist spread strategy choice");
assert.match(await readFile("netlify/functions/_leaderboard-store.mjs", "utf8"), /totalChoice/, "leaderboard storage should persist totals strategy choice");
assert.match(await readFile("netlify/functions/_leaderboard-store.mjs", "utf8"), /cornerChoice/, "leaderboard storage should persist corner strategy choice");
assert.match(await readFile("netlify/functions/_leaderboard-store.mjs", "utf8"), /riskChoice/, "leaderboard storage should persist risk style choice");
assert.match(appSource, /initialMatchIndex/, "app.js should choose the nearest relevant match on page load");
assert.match(appSource, /filter\(\(item\) => item\.kickoffTime >= nowTime\)/, "initial match should prefer upcoming matches");
assert.match(appSource, /elements\.matchSelect\.value = String\(state\.matchIndex\)/, "match selector should sync to the initial match");
assert.match(leaderboardStoreSource, /getStore/, "leaderboard storage should use Netlify Blobs");
assert.doesNotMatch(leaderboardStoreSource, /readFile\("data\/matches\.json"/, "leaderboard function should not rely on cwd-relative data path");
assert.match(leaderboardStoreSource, /import\.meta\.url/, "leaderboard function should resolve bundled match data from its module location");
assert.match(netlifyConfig, /functions\s*=\s*"netlify\/functions"/, "netlify.toml should declare the functions directory");
assert.match(netlifyConfig, /included_files\s*=\s*\["data\/matches\.json"\]/, "netlify.toml should bundle match data for functions");
assert.match(await readFile("netlify/functions/predictions.mjs", "utf8"), /predictions/, "predictions function should persist predictions");
assert.match(await readFile("scripts/update-real-data.mjs", "utf8"), /FOOTBALL_DATA_API_KEY/, "real data updater should support football-data.org");
assert.match(await readFile("scripts/update-real-data.mjs", "utf8"), /TEAM_RATINGS_SOURCE_URL/, "real data updater should support external rating input");
assert.match(oddsUpdaterSource, /ODDS_API_MARKETS/, "odds updater should allow expanded market selection");
assert.match(oddsUpdaterSource, /spreads/, "odds updater should support spread markets");
assert.match(oddsUpdaterSource, /totals/, "odds updater should support totals markets");
assert.match(oddsUpdaterSource, /readMatchMap/, "odds updater should build match coverage from data/matches.json");
assert.match(autoUpdateWorkflow, /node scripts\/update-real-data\.mjs/, "scheduled data workflow should refresh match and rating caches");
assert.match(autoUpdateWorkflow, /node scripts\/update-market-odds\.mjs/, "scheduled data workflow should refresh market odds cache");
assert.match(autoUpdateWorkflow, /cron: "\*\/30 16-23 \* \* \*"/, "scheduled data workflow should update every 30 minutes during the UTC match evening window");
assert.match(autoUpdateWorkflow, /cron: "\*\/30 0-5 \* \* \*"/, "scheduled data workflow should update every 30 minutes during the UTC match early window");
assert.match(autoUpdateWorkflow, /cron: "17 6,12 \* \* \*"/, "scheduled data workflow should keep a low-frequency off-window catch-up");
assert.match(autoUpdateWorkflow, /FOOTBALL_DATA_API_KEY: \$\{\{ secrets\.FOOTBALL_DATA_API_KEY \}\}/, "scheduled data workflow should read football-data key from GitHub Secrets");
assert.match(autoUpdateWorkflow, /ODDS_API_KEY: \$\{\{ secrets\.ODDS_API_KEY \}\}/, "scheduled data workflow should read odds key from GitHub Secrets");
assert.match(autoUpdateWorkflow, /file_pattern: data\/matches\.json data\/team-ratings\.json data\/model-inputs\.json data\/market-odds\.json/, "scheduled data workflow should only auto-commit data cache files");

assert.ok(Array.isArray(realMatches.matches), "data/matches.json should contain matches array");
assert.ok(realMatches.meta?.updatedAt, "data/matches.json should include metadata");
assert.ok(realMatches.matches.length >= 72, "data/matches.json should include the full group-stage schedule");
assert.deepEqual(
  realMatches.matches
    .filter((match) => match.kickoffAt && scheduleDate(match.kickoffAt) === "2026-06-15")
    .map((match) => match.key)
    .sort(),
  ["belgium-egypt", "iran-newZealand", "saudiArabia-uruguay", "spain-capeVerde"].sort(),
  "June 15 US schedule should include all four matches",
);
assert.ok(teamRatings.teams && typeof teamRatings.teams === "object", "data/team-ratings.json should contain teams object");
for (const key of ["belgium", "egypt", "saudiArabia", "uruguay", "iran", "newZealand"]) {
  assert.ok(teamRatings.teams[key], `team-ratings should include ${key}`);
}
assert.ok(modelInputs.weights && typeof modelInputs.weights === "object", "data/model-inputs.json should contain model weights");

for (const [key, market] of Object.entries(marketOdds)) {
  assert.ok(market.source, `${key} should have source`);
  assert.ok(market.updatedAt, `${key} should have updatedAt`);
  assert.ok(market.winner, `${key} should have winner odds`);
  for (const outcome of ["home", "draw", "away"]) {
    assert.equal(typeof market.winner[outcome], "number", `${key}.${outcome} should be numeric`);
    assert.ok(market.winner[outcome] > 1, `${key}.${outcome} should look like decimal odds`);
  }
}

await assertNoProviderDoesNotRewrite();

function scheduleDate(value) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(value));
}

async function assertNoProviderDoesNotRewrite() {
  const tempDir = await mkdtemp(join(tmpdir(), "worldcup-odds-"));
  try {
    await writeFile(join(tempDir, "market-odds.json"), "{}\n");
    const before = await stat(join(tempDir, "market-odds.json"));
    await delay(20);

    const result = spawnSync(
      process.execPath,
      ["scripts/update-market-odds.mjs", join(tempDir, "market-odds.json")],
      {
        cwd: process.cwd(),
        env: {
          PATH: process.env.PATH || "",
        },
        encoding: "utf8",
      },
    );

    assert.equal(result.status, 0, result.stderr || result.stdout);
    const after = await stat(join(tempDir, "market-odds.json"));
    assert.equal(after.mtimeMs, before.mtimeMs, "odds script should not rewrite cache without a provider");
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
}
