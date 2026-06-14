import { buildLeaderboard, jsonResponse, loadMatches, loadPredictions } from "./_leaderboard-store.mjs";

export default async function handler() {
  try {
    const [predictions, matches] = await Promise.all([loadPredictions(), loadMatches()]);
    return jsonResponse(buildLeaderboard(predictions, matches));
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
