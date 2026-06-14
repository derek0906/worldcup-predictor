# Interactive Predictions And Streak Leaderboard Design

## Goal

Make the World Cup predictor feel more participatory and fun while keeping the current professional prediction and market-data core. Visitors should be able to make their own prediction, compare it with the model, and see a lightweight streak leaderboard for friends.

## Scope

This version adds:

- A "My Prediction" panel for the selected match.
- A model-vs-user comparison message.
- Match-specific fun tags such as upset alert, one-sided odds, model split, or goal-fest tendency.
- A shareable text generator for the user's prediction.
- A lightweight shared streak leaderboard.

This version does not add accounts, payments, strict anti-cheat, comments, or complex social features.

## User Prediction Flow

For each match, the visitor can:

- Enter a nickname.
- Pick home win, draw, or away win.
- Enter an expected score.
- Set a confidence value.
- Submit the prediction before kickoff.

The page immediately shows a short comparison:

- Same result as the model: "同路，模型也支持这个方向。"
- Different from the model: "你在押一个更激进/更冷门的方向。"
- Score aligns with model score: highlight as close to model.

Predictions are stored locally first so the user can continue browsing without losing the form.

## Shared Leaderboard

Use a lightweight Netlify Function API backed by Netlify Blobs.

Endpoints:

- `GET /.netlify/functions/leaderboard`
  Returns current leaderboard rows and recent public predictions.
- `POST /.netlify/functions/predictions`
  Saves or updates one prediction for one nickname/device/match combination.

Each prediction stores:

- `id`
- `matchKey`
- `nickname`
- `deviceId`
- `pick`
- `scoreHome`
- `scoreAway`
- `confidence`
- `createdAt`
- `updatedAt`

The leaderboard derives:

- Current streak.
- Total hits.
- Total predictions.
- Latest match.

Result grading uses `data/matches.json` final scores:

- A hit means the predicted winner/draw direction matches the final result.
- Pending matches do not affect streaks.
- A wrong completed prediction resets the active streak.

Because there is no login, show a small note: "娱乐榜单，非严格防作弊。"

## Frontend Placement

Place the interactive area after the main prediction summary and before the market panel:

- Current prediction remains the primary content.
- The new panel should feel like a compact game card, not a separate app.
- On mobile, controls stack vertically.
- The leaderboard can sit below the input controls inside the same panel, with 5-8 visible rows.

## Visual Tone

Keep the current clean sports-analysis feel, but add warmer interactive details:

- Small status chips.
- Confidence slider.
- Selected result buttons.
- Streak badges.
- Share/copy button.

Avoid heavy animations or a casino/gambling feel. Odds remain informational.

## Error Handling

- If leaderboard API fails, keep the prediction form usable and show local-only mode.
- If nickname is empty, ask for a nickname before submit.
- If a match has already kicked off, disable submission for that match.
- If Netlify Blobs is unavailable, return an empty leaderboard and a readable error message.

## Testing

Add focused tests to `scripts/check-site.mjs`:

- Required leaderboard function files exist.
- `index.html` contains the new prediction panel hooks.
- `app.js` contains the client-side leaderboard API integration hooks.
- Static JSON data still parses.

Manual verification:

- Run the static site check.
- Run or smoke-test the Netlify functions locally if available.
- Open the site and confirm the form, comparison, share text, and leaderboard fallback render.
