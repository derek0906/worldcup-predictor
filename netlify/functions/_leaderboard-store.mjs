import { getStore } from "@netlify/blobs";
import { readFile } from "node:fs/promises";

const STORE_NAME = "worldcup-predictions";
const PREDICTIONS_KEY = "predictions.json";
const MAX_PREDICTIONS = 1000;

export function getPredictionsStore() {
  return getStore(STORE_NAME);
}

export async function loadPredictions() {
  const store = getPredictionsStore();
  const saved = await store.get(PREDICTIONS_KEY, { type: "json" });
  return Array.isArray(saved) ? saved : [];
}

export async function savePredictions(predictions) {
  const store = getPredictionsStore();
  const trimmed = predictions
    .slice()
    .sort((a, b) => String(a.updatedAt).localeCompare(String(b.updatedAt)))
    .slice(-MAX_PREDICTIONS);
  await store.setJSON(PREDICTIONS_KEY, trimmed);
  return trimmed;
}

export async function loadMatches() {
  const matches = JSON.parse(await readFile("data/matches.json", "utf8"));
  return Array.isArray(matches.matches) ? matches.matches : [];
}

export function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

export function predictionResult(match) {
  if (!match?.result) return null;
  if (match.result.home > match.result.away) return "home";
  if (match.result.home < match.result.away) return "away";
  return "draw";
}

export function hasKickedOff(match, now = new Date()) {
  if (!match?.kickoffAt) return false;
  return new Date(match.kickoffAt).getTime() <= now.getTime();
}

export function sanitizePrediction(input, matches, now = new Date()) {
  const matchKey = String(input?.matchKey || "").trim();
  const match = matches.find((item) => (item.key || `${item.home}-${item.away}`) === matchKey);
  if (!match) {
    return { error: "未知比赛" };
  }

  if (hasKickedOff(match, now)) {
    return { error: "比赛已经开球，不能再提交预测" };
  }

  const nickname = String(input?.nickname || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 18);
  if (!nickname) {
    return { error: "请输入昵称" };
  }

  const deviceId = String(input?.deviceId || "")
    .replace(/[^a-zA-Z0-9_-]/g, "")
    .slice(0, 80);
  if (!deviceId) {
    return { error: "缺少设备标识" };
  }

  const pick = String(input?.pick || "");
  if (!["home", "draw", "away"].includes(pick)) {
    return { error: "请选择胜平负方向" };
  }

  const scoreHome = Number.parseInt(input?.scoreHome, 10);
  const scoreAway = Number.parseInt(input?.scoreAway, 10);
  if (!Number.isInteger(scoreHome) || !Number.isInteger(scoreAway) || scoreHome < 0 || scoreAway < 0 || scoreHome > 9 || scoreAway > 9) {
    return { error: "比分需要在 0-9 之间" };
  }

  const confidence = Math.min(100, Math.max(1, Number.parseInt(input?.confidence, 10) || 50));
  const timestamp = now.toISOString();

  return {
    prediction: {
      id: `${deviceId}:${matchKey}`,
      matchKey,
      nickname,
      deviceId,
      pick,
      scoreHome,
      scoreAway,
      confidence,
      createdAt: timestamp,
      updatedAt: timestamp,
    },
  };
}

export function buildLeaderboard(predictions, matches) {
  const matchByKey = new Map(matches.map((match) => [match.key || `${match.home}-${match.away}`, match]));
  const byUser = new Map();

  for (const prediction of predictions) {
    const key = `${prediction.deviceId}:${prediction.nickname}`;
    const user = byUser.get(key) || {
      nickname: prediction.nickname,
      deviceId: prediction.deviceId,
      predictions: [],
    };
    user.predictions.push(prediction);
    byUser.set(key, user);
  }

  const rows = [...byUser.values()].map((user) => {
    const completed = user.predictions
      .map((prediction) => {
        const match = matchByKey.get(prediction.matchKey);
        const result = predictionResult(match);
        return result
          ? {
              ...prediction,
              kickoffAt: match.kickoffAt || prediction.createdAt,
              hit: prediction.pick === result,
            }
          : null;
      })
      .filter(Boolean)
      .sort((a, b) => String(a.kickoffAt).localeCompare(String(b.kickoffAt)));

    let currentStreak = 0;
    let totalHits = 0;
    for (const item of completed) {
      if (item.hit) {
        currentStreak += 1;
        totalHits += 1;
      } else {
        currentStreak = 0;
      }
    }

    const latest = user.predictions
      .slice()
      .sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)))[0];

    return {
      nickname: user.nickname,
      currentStreak,
      totalHits,
      totalPredictions: user.predictions.length,
      latestMatch: latest?.matchKey || "",
      latestPick: latest?.pick || "",
      updatedAt: latest?.updatedAt || "",
    };
  });

  rows.sort((a, b) => {
    if (b.currentStreak !== a.currentStreak) return b.currentStreak - a.currentStreak;
    if (b.totalHits !== a.totalHits) return b.totalHits - a.totalHits;
    return String(b.updatedAt).localeCompare(String(a.updatedAt));
  });

  const recent = predictions
    .slice()
    .sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)))
    .slice(0, 8)
    .map(({ nickname, matchKey, pick, scoreHome, scoreAway, confidence, updatedAt }) => ({
      nickname,
      matchKey,
      pick,
      scoreHome,
      scoreAway,
      confidence,
      updatedAt,
    }));

  return {
    rows: rows.slice(0, 20),
    recent,
    updatedAt: new Date().toISOString(),
    note: "娱乐榜单，非严格防作弊。",
  };
}
