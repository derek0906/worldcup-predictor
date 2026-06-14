import {
  buildLeaderboard,
  jsonResponse,
  loadMatches,
  loadPredictions,
  sanitizePrediction,
  savePredictions,
} from "./_leaderboard-store.mjs";

export default async function handler(request) {
  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  try {
    const matches = await loadMatches();
    const body = await request.json();
    const result = sanitizePrediction(body, matches);
    if (result.error) {
      return jsonResponse({ error: result.error }, 400);
    }

    const predictions = await loadPredictions();
    const existing = predictions.findIndex((item) => item.id === result.prediction.id);
    if (existing >= 0) {
      result.prediction.createdAt = predictions[existing].createdAt || result.prediction.createdAt;
      predictions[existing] = result.prediction;
    } else {
      predictions.push(result.prediction);
    }

    const saved = await savePredictions(predictions);
    return jsonResponse({
      prediction: result.prediction,
      leaderboard: buildLeaderboard(saved, matches),
    });
  } catch (error) {
    return jsonResponse({
      error: error instanceof Error ? error.message : "预测提交失败",
    }, 500);
  }
}
