import { getStore } from "@netlify/blobs";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";

const STORE_NAME = "worldcup-predictions";
const PREDICTIONS_KEY = "predictions.json";
const MAX_PREDICTIONS = 1000;
const MATCHES_PATH = new URL("../../data/matches.json", import.meta.url);

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
  const matches = JSON.parse(await readFile(MATCHES_PATH, "utf8"));
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

export function chinaDateKey(value = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(value);
}

export function matchBatchKey(match) {
  return match?.kickoffAt ? chinaDateKey(new Date(match.kickoffAt)) : "";
}

export function clientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for") || "";
  return (
    request.headers.get("x-nf-client-connection-ip") ||
    forwarded.split(",")[0]?.trim() ||
    request.headers.get("client-ip") ||
    "unknown"
  );
}

export function clientIpHash(request) {
  return createHash("sha256").update(clientIp(request)).digest("hex").slice(0, 32);
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
  const spreadChoice = sanitizeChoice(input?.spreadChoice, ["none", "follow", "avoid"], "none");
  const totalChoice = sanitizeChoice(input?.totalChoice, ["none", "over", "under"], "none");
  const cornerChoice = sanitizeChoice(input?.cornerChoice, ["none", "over", "under"], "none");
  const riskChoice = sanitizeChoice(input?.riskChoice, ["steady", "medium", "upset"], "medium");
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
      spreadChoice,
      totalChoice,
      cornerChoice,
      riskChoice,
      createdAt: timestamp,
      updatedAt: timestamp,
    },
  };
}

export function sanitizePredictionBatch(input, matches, request, now = new Date()) {
  const nickname = String(input?.nickname || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 18);
  if (!nickname) {
    return { error: "请输入昵称" };
  }

  const entries = Array.isArray(input?.entries) ? input.entries : [];
  if (entries.length === 0) {
    return { error: "请至少填写一场比分" };
  }

  const matchByKey = new Map(matches.map((match) => [match.key || `${match.home}-${match.away}`, match]));
  const batchKeys = new Set();
  const sanitizedEntries = [];

  for (const entry of entries) {
    const matchKey = String(entry?.matchKey || "").trim();
    const match = matchByKey.get(matchKey);
    if (!match) {
      return { error: "未知比赛" };
    }
    if (hasKickedOff(match, now)) {
      return { error: "今日批次里已有比赛开球，不能再提交预测" };
    }

    const batchKey = matchBatchKey(match);
    batchKeys.add(batchKey);

    const scoreHome = Number.parseInt(entry?.scoreHome, 10);
    const scoreAway = Number.parseInt(entry?.scoreAway, 10);
    if (!Number.isInteger(scoreHome) || !Number.isInteger(scoreAway) || scoreHome < 0 || scoreAway < 0 || scoreHome > 9 || scoreAway > 9) {
      return { error: "比分需要在 0-9 之间" };
    }

    const pick = scoreHome > scoreAway ? "home" : scoreHome < scoreAway ? "away" : "draw";
    sanitizedEntries.push({
      matchKey,
      pick,
      scoreHome,
      scoreAway,
      confidence: Math.min(100, Math.max(1, Number.parseInt(entry?.confidence, 10) || 70)),
      spreadChoice: sanitizeChoice(entry?.spreadChoice, ["none", "follow", "avoid"], "none"),
      totalChoice: sanitizeChoice(entry?.totalChoice, ["none", "over", "under"], "none"),
      cornerChoice: sanitizeChoice(entry?.cornerChoice, ["none", "over", "under"], "none"),
      riskChoice: sanitizeChoice(entry?.riskChoice, ["steady", "medium", "upset"], "medium"),
    });
  }

  if (batchKeys.size !== 1) {
    return { error: "一次只能提交同一天的比赛" };
  }

  const batchKey = [...batchKeys][0];
  const batchMatches = matches.filter((match) => matchBatchKey(match) === batchKey);
  const expectedKeys = new Set(batchMatches.map((match) => match.key || `${match.home}-${match.away}`));
  if (sanitizedEntries.length !== expectedKeys.size || sanitizedEntries.some((entry) => !expectedKeys.has(entry.matchKey))) {
    return { error: `请一次提交 ${expectedKeys.size} 场今日比赛` };
  }

  const ipKey = clientIpHash(request);
  const timestamp = now.toISOString();
  return {
    prediction: {
      id: `batch:${batchKey}:${ipKey}`,
      batchKey,
      ipKey,
      nickname,
      deviceId: String(input?.deviceId || "").replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 80) || "browser",
      entries: sanitizedEntries,
      createdAt: timestamp,
      updatedAt: timestamp,
    },
  };
}

function sanitizeChoice(value, allowed, fallback) {
  const choice = String(value || fallback);
  return allowed.includes(choice) ? choice : fallback;
}

function publicStrategy(prediction) {
  return {
    matchKey: prediction.matchKey || "",
    pick: prediction.pick || "",
    scoreHome: Number.isInteger(prediction.scoreHome) ? prediction.scoreHome : null,
    scoreAway: Number.isInteger(prediction.scoreAway) ? prediction.scoreAway : null,
    confidence: Number.isInteger(prediction.confidence) ? prediction.confidence : null,
    spreadChoice: prediction.spreadChoice || "none",
    totalChoice: prediction.totalChoice || "none",
    cornerChoice: prediction.cornerChoice || "none",
    riskChoice: prediction.riskChoice || "medium",
    updatedAt: prediction.updatedAt || "",
  };
}

