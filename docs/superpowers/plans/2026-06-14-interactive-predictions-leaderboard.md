# Interactive Predictions Leaderboard Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a playful prediction form, model comparison, share text, fun tags, and a lightweight shared streak leaderboard.

**Architecture:** Keep the static frontend as the main experience and add two Netlify Functions for shared leaderboard persistence. Frontend stores draft predictions in localStorage, submits to functions when available, and falls back to local-only mode if the API is unavailable.

**Tech Stack:** Plain HTML/CSS/JavaScript, Netlify Functions, Netlify Blobs, existing `scripts/check-site.mjs` static checks.

---

### Task 1: Static Contract Checks

**Files:**
- Modify: `scripts/check-site.mjs`

- [ ] **Step 1: Write failing checks**

Add assertions that require these hooks and files:

```js
const indexSource = await readFile("index.html", "utf8");
assert.match(indexSource, /id="predictionPanel"/, "index.html should include prediction panel");
assert.match(indexSource, /id="leaderboardRows"/, "index.html should include leaderboard rows");
assert.match(appSource, /loadLeaderboard/, "app.js should load shared leaderboard");
assert.match(appSource, /submitPrediction/, "app.js should submit user predictions");
assert.match(appSource, /buildFunTags/, "app.js should render fun tags");
assert.match(await readFile("netlify/functions/leaderboard.mjs", "utf8"), /getStore/, "leaderboard function should use Netlify Blobs");
assert.match(await readFile("netlify/functions/predictions.mjs", "utf8"), /predictions/, "predictions function should persist predictions");
```

- [ ] **Step 2: Run test to verify it fails**

Run: `/Users/zrf/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node scripts/check-site.mjs`

Expected: FAIL because `predictionPanel` and function files do not exist yet.

- [ ] **Step 3: Keep this as the implementation guard**

Do not weaken the assertions. Later tasks must make this command pass.

### Task 2: Netlify Function Storage

**Files:**
- Create: `netlify/functions/_leaderboard-store.mjs`
- Create: `netlify/functions/leaderboard.mjs`
- Create: `netlify/functions/predictions.mjs`
- Modify: `package.json`

- [ ] **Step 1: Add dependency**

Add `@netlify/blobs` to `dependencies` so Netlify Functions can persist predictions.

- [ ] **Step 2: Implement shared store helper**

Create helper functions:

```js
export function predictionResult(match) {
  if (!match?.result) return null;
  if (match.result.home > match.result.away) return "home";
  if (match.result.home < match.result.away) return "away";
  return "draw";
}
```

Also export `loadPredictions`, `savePredictions`, `sanitizePrediction`, and `buildLeaderboard`.

- [ ] **Step 3: Implement `GET leaderboard`**

Return JSON:

```json
{
  "rows": [],
  "recent": [],
  "updatedAt": "ISO_DATE"
}
```

- [ ] **Step 4: Implement `POST predictions`**

Accept JSON prediction data, sanitize nickname and numbers, upsert by `deviceId + matchKey`, save, and return the recalculated leaderboard.

### Task 3: Frontend Markup

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add prediction panel after probability section**

Add a new section with:

```html
<section id="predictionPanel" class="prediction-panel" aria-label="我的预测与连红榜">
```

Include nickname input, pick buttons, score inputs, confidence range, submit button, comparison text, share button, fun tags, leaderboard rows, and status text.

- [ ] **Step 2: Keep market panel below the interaction panel**

The new feature should not bury the existing prediction and probability summary.

### Task 4: Frontend Behavior

**Files:**
- Modify: `app.js`

- [ ] **Step 1: Add element references**

Add references for every new `id`.

- [ ] **Step 2: Add local prediction state**

Use localStorage keys:

```js
const DEVICE_ID_KEY = "worldcupPredictorDeviceId";
const PREDICTION_DRAFTS_KEY = "worldcupPredictorDrafts";
```

- [ ] **Step 3: Add user/model comparison**

Implement `modelPick`, `buildPredictionComparison`, and `buildFunTags`.

- [ ] **Step 4: Add leaderboard API integration**

Implement `loadLeaderboard` and `submitPrediction` with fetch calls to `/.netlify/functions/leaderboard` and `/.netlify/functions/predictions`.

- [ ] **Step 5: Add local-only fallback**

If fetch fails, render a clear "本地模式" status while keeping the form usable.

### Task 5: Styling

**Files:**
- Modify: `styles.css`

- [ ] **Step 1: Style the prediction panel**

Use compact cards, selected pick buttons, chips, slider, and leaderboard rows.

- [ ] **Step 2: Add responsive rules**

On mobile, stack the form and leaderboard vertically. Avoid nested-card clutter.

### Task 6: Verification And Deploy Prep

**Files:**
- Modify as needed: `README.md`

- [ ] **Step 1: Run static check**

Run: `/Users/zrf/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node scripts/check-site.mjs`

Expected: exit 0.

- [ ] **Step 2: Run local visual check**

Open the local site and verify the panel renders.

- [ ] **Step 3: Commit**

Commit message:

```bash
git commit -m "Add interactive predictions leaderboard"
```
