let teams = {
  mexico: {
    name: "墨西哥",
    short: "MEX",
    flag: "🇲🇽",
    rating: 79,
    form: 72,
    attack: 76,
    defense: 73,
    experience: 84,
    hostBoost: 6,
  },
  southAfrica: {
    name: "南非",
    short: "RSA",
    flag: "🇿🇦",
    rating: 66,
    form: 65,
    attack: 62,
    defense: 64,
    experience: 58,
    hostBoost: 0,
  },
  korea: {
    name: "韩国",
    short: "KOR",
    flag: "🇰🇷",
    rating: 76,
    form: 74,
    attack: 73,
    defense: 71,
    experience: 78,
    hostBoost: 0,
  },
  czechia: {
    name: "捷克",
    short: "CZE",
    flag: "🇨🇿",
    rating: 73,
    form: 70,
    attack: 71,
    defense: 72,
    experience: 66,
    hostBoost: 0,
  },
  canada: {
    name: "加拿大",
    short: "CAN",
    flag: "🇨🇦",
    rating: 72,
    form: 71,
    attack: 72,
    defense: 68,
    experience: 57,
    hostBoost: 6,
  },
  bosnia: {
    name: "波黑",
    short: "BIH",
    flag: "🇧🇦",
    rating: 71,
    form: 68,
    attack: 70,
    defense: 69,
    experience: 61,
    hostBoost: 0,
  },
  usa: {
    name: "美国",
    short: "USA",
    flag: "🇺🇸",
    rating: 78,
    form: 73,
    attack: 76,
    defense: 72,
    experience: 74,
    hostBoost: 6,
  },
  paraguay: {
    name: "巴拉圭",
    short: "PAR",
    flag: "🇵🇾",
    rating: 73,
    form: 71,
    attack: 69,
    defense: 75,
    experience: 70,
    hostBoost: 0,
  },
  brazil: {
    name: "巴西",
    short: "BRA",
    flag: "🇧🇷",
    rating: 91,
    form: 84,
    attack: 91,
    defense: 83,
    experience: 95,
    hostBoost: 0,
  },
  morocco: {
    name: "摩洛哥",
    short: "MAR",
    flag: "🇲🇦",
    rating: 82,
    form: 80,
    attack: 78,
    defense: 81,
    experience: 74,
    hostBoost: 0,
  },
  germany: {
    name: "德国",
    short: "GER",
    flag: "🇩🇪",
    rating: 87,
    form: 82,
    attack: 86,
    defense: 81,
    experience: 94,
    hostBoost: 0,
  },
  curacao: {
    name: "库拉索",
    short: "CUW",
    flag: "🇨🇼",
    rating: 61,
    form: 66,
    attack: 60,
    defense: 58,
    experience: 45,
    hostBoost: 0,
  },
  spain: {
    name: "西班牙",
    short: "ESP",
    flag: "🇪🇸",
    rating: 90,
    form: 88,
    attack: 88,
    defense: 84,
    experience: 91,
    hostBoost: 0,
  },
  capeVerde: {
    name: "佛得角",
    short: "CPV",
    flag: "🇨🇻",
    rating: 67,
    form: 70,
    attack: 66,
    defense: 64,
    experience: 45,
    hostBoost: 0,
  },
  france: {
    name: "法国",
    short: "FRA",
    flag: "🇫🇷",
    rating: 92,
    form: 86,
    attack: 90,
    defense: 86,
    experience: 93,
    hostBoost: 0,
  },
  senegal: {
    name: "塞内加尔",
    short: "SEN",
    flag: "🇸🇳",
    rating: 80,
    form: 77,
    attack: 76,
    defense: 79,
    experience: 72,
    hostBoost: 0,
  },
  argentina: {
    name: "阿根廷",
    short: "ARG",
    flag: "🇦🇷",
    rating: 91,
    form: 87,
    attack: 88,
    defense: 84,
    experience: 96,
    hostBoost: 0,
  },
  algeria: {
    name: "阿尔及利亚",
    short: "ALG",
    flag: "🇩🇿",
    rating: 75,
    form: 77,
    attack: 74,
    defense: 71,
    experience: 66,
    hostBoost: 0,
  },
  austria: {
    name: "奥地利",
    short: "AUT",
    flag: "🇦🇹",
    rating: 78,
    form: 76,
    attack: 75,
    defense: 76,
    experience: 63,
    hostBoost: 0,
  },
  jordan: {
    name: "约旦",
    short: "JOR",
    flag: "🇯🇴",
    rating: 63,
    form: 68,
    attack: 62,
    defense: 61,
    experience: 43,
    hostBoost: 0,
  },
  england: {
    name: "英格兰",
    short: "ENG",
    flag: "🏴",
    rating: 89,
    form: 84,
    attack: 87,
    defense: 82,
    experience: 87,
    hostBoost: 0,
  },
  croatia: {
    name: "克罗地亚",
    short: "CRO",
    flag: "🇭🇷",
    rating: 82,
    form: 76,
    attack: 78,
    defense: 79,
    experience: 88,
    hostBoost: 0,
  },
  portugal: {
    name: "葡萄牙",
    short: "POR",
    flag: "🇵🇹",
    rating: 88,
    form: 83,
    attack: 88,
    defense: 80,
    experience: 86,
    hostBoost: 0,
  },
  colombia: {
    name: "哥伦比亚",
    short: "COL",
    flag: "🇨🇴",
    rating: 81,
    form: 82,
    attack: 79,
    defense: 77,
    experience: 74,
    hostBoost: 0,
  },
};

let matches = [
  {
    group: "A组",
    date: "6月11日",
    kickoffAt: "2026-06-11T19:00:00Z",
    status: "final",
    result: { home: 2, away: 0 },
    venue: "墨西哥城",
    home: "mexico",
    away: "southAfrica",
  },
  {
    group: "A组",
    date: "6月11日",
    kickoffAt: "2026-06-12T01:00:00Z",
    status: "final",
    result: { home: 2, away: 1 },
    venue: "瓜达拉哈拉",
    home: "korea",
    away: "czechia",
  },
  {
    group: "B组",
    date: "6月12日",
    kickoffAt: "2026-06-12T19:00:00Z",
    status: "final",
    result: { home: 1, away: 1 },
    venue: "多伦多",
    home: "canada",
    away: "bosnia",
  },
  {
    group: "D组",
    date: "6月12日",
    kickoffAt: "2026-06-13T01:00:00Z",
    status: "final",
    result: { home: 4, away: 1 },
    venue: "洛杉矶",
    home: "usa",
    away: "paraguay",
  },
  {
    group: "C组",
    date: "6月13日",
    kickoffAt: "2026-06-13T22:00:00Z",
    status: "pre",
    venue: "纽约/新泽西",
    home: "brazil",
    away: "morocco",
  },
  {
    group: "E组",
    date: "6月14日",
    kickoffAt: "2026-06-14T19:00:00Z",
    status: "pre",
    venue: "休斯敦",
    home: "germany",
    away: "curacao",
  },
  {
    group: "H组",
    date: "6月15日",
    kickoffAt: "2026-06-15T22:00:00Z",
    status: "pre",
    venue: "亚特兰大",
    home: "spain",
    away: "capeVerde",
  },
  {
    group: "I组",
    date: "6月16日",
    kickoffAt: "2026-06-16T19:00:00Z",
    status: "pre",
    venue: "纽约/新泽西",
    home: "france",
    away: "senegal",
  },
  {
    group: "J组",
    date: "6月16日",
    kickoffAt: "2026-06-16T22:00:00Z",
    status: "pre",
    venue: "堪萨斯城",
    home: "argentina",
    away: "algeria",
  },
  {
    group: "J组",
    date: "6月16日",
    kickoffAt: "2026-06-17T01:00:00Z",
    status: "pre",
    venue: "旧金山湾区",
    home: "austria",
    away: "jordan",
  },
  {
    group: "L组",
    date: "6月17日",
    kickoffAt: "2026-06-17T22:00:00Z",
    status: "pre",
    venue: "达拉斯",
    home: "england",
    away: "croatia",
  },
  {
    group: "K组",
    date: "6月17日",
    kickoffAt: "2026-06-18T01:00:00Z",
    status: "pre",
    venue: "休斯敦",
    home: "portugal",
    away: "colombia",
  },
];

