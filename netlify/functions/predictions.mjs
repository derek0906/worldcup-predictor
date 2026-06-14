import {
  buildLeaderboard,
  jsonResponse,
  loadMatches,
  loadPredictions,
  loadRewardClaims,
  sanitizePredictionBatch,
  savePredictions,
} from "./_leaderboard-store.mjs";

export default async function handler(request) {
  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  try {
    const matches = await loadMatches();
    const body = await request.json();
    const result = sanitizePredictionBatch(body, matches, request);
    if (result.error) {
      return jsonResponse({ error: result.error }, 400);
    }

    const predictions = await loadPredictions();
    const existing = predictions.find((item) => item.id === result.prediction.id);
    if (existing) {
      return jsonResponse({ error: "这个 IP 今天已经提交过，不能重复上传" }, 409);
    }
    predictions.push(result.prediction);

    const saved = await savePredictions(predictions);
    const rewardClaims = await loadRewardClaims();
    return jsonResponse({
      prediction: result.prediction,
      leaderboard: buildLeaderboard(saved, matches, rewardClaims),
    });
  } catch (error) {
    return jsonResponse({
      error: error instanceof Error ? error.message : "预测提交失败",
    }, 500);
  }
}
