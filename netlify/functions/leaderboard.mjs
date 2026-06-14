import { buildLeaderboard, jsonResponse, loadMatches, loadPredictions, loadRewardClaims } from "./_leaderboard-store.mjs";

export default async function handler() {
  try {
    const [predictions, matches, rewardClaims] = await Promise.all([loadPredictions(), loadMatches(), loadRewardClaims()]);
    return jsonResponse(buildLeaderboard(predictions, matches, rewardClaims));
  } catch (error) {
    return jsonResponse({
      rows: [],
      recent: [],
      updatedAt: new Date().toISOString(),
      note: "娱乐榜单，非严格防作弊。",
      error: error instanceof Error ? error.message : "排行榜暂时不可用",
    });
  }
}