function publicBatchStrategies(prediction) {
  if (!Array.isArray(prediction.entries)) return [];
  return prediction.entries.map((entry) => ({
    matchKey: entry.matchKey || "",
    pick: entry.pick || "",
    scoreHome: Number.isInteger(entry.scoreHome) ? entry.scoreHome : null,
    scoreAway: Number.isInteger(entry.scoreAway) ? entry.scoreAway : null,
    confidence: Number.isInteger(entry.confidence) ? entry.confidence : null,
    spreadChoice: entry.spreadChoice || "none",
    totalChoice: entry.totalChoice || "none",
    cornerChoice: entry.cornerChoice || "none",
    riskChoice: entry.riskChoice || "medium",
  }));
}

export function batchScoreText(total, hits) {
  return `${total}中${hits}`;
}

function predictionEntries(prediction) {
  if (Array.isArray(prediction.entries)) {
    return prediction.entries.map((entry) => ({
      ...entry,
      batchKey: prediction.batchKey,
      nickname: prediction.nickname,
      deviceId: prediction.deviceId,
      updatedAt: prediction.updatedAt,
    }));
  }
  return [prediction];
}

export function buildLeaderboard(predictions, matches) {
  const matchByKey = new Map(matches.map((match) => [match.key || `${match.home}-${match.away}`, match]));
  const overallRows = buildRows(predictions, matchByKey, "overall");
  const dailyRows = {};
  const batchKeys = [...new Set(predictions.map((prediction) => prediction.batchKey).filter(Boolean))];
  for (const batchKey of batchKeys) {
    dailyRows[batchKey] = buildRows(
      predictions.filter((prediction) => prediction.batchKey === batchKey),
      matchByKey,
      "daily",
    );
  }

  const recent = predictions
    .slice()
    .sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)))
    .slice(0, 8)
    .map((prediction) => ({
      nickname: prediction.nickname,
      batchKey: prediction.batchKey || "",
      entries: publicBatchStrategies(prediction),
      matchKey: prediction.matchKey || prediction.entries?.[0]?.matchKey || "",
      pick: prediction.pick || prediction.entries?.[0]?.pick || "",
      scoreHome: prediction.scoreHome ?? prediction.entries?.[0]?.scoreHome,
      scoreAway: prediction.scoreAway ?? prediction.entries?.[0]?.scoreAway,
      confidence: prediction.confidence ?? prediction.entries?.[0]?.confidence,
      spreadChoice: prediction.spreadChoice || prediction.entries?.[0]?.spreadChoice || "none",
      totalChoice: prediction.totalChoice || prediction.entries?.[0]?.totalChoice || "none",
      cornerChoice: prediction.cornerChoice || prediction.entries?.[0]?.cornerChoice || "none",
      riskChoice: prediction.riskChoice || prediction.entries?.[0]?.riskChoice || "medium",
      updatedAt: prediction.updatedAt,
    }));

  return {
    rows: overallRows.slice(0, 20),
    overallRows: overallRows.slice(0, 20),
    dailyRows,
    recent,
    updatedAt: new Date().toISOString(),
    note: "娱乐榜单，非严格防作弊。",
  };
}

function buildRows(predictions, matchByKey, mode) {
  const byUser = new Map();

  for (const prediction of predictions) {
    const key = `${prediction.ipKey || prediction.deviceId}:${prediction.nickname}`;
    const user = byUser.get(key) || {
      nickname: prediction.nickname,
      deviceId: prediction.deviceId,
      predictions: [],
    };
    user.predictions.push(prediction);
    byUser.set(key, user);
  }

  const rows = [...byUser.values()].map((user) => {
    const flatPredictions = user.predictions.flatMap(predictionEntries);
    const completed = flatPredictions
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
    const latestEntries = predictionEntries(latest || {});
    const scoreEntries = mode === "overall" ? completed : latestEntries;
    const batchTotal = mode === "overall" ? flatPredictions.length : latestEntries.length;
    const batchHits = scoreEntries.filter((entry) => {
      const match = matchByKey.get(entry.matchKey);
      const result = predictionResult(match);
      return "hit" in entry ? entry.hit : result && entry.pick === result;
    }).length;
    const scoreText = mode === "overall" ? `总榜 ${batchScoreText(batchTotal, batchHits)}` : batchScoreText(batchTotal, batchHits);

    return {
      nickname: user.nickname,
      currentStreak,
      totalHits,
      totalPredictions: flatPredictions.length,
      batchKey: latest?.batchKey || latestEntries[0]?.batchKey || "",
      batchHits,
      batchTotal,
      batchScoreText: scoreText,
      latestMatch: latest?.matchKey || latestEntries[0]?.matchKey || "",
      latestPick: latest?.pick || latestEntries[0]?.pick || "",
      latestStrategy: latest && !Array.isArray(latest.entries) ? publicStrategy(latest) : null,
      latestStrategies: latest ? publicBatchStrategies(latest) : [],
      updatedAt: latest?.updatedAt || "",
    };
  });

  rows.sort((a, b) => {
    if (b.batchHits !== a.batchHits) return b.batchHits - a.batchHits;
    if (b.currentStreak !== a.currentStreak) return b.currentStreak - a.currentStreak;
    return String(b.updatedAt).localeCompare(String(a.updatedAt));
  });

  return rows;
}