const kickoffHistory = {
  mexico: { firstKickoffRate: 54, sample: 18 },
  southAfrica: { firstKickoffRate: 48, sample: 16 },
  korea: { firstKickoffRate: 51, sample: 20 },
  czechia: { firstKickoffRate: 49, sample: 17 },
  canada: { firstKickoffRate: 53, sample: 14 },
  bosnia: { firstKickoffRate: 47, sample: 13 },
  usa: { firstKickoffRate: 52, sample: 19 },
  paraguay: { firstKickoffRate: 46, sample: 15 },
  brazil: { firstKickoffRate: 55, sample: 22 },
  morocco: { firstKickoffRate: 50, sample: 18 },
  germany: { firstKickoffRate: 52, sample: 21 },
  curacao: { firstKickoffRate: 45, sample: 10 },
  spain: { firstKickoffRate: 56, sample: 22 },
  capeVerde: { firstKickoffRate: 46, sample: 11 },
  france: { firstKickoffRate: 53, sample: 22 },
  senegal: { firstKickoffRate: 49, sample: 18 },
  argentina: { firstKickoffRate: 54, sample: 23 },
  algeria: { firstKickoffRate: 48, sample: 17 },
  austria: { firstKickoffRate: 50, sample: 18 },
  jordan: { firstKickoffRate: 47, sample: 12 },
  england: { firstKickoffRate: 52, sample: 21 },
  croatia: { firstKickoffRate: 51, sample: 20 },
  portugal: { firstKickoffRate: 53, sample: 22 },
  colombia: { firstKickoffRate: 49, sample: 20 },
};

