import {
  buildLeaderboard,
  jsonResponse,
  loadMatches,
  loadPredictions,
  loadRewardClaims,
  sanitizeRewardClaim,
  saveRewardClaim,
} from "./_leaderboard-store.mjs";

export default async function handler(request) {
  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  try {
    const [predictions, matches, rewardClaims] = await Promise.all([
      loadPredictions(),
      loadMatches(),
      loadRewardClaims(),
    ]);
    const body = await request.json();
    const result = sanitizeRewardClaim(body, predictions, matches, request, rewardClaims);
    if (result.error) {
      return jsonResponse({ error: result.error }, 400);
    }

    const claim = await saveRewardClaim(result.claim);
    const updatedClaims = await loadRewardClaims();
    return jsonResponse({
      claimCode: claim.claimCode,
      status: claim.status,
      leaderboard: buildLeaderboard(predictions, matches, updatedClaims),
    });
  } catch (error) {
    return jsonResponse({
      error: error instanceof Error ? error.message : "领奖申请提交失败",
    }, 500);
  }
}
