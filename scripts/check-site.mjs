import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, stat, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { setTimeout as delay } from "node:timers/promises";
import { spawnSync } from "node:child_process";

const appSource = await readFile("app.js", "utf8");
const marketOdds = JSON.parse(await readFile("data/market-odds.json", "utf8"));

const matchBlock = appSource.match(/const matches = \[(?<body>[\s\S]*?)\];/);
assert.ok(matchBlock, "app.js should define matches");
assert.match(appSource, /kickoffAt:/, "matches should include ISO kickoffAt values");
assert.match(appSource, /status:/, "matches should include pre/live/final status");
assert.match(appSource, /renderMatchStatus/, "UI should render match status instead of only static dates");
assert.match(appSource, /Array\.isArray\(market\.correctScore\)/, "market rendering should tolerate missing correctScore");
assert.match(appSource, /market\.corners &&/, "market rendering should tolerate missing corners");

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