const state = {
  matchIndex: 0,
  userPick: "home",
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const elements = {
  matchSelect: $("#matchSelect"),
  homeFlag: $("#homeFlag"),
  awayFlag: $("#awayFlag"),
  homeName: $("#homeName"),
  awayName: $("#awayName"),
  matchGroup: $("#matchGroup"),
  matchVenue: $("#matchVenue"),
  topPick: $("#topPick"),
  compactUpset: $("#compactUpset"),
  compactKickoff: $("#compactKickoff"),
  homeProbLabel: $("#homeProbLabel"),
  awayProbLabel: $("#awayProbLabel"),
  homeProb: $("#homeProb"),
  drawProb: $("#drawProb"),
  awayProb: $("#awayProb"),
  homeProbBar: $("#homeProbBar"),
  drawProbBar: $("#drawProbBar"),
  awayProbBar: $("#awayProbBar"),
  homeShort: $("#homeShort"),
  awayShort: $("#awayShort"),
  scoreText: $("#scoreText"),
  trendTag: $("#trendTag"),
  upsetProb: $("#upsetProb"),
  upsetLabel: $("#upsetLabel"),
  upsetProbBar: $("#upsetProbBar"),
  kickoffTeam: $("#kickoffTeam"),
  kickoffReason: $("#kickoffReason"),
  tempoTitle: $("#tempoTitle"),
  tempoCopy: $("#tempoCopy"),
  swingTitle: $("#swingTitle"),
  swingCopy: $("#swingCopy"),
  friendTitle: $("#friendTitle"),
  friendCopy: $("#friendCopy"),
  marketSource: $("#marketSource"),
  marketReturnRate: $("#marketReturnRate"),
  oddsRows: $("#oddsRows"),
  scoreRisk: $("#scoreRisk"),
  scoreMarket: $("#scoreMarket"),
  cornerRisk: $("#cornerRisk"),
  cornerMarket: $("#cornerMarket"),
  confidenceBadge: $("#confidenceBadge"),
  powerCompare: $("#powerCompare"),
  powerReason: $("#powerReason"),
  attackCompare: $("#attackCompare"),
  attackReason: $("#attackReason"),
  formCompare: $("#formCompare"),
  formReason: $("#formReason"),
  upsetReasonTitle: $("#upsetReasonTitle"),
  upsetReason: $("#upsetReason"),
  aiSummary: $("#aiSummary"),
  radarTitle: $("#radarTitle"),
  radarSteady: $("#radarSteady"),
  radarUpset: $("#radarUpset"),
  radarTempo: $("#radarTempo"),
  radarCopy: $("#radarCopy"),
  predictionPanel: $("#predictionPanel"),
  predictionForm: $("#predictionForm"),
  nicknameInput: $("#nicknameInput"),
  pickHomeButton: $("#pickHomeButton"),
  pickAwayButton: $("#pickAwayButton"),
  scoreHomeInput: $("#scoreHomeInput"),
  scoreAwayInput: $("#scoreAwayInput"),
  confidenceInput: $("#confidenceInput"),
  confidenceValue: $("#confidenceValue"),
  spreadChoice: $("#spreadChoice"),
  totalChoice: $("#totalChoice"),
  cornerChoice: $("#cornerChoice"),
  riskChoice: $("#riskChoice"),
  submitPredictionButton: $("#submitPredictionButton"),
  copyMyPredictionButton: $("#copyMyPredictionButton"),
  copyMultiStrategyButton: $("#copyMultiStrategyButton"),
  strategyMain: $("#strategyMain"),
  strategyTitle: $("#strategyTitle"),
  strategyPick: $("#strategyPick"),
  strategyScore: $("#strategyScore"),
  strategyConfidence: $("#strategyConfidence"),
  strategyReason: $("#strategyReason"),
  strategyRisk: $("#strategyRisk"),
  strategyEdge: $("#strategyEdge"),
  predictionComparison: $("#predictionComparison"),
  predictionNotice: $("#predictionNotice"),
  funTags: $("#funTags"),
  leaderboardStatus: $("#leaderboardStatus"),
  leaderboardRows: $("#leaderboardRows"),
  leaderboardUpdated: $("#leaderboardUpdated"),
  leaderboardNote: $("#leaderboardNote"),
  toast: $("#toast"),
};

let latestPayload = null;
let aiAnalysisCache = {};
let marketOddsCache = {};
let leaderboardCache = { rows: [], recent: [], note: "娱乐榜单，非严格防作弊。" };

const DEVICE_ID_KEY = "worldcupPredictorDeviceId";
const PREDICTION_DRAFTS_KEY = "worldcupPredictorDrafts";
const SHARE_SITE_URL = "https://storied-blini-c17d9b.netlify.app/";

function storageGet(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

function storageSet(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Keep the form usable even if storage is blocked.
  }
}

function deviceId() {
  let id = "";
  try {
    id = localStorage.getItem(DEVICE_ID_KEY) || "";
    if (!id) {
      id = `fan-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
      localStorage.setItem(DEVICE_ID_KEY, id);
    }
  } catch {
    id = "fan-local";
  }
  return id;
}

function applyRealDataCache(realData) {
  const realMatches = Array.isArray(realData.matches?.matches) ? realData.matches.matches : [];
  const realTeams = realData.ratings?.teams || {};

  if (realMatches.length > 0) {
    const byKey = new Map(realMatches.map((match) => [match.key || matchCacheKey(match), match]));
    matches = matches.map((match) => {
      const realMatch = byKey.get(matchCacheKey(match));
      return realMatch ? { ...match, ...realMatch } : match;
    });
  }

  for (const [key, rating] of Object.entries(realTeams)) {
    if (!teams[key]) continue;
    teams[key] = {
      ...teams[key],
      ...rating,
      name: teams[key].name,
      short: teams[key].short,
      flag: teams[key].flag,
    };
  }
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function teamPower(team) {
  return (
    team.rating * 0.36 +
    team.form * 0.22 +
    team.attack * 0.18 +
    team.defense * 0.14 +
    team.experience * 0.1 +
    team.hostBoost
  );
}

function softmax3(homeScore, drawScore, awayScore) {
  const max = Math.max(homeScore, drawScore, awayScore);
  const h = Math.exp((homeScore - max) / 9);
  const d = Math.exp((drawScore - max) / 9);
  const a = Math.exp((awayScore - max) / 9);
  const total = h + d + a;
  return [h / total, d / total, a / total];
}

function predict(match) {
  const home = teams[match.home];
  const away = teams[match.away];
  const homePower = teamPower(home);
  const awayPower = teamPower(away);
  const gap = homePower - awayPower;
  const drawScore = 78 - Math.abs(gap) * 1.25;
  const [homeRaw, drawRaw, awayRaw] = softmax3(homePower, drawScore, awayPower);

  let homeProb = clamp(Math.round(homeRaw * 100), 8, 82);
  let drawProb = clamp(Math.round(drawRaw * 100), 8, 42);
  let awayProb = clamp(100 - homeProb - drawProb, 8, 82);

  if (homeProb + drawProb + awayProb !== 100) {
    drawProb += 100 - homeProb - drawProb - awayProb;
  }

  let homeGoals = clamp(
    Math.round((home.attack / 45 + homePower / 95 - away.defense / 110) * 1.05),
    0,
    5,
  );
  let awayGoals = clamp(
    Math.round((away.attack / 45 + awayPower / 95 - home.defense / 110) * 1.05),
    0,
    5,
  );

  const winner =
    homeProb > awayProb && homeProb > drawProb
      ? home
      : awayProb > homeProb && awayProb > drawProb
        ? away
      : null;

  if (winner === home && homeGoals <= awayGoals) {
    homeGoals = clamp(awayGoals + 1, 1, 5);
  }

  if (winner === away && awayGoals <= homeGoals) {
    awayGoals = clamp(homeGoals + 1, 1, 5);
  }

  if (!winner && homeGoals !== awayGoals) {
    const sharedGoals = Math.round((homeGoals + awayGoals) / 2);
    homeGoals = sharedGoals;
    awayGoals = sharedGoals;
  }

  const homeIsUnderdog = home.rating + home.hostBoost < away.rating + away.hostBoost;
  const underdog = homeIsUnderdog ? home : away;
  const favorite = homeIsUnderdog ? away : home;
  const underdogWinProb = homeIsUnderdog ? homeProb : awayProb;
  const ratingGap = Math.abs(home.rating - away.rating);
  const formEdge = underdog.form - favorite.form;
  const upsetProb = clamp(
    Math.round(underdogWinProb + Math.max(0, formEdge) * 0.35 - Math.max(0, ratingGap - 10) * 0.45),
    4,
    46,
  );

  const homeKickoff = kickoffHistory[match.home] || { firstKickoffRate: 50, sample: 0 };
  const awayKickoff = kickoffHistory[match.away] || { firstKickoffRate: 50, sample: 0 };
  const kickoffHome = clamp(
    50 +
      (homeKickoff.firstKickoffRate - awayKickoff.firstKickoffRate) * 0.42 +
      (home.hostBoost - away.hostBoost) * 0.45,
    44,
    56,
  );
  const kickoffWinner = kickoffHome >= 50 ? home : away;
  const kickoffProb = Math.round(Math.max(kickoffHome, 100 - kickoffHome));
  const kickoffWinnerHistory = kickoffWinner === home ? homeKickoff : awayKickoff;
  const kickoffLoserHistory = kickoffWinner === home ? awayKickoff : homeKickoff;

  return {
    home,
    away,
    homeProb,
    drawProb,
    awayProb,
    homeGoals,
    awayGoals,
    winner,
    powerGap: gap,
    homePower,
    awayPower,
    ratingGap,
    formEdge,
    underdog,
    upsetProb,
    kickoffWinner,
    kickoffProb,
    kickoffWinnerHistory,
    kickoffLoserHistory,
  };
}

function signedGap(value) {
  if (value > 0) return `+${value.toFixed(1)}`;
  return value.toFixed(1);
}

function formatKickoff(kickoffAt) {
  if (!kickoffAt) return "时间待定";
  const date = new Date(kickoffAt);
  return new Intl.DateTimeFormat("zh-CN", {
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Shanghai",
  }).format(date);
}

function renderMatchStatus(match) {
  if (match.status === "final" && match.result) {
    return `已完赛 · 赛果 ${match.result.home}-${match.result.away}`;
  }

  if (match.status === "live") {
    return "进行中";
  }

  return `赛前 · 北京时间 ${formatKickoff(match.kickoffAt)}`;
}

function displayScore(match, result) {
  if (match.status === "final" && match.result) {
    return {
      score: `${match.result.home}-${match.result.away}`,
      tag: `赛前模型原推荐 ${result.homeGoals}-${result.awayGoals}`,
    };
  }

  return {
    score: `${result.homeGoals}-${result.awayGoals}`,
    tag: trendText(result),
  };
}

function leaderText(home, away, homeValue, awayValue, suffix = "分") {
  if (homeValue === awayValue) return `持平 ${homeValue}${suffix}`;
  const leader = homeValue > awayValue ? home : away;
  const gap = Math.abs(homeValue - awayValue);
  return `${leader.name} +${gap.toFixed(1)}${suffix}`;
}

function analysisText(result) {
  const homeAttackEdge = result.home.attack - result.away.defense;
  const awayAttackEdge = result.away.attack - result.home.defense;
  const formGap = result.home.form - result.away.form;
  const experienceGap = result.home.experience - result.away.experience;
  const maxProb = Math.max(result.homeProb, result.drawProb, result.awayProb);
  const confidence =
    maxProb >= 62
      ? "模型信心：高"
      : maxProb >= 48
        ? "模型信心：中"
        : "模型信心：谨慎";

  const attackLeader =
    homeAttackEdge === awayAttackEdge
      ? "双方接近"
      : homeAttackEdge > awayAttackEdge
        ? result.home.name
        : result.away.name;

  let upsetReason = `${result.underdog.name}基础胜率为 ${result.upsetProb}%，主要来自对手实力压制后的剩余胜面。`;
  if (result.formEdge > 0) {
    upsetReason = `${result.underdog.name}近期状态比热门方高 ${result.formEdge} 分，这是爆冷概率被抬高的关键。`;
  } else if (result.ratingGap <= 8) {
    upsetReason = `双方实力差只有 ${result.ratingGap} 分，模型认为这不是传统意义上的碾压局。`;
  }

  return {
    confidence,
    powerCompare: `${Math.round(result.homePower)} : ${Math.round(result.awayPower)}`,
    powerReason: `综合实力由排名评分、状态、攻防、世界杯经验和主办地因素加权得到，当前差值 ${signedGap(result.powerGap)}。`,
    attackCompare: attackLeader === "双方接近" ? "双方接近" : `${attackLeader}占优`,
    attackReason: `${result.home.name}进攻对${result.away.name}防守为 ${signedGap(homeAttackEdge)}，${result.away.name}进攻对${result.home.name}防守为 ${signedGap(awayAttackEdge)}。`,
    formCompare: leaderText(result.home, result.away, result.home.form, result.away.form),
    formReason: `近期状态差 ${signedGap(formGap)}，经验差 ${signedGap(experienceGap)}。状态影响短期爆发，经验影响大赛稳定性。`,
    upsetReasonTitle: `${result.underdog.name} ${result.upsetProb}%`,
    upsetReason,
  };
}

function trendText(result) {
  const maxProb = Math.max(result.homeProb, result.drawProb, result.awayProb);
  if (result.upsetProb >= 35) return "爆冷警报亮了，朋友局可以大胆一点";
  if (maxProb < 43) return "五五开局，谁先失误谁先挨说";
  if (Math.abs(result.powerGap) > 18) return "强队压制局，弱队要靠纪律续命";
  if (result.drawProb >= 30) return "平局气味很浓，朋友局容易吵起来";
  return "节奏偏开放，推荐盯前二十分钟";
}

function modelPick(result) {
  if (!result.winner) return "draw";
  return result.winner === result.home ? "home" : "away";
}

function pickLabel(pick, result) {
  if (pick === "home") return result.home.name;
  if (pick === "away") return result.away.name;
  return "平局";
}

function finalPickFromScore(home, away) {
  if (home > away) return "home";
  if (home < away) return "away";
  return "draw";
}

function hasKickedOff(match) {
  if (!match.kickoffAt) return false;
  return new Date(match.kickoffAt).getTime() <= Date.now();
}

function initialMatchIndex(now = new Date()) {
  const nowTime = now.getTime();
  const timedMatches = matches
    .map((match, index) => ({
      index,
      kickoffTime: match.kickoffAt ? new Date(match.kickoffAt).getTime() : Number.NaN,
    }))
    .filter((item) => Number.isFinite(item.kickoffTime));

  const upcoming = timedMatches
    .filter((item) => item.kickoffTime >= nowTime)
    .sort((a, b) => a.kickoffTime - b.kickoffTime)[0];
  if (upcoming) return upcoming.index;

  const recent = timedMatches.sort((a, b) => Math.abs(a.kickoffTime - nowTime) - Math.abs(b.kickoffTime - nowTime))[0];
  return recent?.index || 0;
}

function buildPredictionComparison(match, result, draft) {
  if (!draft) return "先选一个方向，看看你和模型是不是同路。";

  const model = modelPick(result);
  const userPick = draft.pick || finalPickFromScore(Number(draft.scoreHome), Number(draft.scoreAway));
  const scoreClose =
    Math.abs(Number(draft.scoreHome) - result.homeGoals) + Math.abs(Number(draft.scoreAway) - result.awayGoals) <= 1;

  if (match.status === "final" && match.result) {
    const actual = finalPickFromScore(match.result.home, match.result.away);
    return userPick === actual
      ? `这场你猜中了方向，赛果是 ${match.result.home}-${match.result.away}。`
      : `这场方向没中，赛果是 ${match.result.home}-${match.result.away}。`;
  }

  if (userPick === model && scoreClose) {
    return `同路而且比分接近模型，${pickLabel(userPick, result)}方向很有共识。`;
  }

  if (userPick === model) {
    return `同路，模型也支持${pickLabel(userPick, result)}方向；比分上你比模型更有想象力。`;
  }

  const modelProb = model === "home" ? result.homeProb : model === "away" ? result.awayProb : result.drawProb;
  const userProb = userPick === "home" ? result.homeProb : userPick === "away" ? result.awayProb : result.drawProb;
  return userProb < modelProb
    ? `你在押一个更冷门的方向：${pickLabel(userPick, result)}。朋友局效果拉满。`
    : `你和模型分歧明显，模型更偏 ${pickLabel(model, result)}，你更看好 ${pickLabel(userPick, result)}。`;
}

function marketTopPick(market) {
  if (!market?.winner) return "";
  return Object.entries({
    home: impliedProbability(market.winner.home),
    draw: impliedProbability(market.winner.draw),
    away: impliedProbability(market.winner.away),
  }).sort((a, b) => b[1] - a[1])[0][0];
}

function pickProbability(pick, result) {
  if (pick === "home") return result.homeProb;
  if (pick === "away") return result.awayProb;
  return result.drawProb;
}

function marketProbability(pick, market) {
  if (!market?.winner?.[pick]) return null;
  return impliedProbability(market.winner[pick]);
}

function spreadText(market, pick, result) {
  const spread = market?.spreads;
  if (!spread || typeof spread.line !== "number") {
    return "让球：暂无让球数据，按胜平负方向保守处理";
  }

  const side = spread.side === "away" ? result.away.name : result.home.name;
  const line = spread.line > 0 ? `+${spread.line}` : String(spread.line);
  const price = typeof spread.price === "number" ? ` @${spread.price.toFixed(2)}` : "";
  const caution = pick === spread.side ? "同向可纳入主策略" : "与主方向不同，建议谨慎";
  return `让球：${side} ${line}${price}，${caution}`;
}

function totalsText(market, result) {
  const total = market?.totals;
  const modelGoals = result.homeGoals + result.awayGoals;
  if (!total || typeof total.line !== "number") {
    return `大小球：暂无大小球盘口，模型进球数 ${modelGoals}`;
  }

  const lean = modelGoals > total.line ? "偏大" : modelGoals < total.line ? "偏小" : "贴线";
  const over = typeof total.over === "number" ? total.over.toFixed(2) : "--";
  const under = typeof total.under === "number" ? total.under.toFixed(2) : "--";
  return `大小球：${total.line}，模型 ${modelGoals} 球，${lean}；大 ${over} / 小 ${under}`;
}

function correctScoreText(market, draft, result) {
  const userScore = `${Number(draft?.scoreHome ?? result.homeGoals)}-${Number(draft?.scoreAway ?? result.awayGoals)}`;
  const modelScore = `${result.homeGoals}-${result.awayGoals}`;
  const scores = Array.isArray(market?.correctScore) ? market.correctScore.slice(0, 3) : [];
  if (scores.length === 0) {
    return `波胆：我的 ${userScore}，模型 ${modelScore}，暂无市场低赔波胆`;
  }
  return `波胆：我的 ${userScore}，模型 ${modelScore}，低赔 ${scores.map((item) => item.score).join("/")}`;
}

function kickoffText(result) {
  return `开球：${result.kickoffWinner.name} ${result.kickoffProb}%（样本 ${result.kickoffWinnerHistory.sample} 场）`;
}

function cornerText(market) {
  const corners = market?.corners;
  if (!corners || typeof corners.line !== "number") {
    return "角球：暂无角球数据，不纳入主策略";
  }
  const lean = typeof corners.over === "number" && typeof corners.under === "number" && corners.over < corners.under
    ? "大角偏热"
    : "小角或均衡";
  const over = typeof corners.over === "number" ? corners.over.toFixed(2) : "--";
  const under = typeof corners.under === "number" ? corners.under.toFixed(2) : "--";
  return `角球：${lean}，线 ${corners.line}，大 ${over} / 小 ${under}`;
}

function strategyChoiceLabel(type, value) {
  const labels = {
    spread: {
      none: "暂不选让球",
      follow: "跟让球方向",
      avoid: "避开让球，只看胜平负",
    },
    total: {
      none: "暂不选大小球",
      over: "看大球",
      under: "看小球",
    },
    corner: {
      none: "暂不选角球",
      over: "角球偏大",
      under: "角球偏小",
    },
    risk: {
      steady: "稳一点",
      medium: "中等风险",
      upset: "冷门搏一手",
    },
  };
  return labels[type]?.[value] || labels[type]?.none || "";
}

function userStrategyChoiceText(draft, result) {
  const pick = pickLabel(draft.pick || modelPick(result), result);
  const score = `${Number(draft.scoreHome ?? result.homeGoals)}-${Number(draft.scoreAway ?? result.awayGoals)}`;
  const parts = [
    pick,
    strategyChoiceLabel("total", draft.totalChoice),
    strategyChoiceLabel("corner", draft.cornerChoice),
  ].filter((part) => part && !part.startsWith("暂不选"));
  return `我的选择：${parts.join(" + ") || pick}｜波胆 ${score}｜${strategyChoiceLabel("risk", draft.riskChoice)}`;
}

function selectedSpreadText(market, draft, pick, result) {
  const choice = draft.spreadChoice || "none";
  if (choice === "none") return "让球：我的选择是暂不选让球";
  const reference = spreadText(market, pick, result).replace("让球：", "");
  return `让球：我的选择是${strategyChoiceLabel("spread", choice)}；盘口参考 ${reference}`;
}

function selectedTotalsText(market, draft, result) {
  const choice = draft.totalChoice || "none";
  if (choice === "none") return "大小球：我的选择是暂不选大小球";
  const reference = totalsText(market, result).replace("大小球：", "");
  return `大小球：我的选择是${strategyChoiceLabel("total", choice)}；盘口参考 ${reference}`;
}

function selectedCornerText(market, draft) {
  const choice = draft.cornerChoice || "none";
  if (choice === "none") return "角球：我的选择是暂不选角球";
  const reference = cornerText(market).replace("角球：", "");
  return `角球：我的选择是${strategyChoiceLabel("corner", choice)}；盘口参考 ${reference}`;
}

function riskText(pick, result, confidence) {
  const prob = pickProbability(pick, result);
  if (pick !== modelPick(result) || prob <= 30) return "风险 高";
  if (confidence >= 80 && prob >= 55) return "风险 中低";
  if (result.upsetProb >= 35 || result.drawProb >= 30) return "风险 中高";
  return "风险 中";
}

function buildExpandedStrategyCard(match, result, draft) {
  const pick = draft?.pick || modelPick(result);
  const confidence = Number(draft?.confidence || 70);
  const scoreHome = Number(draft?.scoreHome ?? result.homeGoals);
  const scoreAway = Number(draft?.scoreAway ?? result.awayGoals);
  const model = modelPick(result);
  const modelProb = pickProbability(model, result);
  const pickProb = pickProbability(pick, result);
  const totalGoals = scoreHome + scoreAway;
  const market = marketOddsCache[matchCacheKey(match)];
  const marketPick = marketTopPick(market);
  const marketSplit = marketPick && marketPick !== pick;
  const marketProb = marketProbability(pick, market);

  let title = "顺势跟模型";
  let edge = "策略标签：模型同路";
  let reason = `跟随模型更高概率方向，重点看 ${pickLabel(pick, result)} 能否先进入比赛节奏。`;

  if (pick !== model) {
    title = pickProb <= 30 ? "冷门反打" : "分歧博弈";
    edge = "策略标签：反市场情绪";
    reason = `我和模型分歧，选择 ${pickLabel(pick, result)}，赌的是比赛走势和临场变量。`;
  } else if (confidence >= 80 && pickProb >= modelProb) {
    title = "高信心稳胆";
    edge = "策略标签：稳健主线";
    reason = `方向、模型和信心值一致，策略是少走偏门，押主线兑现。`;
  } else if (pick === "draw") {
    title = "平局防守";
    edge = "策略标签：防守反向";
    reason = "这场平局权重不低，策略是避开强行分胜负，抓胶着局。";
  } else if (totalGoals >= 4) {
    title = "进球大战";
    edge = "策略标签：节奏进攻";
    reason = `比分给到 ${scoreHome}-${scoreAway}，策略是看好比赛打开，前段节奏很关键。`;
  } else if (confidence < 55) {
    title = "轻仓试探";
    edge = "策略标签：低信心观察";
    reason = "信心值不高，策略是小注观察，不把这场当成稳胆。";
  }

  if (marketSplit) {
    edge = "策略标签：模型市场分歧";
  }

  const risk = riskText(pick, result, confidence);
  const winStrategy = `胜平负策略：${pickLabel(pick, result)}，模型 ${pickProb}%${marketProb ? `，市场隐含 ${marketProb.toFixed(1)}%` : ""}`;
  const spreadStrategy = spreadText(market, pick, result);
  const totalsStrategy = totalsText(market, result);
  const scoreStrategy = correctScoreText(market, { scoreHome, scoreAway }, result);
  const kickoffStrategy = kickoffText(result);
  const cornerStrategy = cornerText(market);
  const userChoice = userStrategyChoiceText(draft, result);
  const selectedSpreadStrategy = selectedSpreadText(market, draft, pick, result);
  const selectedTotalsStrategy = selectedTotalsText(market, draft, result);
  const selectedCornerStrategy = selectedCornerText(market, draft);
  const selectedRisk = strategyChoiceLabel("risk", draft.riskChoice);

  return {
    title: selectedRisk === "冷门搏一手" ? "我的冷门策略" : selectedRisk === "稳一点" ? "我的稳胆策略" : "我的自选策略",
    pickLabel: pickLabel(pick, result),
    score: `${scoreHome}-${scoreAway}`,
    confidence: `${confidence}%`,
    reason: `${userChoice}。${reason}`,
    risk: `风险等级：${selectedRisk || risk.replace("风险 ", "")}`,
    edge: "策略标签：用户自选",
    winStrategy: `胜平负策略：我的选择 ${pickLabel(pick, result)}，模型 ${pickProb}%${marketProb ? `，市场隐含 ${marketProb.toFixed(1)}%` : ""}`,
    spreadStrategy: selectedSpreadStrategy,
    totalsStrategy: selectedTotalsStrategy,
    scoreStrategy,
    kickoffStrategy,
    cornerStrategy: selectedCornerStrategy,
    userChoice,
    compact: `${result.home.name} vs ${result.away.name}｜${userChoice.replace("我的选择：", "")}｜${selectedSpreadStrategy.replace("让球：我的选择是", "让球 ")}｜${selectedCornerStrategy.replace("角球：我的选择是", "角球 ")}｜风险 ${selectedRisk}`,
  };
}

function buildStrategyCard(match, result, draft) {
  return buildExpandedStrategyCard(match, result, draft);
}

function renderStrategyCard(match, result, draft) {
  const strategy = buildStrategyCard(match, result, draft);
  elements.strategyTitle.textContent = strategy.title;
  elements.strategyPick.textContent = strategy.pickLabel;
  elements.strategyScore.textContent = strategy.score;
  elements.strategyConfidence.textContent = strategy.confidence;
  elements.strategyReason.textContent = strategy.reason;
  elements.strategyRisk.textContent = strategy.risk;
  elements.strategyEdge.textContent = strategy.edge;
  elements.strategyMain.innerHTML = [
    ["胜平负策略", strategy.winStrategy],
    ["让球/大小球策略", `${strategy.spreadStrategy}；${strategy.totalsStrategy}`],
    ["波胆策略", strategy.scoreStrategy],
    ["开球/角球策略", `${strategy.kickoffStrategy}；${strategy.cornerStrategy}`],
  ]
    .map(([label, value]) => `
      <div>
        <span>${label}</span>
        <strong>${value}</strong>
      </div>
    `)
    .join("");
}

function buildBettingRadar(match, result) {
  const market = marketOddsCache[matchCacheKey(match)];
  const model = modelPick(result);
  const marketPick = marketTopPick(market);
  const steady =
    marketPick && marketPick === model
      ? `${pickLabel(model, result)}同路`
      : `${pickLabel(model, result)}模型优先`;
  const upset = result.upsetProb >= 35 || (marketPick && marketPick !== model)
    ? "冷门可聊"
    : "冷门一般";
  const tempo = result.homeGoals + result.awayGoals >= 4
    ? "偏大球"
    : result.drawProb >= 30
      ? "偏胶着"
      : "节奏中性";
  return {
    title: market?.winner ? "模型 + 市场一起看" : "模型雷达",
    steady,
    upset,
    tempo,
    copy: `${steady}，${upset}，${tempo}。策略卡里再看让球、大小球、波胆、开球和角球。`,
  };
}

function renderBettingRadar(match, result) {
  const radar = buildBettingRadar(match, result);
  elements.radarTitle.textContent = radar.title;
  elements.radarSteady.textContent = radar.steady;
  elements.radarUpset.textContent = radar.upset;
  elements.radarTempo.textContent = radar.tempo;
  elements.radarCopy.textContent = radar.copy;
}

function buildFunTags(match, result) {
  const tags = [];
  const maxProb = Math.max(result.homeProb, result.drawProb, result.awayProb);
  const market = marketOddsCache[matchCacheKey(match)];

  if (result.upsetProb >= 35) tags.push({ text: "爆冷警报", tone: "hot" });
  if (maxProb >= 60) tags.push({ text: "模型偏一边", tone: "steady" });
  if (result.drawProb >= 30) tags.push({ text: "平局味很浓", tone: "draw" });
  if (result.homeGoals + result.awayGoals >= 4) tags.push({ text: "进球大战倾向", tone: "goals" });
  if (market?.winner) {
    const implied = {
      home: impliedProbability(market.winner.home),
      draw: impliedProbability(market.winner.draw),
      away: impliedProbability(market.winner.away),
    };
    const marketTop = Object.entries(implied).sort((a, b) => b[1] - a[1])[0][0];
    if (marketTop !== modelPick(result)) tags.push({ text: "模型市场分歧", tone: "split" });
    if (Math.max(...Object.values(implied)) >= 70) tags.push({ text: "赔率一边倒", tone: "market" });
  }
  if (match.status === "final") tags.push({ text: "赛前模型回看", tone: "final" });

  return tags.slice(0, 5);
}

function verdictText(result) {
  if (!result.winner) {
    return {
      title: "平局警报",
      copy: "双方模型分差很小，适合朋友局押一个谨慎比分。",
    };
  }

  const confidence = Math.max(result.homeProb, result.awayProb);
  const tone = confidence >= 58 ? "稳胆方向" : "小优方向";

  return {
    title: `${result.winner.name} ${tone}`,
    copy: `模型更偏向${result.winner.name}，但爆冷和开球信息要单独看。`,
  };
}

function topPickText(result) {
  const picks = [
    { name: result.home.name, value: result.homeProb },
    { name: "平局", value: result.drawProb },
    { name: result.away.name, value: result.awayProb },
  ].sort((a, b) => b.value - a.value);
  return `${picks[0].name} ${picks[0].value}%`;
}

function watchText(result) {
  const totalGoals = result.homeGoals + result.awayGoals;
  const leader = result.homeProb >= result.awayProb ? result.home : result.away;
  const chaser = leader === result.home ? result.away : result.home;

  let tempoTitle = "节奏偏开放";
  let tempoCopy = `推荐比分合计 ${totalGoals} 球，模型认为双方都有进球窗口，前 30 分钟值得盯压迫强度。`;
  if (Math.abs(result.powerGap) > 18) {
    tempoTitle = "热门方控节奏";
    tempoCopy = `${leader.name}综合实力优势明显，比赛更可能由热门方掌握推进速度。`;
  } else if (result.drawProb >= 30) {
    tempoTitle = "胶着慢热";
    tempoCopy = "平局概率被抬高，前半场可能先试探，谁先失误谁会很被动。";
  }

  let swingTitle = "第一个进球";
  let swingCopy = `如果${chaser.name}先丢球，比赛会迅速向${leader.name}倾斜；如果先守住，爆冷窗口会打开。`;
  if (result.upsetProb >= 30) {
    swingTitle = "弱队能否撑住";
    swingCopy = `${result.underdog.name}爆冷概率已经有存在感，关键是别太早被热门方打穿。`;
  } else if (result.drawProb >= 28) {
    swingTitle = "中场争夺";
    swingCopy = "双方差距不大，中场控制权会直接影响射门质量和比分走向。";
  }

  let friendTitle = "稳胆别贪";
  let friendCopy = `${leader.name}方向更稳，朋友局可以把爆冷当加餐，不建议只靠情绪反向猜。`;
  if (result.upsetProb >= 30) {
    friendTitle = "冷门可聊";
    friendCopy = `${result.underdog.name}不是没戏，这场适合群里提前立一个“爆冷见证帖”。`;
  } else if (result.drawProb >= 30) {
    friendTitle = "平局有戏";
    friendCopy = "这类局最容易猜胜负翻车，比分讨论可以大胆一点。";
  }

  return {
    tempoTitle,
    tempoCopy,
    swingTitle,
    swingCopy,
    friendTitle,
    friendCopy,
  };
}

function buildAnalysisPayload(match, result, verdict, analysis) {
  return {
    match: {
      group: match.group,
      date: match.date,
      venue: match.venue,
      home: result.home.name,
      away: result.away.name,
    },
    prediction: {
      score: `${result.homeGoals}-${result.awayGoals}`,
      homeWin: result.homeProb,
      draw: result.drawProb,
      awayWin: result.awayProb,
      upsetTeam: result.underdog.name,
      upsetProbability: result.upsetProb,
      kickoff: `${result.kickoffWinner.name} ${result.kickoffProb}%`,
      verdictTitle: verdict.title,
      verdictCopy: verdict.copy,
    },
    modelReasons: {
      confidence: analysis.confidence,
      power: analysis.powerReason,
      attack: analysis.attackReason,
      form: analysis.formReason,
      upset: analysis.upsetReason,
    },
  };
}

function currentDraft(match, result) {
  const drafts = storageGet(PREDICTION_DRAFTS_KEY, {});
  const key = matchCacheKey(match);
  if (drafts[key]) return drafts[key];
  return {
    nickname: "",
    pick: modelPick(result),
    scoreHome: result.homeGoals,
    scoreAway: result.awayGoals,
    confidence: 70,
    spreadChoice: "none",
    totalChoice: "none",
    cornerChoice: "none",
    riskChoice: "medium",
  };
}

function saveCurrentDraft(match) {
  const drafts = storageGet(PREDICTION_DRAFTS_KEY, {});
  drafts[matchCacheKey(match)] = {
    nickname: elements.nicknameInput.value.trim(),
    pick: state.userPick,
    scoreHome: Number(elements.scoreHomeInput.value || 0),
    scoreAway: Number(elements.scoreAwayInput.value || 0),
    confidence: Number(elements.confidenceInput.value || 70),
    spreadChoice: elements.spreadChoice.value,
    totalChoice: elements.totalChoice.value,
    cornerChoice: elements.cornerChoice.value,
    riskChoice: elements.riskChoice.value,
  };
  storageSet(PREDICTION_DRAFTS_KEY, drafts);
  return drafts[matchCacheKey(match)];
}

function renderFunTags(match, result) {
  const tags = buildFunTags(match, result);
  elements.funTags.innerHTML = tags
    .map((tag) => `<span class="fun-tag ${tag.tone}">${tag.text}</span>`)
    .join("");
}

function renderPickButtons(result) {
  elements.pickHomeButton.textContent = result.home.name;
  elements.pickAwayButton.textContent = result.away.name;
  $$(".pick-button").forEach((button) => {
    button.classList.toggle("selected", button.dataset.pick === state.userPick);
  });
}

function renderPredictionForm(match, result) {
  const draft = currentDraft(match, result);
  state.userPick = draft.pick || modelPick(result);

  elements.nicknameInput.value = draft.nickname || "";
  elements.scoreHomeInput.value = String(draft.scoreHome ?? result.homeGoals);
  elements.scoreAwayInput.value = String(draft.scoreAway ?? result.awayGoals);
  elements.confidenceInput.value = String(draft.confidence ?? 70);
  elements.spreadChoice.value = draft.spreadChoice || "none";
  elements.totalChoice.value = draft.totalChoice || "none";
  elements.cornerChoice.value = draft.cornerChoice || "none";
  elements.riskChoice.value = draft.riskChoice || "medium";
  elements.confidenceValue.textContent = `${elements.confidenceInput.value}%`;
  renderPickButtons(result);
  renderStrategyCard(match, result, draft);
  elements.predictionComparison.textContent = buildPredictionComparison(match, result, draft);

  const locked = hasKickedOff(match);
  elements.submitPredictionButton.disabled = locked;
  elements.submitPredictionButton.textContent = locked ? "已开球，停止提交" : "提交到连红榜";
  elements.predictionNotice.textContent = locked
    ? "这场已经开球或完赛，只能回看，不能再提交预测。"
    : "提交后会进入朋友连红榜；无登录版本只做娱乐记录。";
}

function formatLeaderboardTime(value) {
  if (!value) return "刚刚";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "刚刚";
  return new Intl.DateTimeFormat("zh-CN", {
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Shanghai",
  }).format(date);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderLeaderboard(data = leaderboardCache, mode = "online") {
  leaderboardCache = data;
  const rows = Array.isArray(data.rows) ? data.rows : [];
  elements.leaderboardStatus.textContent = mode === "local" ? "本地模式" : "榜单已更新";
  elements.leaderboardUpdated.textContent = data.updatedAt ? formatLeaderboardTime(data.updatedAt) : "娱乐榜";
  elements.leaderboardNote.textContent = data.note || "娱乐榜单，非严格防作弊。";

  if (rows.length === 0) {
    elements.leaderboardRows.innerHTML = `
      <div class="leaderboard-empty">
        还没有上榜记录。抢一个首预测，朋友来了就有东西可以追。
      </div>
    `;
    return;
  }

  elements.leaderboardRows.innerHTML = rows
    .slice(0, 8)
    .map((row, index) => `
      <div class="leaderboard-row">
        <span class="rank">${index + 1}</span>
        <strong>${escapeHtml(row.nickname)}</strong>
        <span>连红 ${row.currentStreak}</span>
        <span>${row.totalHits}/${row.totalPredictions}</span>
      </div>
    `)
    .join("");
}

async function loadLeaderboard() {
  try {
    const response = await fetch("/.netlify/functions/leaderboard", { cache: "no-store" });
    if (!response.ok) throw new Error("leaderboard unavailable");
    renderLeaderboard(await response.json());
  } catch {
    renderLeaderboard({ rows: [], recent: [], note: "当前为本地模式：公开榜单部署后可用。" }, "local");
  }
}

async function submitPrediction(match) {
  const draft = saveCurrentDraft(match);
  if (!draft.nickname) {
    elements.predictionNotice.textContent = "先填一个昵称，朋友才知道是谁在连红。";
    return;
  }

  const payload = {
    matchKey: matchCacheKey(match),
    nickname: draft.nickname,
    deviceId: deviceId(),
    pick: draft.pick,
    scoreHome: draft.scoreHome,
    scoreAway: draft.scoreAway,
    confidence: draft.confidence,
  };

  try {
    const response = await fetch("/.netlify/functions/predictions", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "提交失败");
    renderLeaderboard(data.leaderboard);
    elements.predictionNotice.textContent = "已提交到连红榜。比赛完赛后会自动计算是否命中。";
  } catch (error) {
    const message = error instanceof Error ? error.message : "";
    elements.predictionNotice.textContent = message
      ? `提交失败：${message}。你的预测已保留在本地，稍后可以再试。`
      : "提交失败：榜单服务暂时连不上。你的预测已保留在本地，稍后可以再试。";
    renderLeaderboard({ rows: [], recent: [], note: "当前为本地模式：公开榜单部署后可用。" }, "local");
  }
}

function buildMyPredictionShare(match, result) {
  const draft = saveCurrentDraft(match);
  const strategy = buildStrategyCard(match, result, draft);
  const homeName = result.home.name;
  const awayName = result.away.name;
  return [
    `我的世界杯下注策略卡：${homeName} vs ${awayName}`,
    strategy.userChoice,
    `我的主策略：${strategy.title}`,
    strategy.winStrategy,
    `${strategy.spreadStrategy}；${strategy.totalsStrategy}`,
    strategy.scoreStrategy,
    `${strategy.kickoffStrategy}；${strategy.cornerStrategy}`,
    strategy.risk,
    strategy.edge,
    `策略理由：${strategy.reason}`,
    `来这里生成你的策略：${SHARE_SITE_URL}`,
    "仅供朋友局娱乐，不构成投注建议。",
  ].join("\n");
}

function sameChinaDate(match, now = new Date()) {
  if (!match.kickoffAt) return false;
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return formatter.format(new Date(match.kickoffAt)) === formatter.format(now);
}

function multiStrategyMatches(now = new Date()) {
  const upcoming = matches
    .map((match, index) => ({ match, index }))
    .filter(({ match }) => !hasKickedOff(match))
    .sort((a, b) => new Date(a.match.kickoffAt || 0) - new Date(b.match.kickoffAt || 0));
  const today = upcoming.filter(({ match }) => sameChinaDate(match, now));
  return (today.length > 0 ? today : upcoming.slice(0, 3)).map(({ match }) => match);
}

function buildMultiMatchStrategyShare() {
  const selected = multiStrategyMatches();
  const drafts = storageGet(PREDICTION_DRAFTS_KEY, {});
  const rows = selected.map((match) => {
    const result = predict(match);
    const draft = drafts[matchCacheKey(match)] || currentDraft(match, result);
    return buildStrategyCard(match, result, draft);
  });
  const steadyCount = rows.filter((row) => row.risk.includes("中低") || row.edge.includes("稳健")).length;
  const upsetCount = rows.filter((row) => row.title.includes("冷门") || row.edge.includes("分歧")).length;
  const cornerHotCount = rows.filter((row) => row.cornerStrategy.includes("大角偏热")).length;
  const summary = `今日策略：${steadyCount}场稳胆，${upsetCount}场冷门观察，角球偏大${cornerHotCount}场。`;
  return [
    summary,
    ...rows.map((row) => row.compact),
    `来这里生成你的策略：${SHARE_SITE_URL}`,
    "仅供朋友局娱乐，不构成投注建议。",
  ].join("\n");
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  textarea.style.top = "0";
  document.body.append(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();
  if (!copied) throw new Error("copy failed");
}

function localAiFallback(payload) {
  const { match, prediction, modelReasons } = payload;
  return `${match.home} 对 ${match.away} 的模型结论是 ${prediction.verdictTitle}。推荐比分 ${prediction.score}，胜平负概率为 ${match.home} ${prediction.homeWin}%、平局 ${prediction.draw}%、${match.away} ${prediction.awayWin}%。\n\n关键依据：${modelReasons.power}${modelReasons.attack}${modelReasons.form}\n\n爆冷观察：${prediction.upsetTeam} 的爆冷概率为 ${prediction.upsetProbability}%。${modelReasons.upset} 开球方习惯预测为 ${prediction.kickoff}，但真实开球仍取决于赛前掷硬币。`;
}

function matchCacheKey(match) {
  return `${match.home}-${match.away}`;
}

function impliedProbability(odds) {
  return 100 / odds;
}

function marketReturnRate(winnerOdds) {
  const bookTotal =
    1 / winnerOdds.home + 1 / winnerOdds.draw + 1 / winnerOdds.away;
  return 100 / bookTotal;
}

function marketRiskLabel(value) {
  if (value >= 12) return "高波动";
  if (value >= 8) return "中高波动";
  return "中等波动";
}

function renderMarket(match, result) {
  const market = marketOddsCache[matchCacheKey(match)];
  if (!market || !market.winner) {
    elements.marketSource.textContent = "无市场数据";
    elements.marketReturnRate.textContent = "--";
    elements.oddsRows.innerHTML = "<p class=\"market-empty\">当前比赛暂无赔率观察数据。</p>";
    elements.scoreRisk.textContent = "--";
    elements.scoreMarket.textContent = "等待授权数据源或手动录入。";
    elements.cornerRisk.textContent = "--";
    elements.cornerMarket.textContent = "等待授权数据源或手动录入。";
    return;
  }

  const labels = [
    { label: result.home.name, key: "home", model: result.homeProb },
    { label: "平局", key: "draw", model: result.drawProb },
    { label: result.away.name, key: "away", model: result.awayProb },
  ];
  const returnRate = marketReturnRate(market.winner);

  elements.marketSource.textContent = `${market.source} · ${market.updatedAt}`;
  elements.marketReturnRate.textContent = `返还率约 ${returnRate.toFixed(1)}%`;
  elements.oddsRows.innerHTML = labels
    .map((item) => {
      const odds = market.winner[item.key];
      const implied = impliedProbability(odds);
      const diff = item.model - implied;
      const diffText = diff >= 0 ? `+${diff.toFixed(1)}` : diff.toFixed(1);
      return `
        <div class="odds-row">
          <strong>${item.label}</strong>
          <span>${odds.toFixed(2)}</span>
          <div class="odds-mini-track"><span style="width:${Math.min(implied, 100).toFixed(1)}%"></span></div>
          <span>${implied.toFixed(1)}%</span>
          <em>模型差 ${diffText}</em>
        </div>
      `;
    })
    .join("");

  const scoreMarkets = Array.isArray(market.correctScore) ? market.correctScore : [];
  if (scoreMarkets.length > 0) {
    const closestScore = scoreMarkets[0];
    const scoreRisk = marketRiskLabel(closestScore.odds);
    elements.scoreRisk.textContent = scoreRisk;
    elements.scoreMarket.textContent = `市场样例低赔波胆包含 ${scoreMarkets
      .map((item) => `${item.score}(${item.odds.toFixed(1)})`)
      .join("、")}。波胆赔率离散度高，适合做结果分布观察，不适合当稳定判断。`;
  } else {
    elements.scoreRisk.textContent = "未提供";
    elements.scoreMarket.textContent = "当前数据源只提供胜平负赔率，暂无波胆市场观察。";
  }

  if (market.corners && typeof market.corners.over === "number" && typeof market.corners.under === "number") {
    const cornerGap = Math.abs(market.corners.over - market.corners.under);
    elements.cornerRisk.textContent = cornerGap <= 0.08 ? "分歧较小" : "分歧明显";
    elements.cornerMarket.textContent = `角球线 ${market.corners.line}，大球 ${market.corners.over.toFixed(2)} / 小球 ${market.corners.under.toFixed(2)}。角球受战术、比分状态和临场节奏影响很大，只展示市场温度。`;
  } else {
    elements.cornerRisk.textContent = "未提供";
    elements.cornerMarket.textContent = "当前数据源暂无角球盘口，保留胜平负市场观察。";
  }
}

function cachedAiText(match, payload) {
  const cached = aiAnalysisCache[matchCacheKey(match)];
  const text =
    cached && cached.analysis
      ? cached.analysis
      : `${localAiFallback(payload)}\n\n这是一段本地兜底分析。正式上线前请运行生成脚本更新 data/ai-analysis.json，让所有用户读取同一份 OpenAI 预生成内容。`;

  if (match.status === "final" && match.result) {
    return `本场已完赛，以下内容保留为赛前模型回看，不代表赛后复盘结论。\n\n${text}`;
  }

  return text;
}

async function loadAiAnalysisCache() {
  try {
    const response = await fetch("./data/ai-analysis.json", { cache: "no-store" });
    if (!response.ok) throw new Error("AI cache not found");
    aiAnalysisCache = await response.json();
  } catch {
    aiAnalysisCache = {};
  }
}

async function loadMarketOddsCache() {
  try {
    const response = await fetch("./data/market-odds.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Market cache not found");
    marketOddsCache = await response.json();
  } catch {
    marketOddsCache = {};
  }
}

async function loadRealDataCache() {
  try {
    const [matchesResponse, ratingsResponse] = await Promise.all([
      fetch("./data/matches.json", { cache: "no-store" }),
      fetch("./data/team-ratings.json", { cache: "no-store" }),
    ]);

    if (!matchesResponse.ok || !ratingsResponse.ok) {
      throw new Error("Real data cache not found");
    }

    applyRealDataCache({
      matches: await matchesResponse.json(),
      ratings: await ratingsResponse.json(),
    });
  } catch {
    // Keep the built-in seed data so the static site remains usable offline.
  }
}

function render() {
  const match = matches[state.matchIndex];
  const result = predict(match);
  const verdict = verdictText(result);
  const analysis = analysisText(result);
  const watch = watchText(result);
  const scoreDisplay = displayScore(match, result);
  latestPayload = buildAnalysisPayload(match, result, verdict, analysis);

  elements.homeFlag.textContent = result.home.flag;
  elements.awayFlag.textContent = result.away.flag;
  elements.homeName.textContent = result.home.name;
  elements.awayName.textContent = result.away.name;
  elements.matchGroup.textContent = `${match.group} · ${renderMatchStatus(match)}`;
  elements.matchVenue.textContent = `${match.venue} · ${formatKickoff(match.kickoffAt)}`;
  elements.topPick.textContent = topPickText(result);
  elements.compactUpset.textContent = `${result.upsetProb}%`;
  elements.compactKickoff.textContent = `${result.kickoffWinner.name} ${result.kickoffProb}%`;

  elements.homeProbLabel.textContent = result.home.name;
  elements.awayProbLabel.textContent = result.away.name;
  elements.homeProb.textContent = `${result.homeProb}%`;
  elements.drawProb.textContent = `${result.drawProb}%`;
  elements.awayProb.textContent = `${result.awayProb}%`;
  elements.homeProbBar.style.width = `${result.homeProb}%`;
  elements.drawProbBar.style.width = `${result.drawProb}%`;
  elements.awayProbBar.style.width = `${result.awayProb}%`;

  elements.homeShort.textContent = result.home.short;
  elements.awayShort.textContent = result.away.short;
  elements.scoreText.textContent = scoreDisplay.score;
  elements.trendTag.textContent = scoreDisplay.tag;
  elements.upsetProb.textContent = `${result.upsetProb}%`;
  elements.upsetLabel.textContent = `${result.underdog.name} 爆冷`;
  elements.upsetProbBar.style.width = `${result.upsetProb}%`;

  elements.kickoffTeam.textContent = `${result.kickoffWinner.flag} ${result.kickoffWinner.name} ${result.kickoffProb}%`;
  elements.kickoffReason.textContent = `参考近 ${result.kickoffWinnerHistory.sample} 场首开球率 ${result.kickoffWinnerHistory.firstKickoffRate}%，对手样本率 ${result.kickoffLoserHistory.firstKickoffRate}%。赛前仍由掷硬币决定，所以模型限制在接近五五开的范围。`;
  elements.tempoTitle.textContent = watch.tempoTitle;
  elements.tempoCopy.textContent = watch.tempoCopy;
  elements.swingTitle.textContent = watch.swingTitle;
  elements.swingCopy.textContent = watch.swingCopy;
  elements.friendTitle.textContent = watch.friendTitle;
  elements.friendCopy.textContent = watch.friendCopy;
  renderFunTags(match, result);
  renderPredictionForm(match, result);
  renderBettingRadar(match, result);
  renderMarket(match, result);

  elements.confidenceBadge.textContent = analysis.confidence;
  elements.powerCompare.textContent = analysis.powerCompare;
  elements.powerReason.textContent = analysis.powerReason;
  elements.attackCompare.textContent = analysis.attackCompare;
  elements.attackReason.textContent = analysis.attackReason;
  elements.formCompare.textContent = analysis.formCompare;
  elements.formReason.textContent = analysis.formReason;
  elements.upsetReasonTitle.textContent = analysis.upsetReasonTitle;
  elements.upsetReason.textContent = analysis.upsetReason;

  elements.aiSummary.textContent = cachedAiText(match, latestPayload);
  elements.aiSummary.classList.remove("loading");
}

async function init() {
  await loadRealDataCache();
  await loadAiAnalysisCache();
  await loadMarketOddsCache();

  matches.forEach((match, index) => {
    const home = teams[match.home];
    const away = teams[match.away];
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = `${match.date} ${match.group}｜${home.name} vs ${away.name}｜${renderMatchStatus(match)}`;
    elements.matchSelect.appendChild(option);
  });
  state.matchIndex = initialMatchIndex();
  elements.matchSelect.value = String(state.matchIndex);

  elements.matchSelect.addEventListener("change", (event) => {
    state.matchIndex = Number(event.target.value);
    render();
  });

  $("#predictButton").addEventListener("click", render);

  $$(".pick-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.userPick = button.dataset.pick;
      const match = matches[state.matchIndex];
      const result = predict(match);
      const draft = saveCurrentDraft(match);
      renderPickButtons(result);
      renderStrategyCard(match, result, draft);
      elements.predictionComparison.textContent = buildPredictionComparison(match, result, draft);
    });
  });

  [
    elements.nicknameInput,
    elements.scoreHomeInput,
    elements.scoreAwayInput,
    elements.confidenceInput,
    elements.spreadChoice,
    elements.totalChoice,
    elements.cornerChoice,
    elements.riskChoice,
  ].forEach((input) => {
    input.addEventListener("input", () => {
      const match = matches[state.matchIndex];
      const result = predict(match);
      const draft = saveCurrentDraft(match);
      elements.confidenceValue.textContent = `${elements.confidenceInput.value}%`;
      renderStrategyCard(match, result, draft);
      elements.predictionComparison.textContent = buildPredictionComparison(match, result, draft);
    });
    input.addEventListener("change", () => {
      const match = matches[state.matchIndex];
      const result = predict(match);
      const draft = saveCurrentDraft(match);
      elements.confidenceValue.textContent = `${elements.confidenceInput.value}%`;
      renderStrategyCard(match, result, draft);
      elements.predictionComparison.textContent = buildPredictionComparison(match, result, draft);
    });
  });

  elements.predictionForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const match = matches[state.matchIndex];
    await submitPrediction(match);
  });

  elements.copyMyPredictionButton.addEventListener("click", async () => {
    const match = matches[state.matchIndex];
    const result = predict(match);
    try {
      await copyText(buildMyPredictionShare(match, result));
      elements.toast.classList.add("show");
      setTimeout(() => elements.toast.classList.remove("show"), 1300);
    } catch {
      elements.predictionNotice.textContent = "复制失败，可以手动截图分享。";
    }
  });

  elements.copyMultiStrategyButton.addEventListener("click", async () => {
    try {
      await copyText(buildMultiMatchStrategyShare());
      elements.toast.classList.add("show");
      setTimeout(() => elements.toast.classList.remove("show"), 1300);
    } catch {
      elements.predictionNotice.textContent = "复制失败，可以手动选择多场策略文字。";
    }
  });

  await loadLeaderboard();
  render();
}

init();
