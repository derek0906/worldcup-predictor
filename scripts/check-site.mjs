import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, stat, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { setTimeout as delay } from "node:timers/promises";
import { spawnSync } from "node:child_process";

const appSource = await readFile("app.js", "utf8");
const indexSource = await readFile("index.html", "utf8");
const netlifyConfig = await readFile("netlify.toml", "utf8");
const leaderboardStoreSource = await readFile("netlify/functions/_leaderboard-store.mjs", "utf8");
const autoUpdateWorkflow = await readFile(".github/workflows/update-data.yml", "utf8").catch(() => "");
const marketOdds = JSON.parse(await readFile("data/market-odds.json", "utf8"));
const realMatches = JSON.parse(await readFile("data/matches.json", "utf8"));
const teamRatings = JSON.parse(await readFile("data/team-ratings.json", "utf8"));
const modelInputs = JSON.parse(await readFile("data/model-inputs.json", "utf8"));

const matchBlock = appSource.match(/(?:const|let) matches = \[(?<body>[\s\S]*?)\];/);
assert.ok(matchBlock, "app.js should define matches");
assert.match(appSource, /kickoffAt:/, "matches should include ISO kickoffAt values");
assert.match(appSource, /status:/, "matches should include pre/live/final status");
assert.match(appSource, /renderMatchStatus/, "UI should render match status instead of only static dates");
assert.match(appSource, /Array\.isArray\(market\.correctScore\)/, "market rendering should tolerate missing correctScore");
assert.match(appSource, /market\.corners &&/, "market rendering should tolerate missing corners");
assert.match(appSource, /loadRealDataCache/, "frontend should try to load real data cache");
assert.match(appSource, /applyRealDataCache/, "frontend should apply real data before rendering");
assert.match(indexSource, /id="predictionPanel"/, "index.html should include prediction panel");
assert.match(indexSource, /id="leaderboardRows"/, "index.html should include leaderboard rows");
assert.match(indexSource, /id="strategyCard"/, "index.html should include a shareable strategy card");
assert.match(indexSource, /id="strategyTitle"/, "index.html should show the user's strategy title");
assert.match(appSource, /loadLeaderboard/, "app.js should load shared leaderboard");
assert.match(appSource, /submitPrediction/, "app.js should submit user predictions");
assert.match(appSource, /buildFunTags/, "app.js should render fun tags");
assert.match(appSource, /buildStrategyCard/, "app.js should build strategy-card content");
assert.match(appSource, /renderStrategyCard/, "app.js should render the strategy card when predictions change");
assert.match(appSource, /下注策略/, "shared prediction text should include the user's strategy");
assert.match(appSource, /风险等级/, "shared prediction text should include risk level");
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
assert.ok(teamRatings.teams && typeof teamRatings.teams === "object", "data/team-ratings.json should contain teams object");
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
