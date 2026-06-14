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
  belgium: {
    name: "比利时",
    short: "BEL",
    flag: "🇧🇪",
    rating: 84,
    form: 79,
    attack: 83,
    defense: 78,
    experience: 86,
    hostBoost: 0,
  },
  egypt: {
    name: "埃及",
    short: "EGY",
    flag: "🇪🇬",
    rating: 76,
    form: 75,
    attack: 76,
    defense: 72,
    experience: 74,
    hostBoost: 0,
  },
  saudiArabia: {
    name: "沙特",
    short: "KSA",
    flag: "🇸🇦",
    rating: 68,
    form: 68,
    attack: 67,
    defense: 66,
    experience: 67,
    hostBoost: 0,
  },
  uruguay: {
    name: "乌拉圭",
    short: "URU",
    flag: "🇺🇾",
    rating: 83,
    form: 82,
    attack: 82,
    defense: 80,
    experience: 86,
    hostBoost: 0,
  },
  iran: {
    name: "伊朗",
    short: "IRN",
    flag: "🇮🇷",
    rating: 77,
    form: 76,
    attack: 75,
    defense: 75,
    experience: 76,
    hostBoost: 0,
  },
  newZealand: {
    name: "新西兰",
    short: "NZL",
    flag: "🇳🇿",
    rating: 63,
    form: 65,
    attack: 62,
    defense: 63,
    experience: 56,
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
  matchFilter: "today",
  matchSearch: "",
  leaderboardMode: "daily",
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const elements = {
  matchSelect: $("#matchSelect"),
  matchQuickFilter: $("#matchQuickFilter"),
  matchSearchInput: $("#matchSearchInput"),
  matchSelectMeta: $("#matchSelectMeta"),
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
  submitPredictionButton: $("#submitPredictionButton"),
  copyMultiStrategyButton: $("#copyMultiStrategyButton"),
  shareTextFallback: $("#shareTextFallback"),
  multiScorePanel: $("#multiScorePanel"),
  multiScoreList: $("#multiScoreList"),
  multiScoreMeta: $("#multiScoreMeta"),
  predictionComparison: $("#predictionComparison"),
  predictionNotice: $("#predictionNotice"),
  funTags: $("#funTags"),
  leaderboardStatus: $("#leaderboardStatus"),
  leaderboardTabs: $("#leaderboardTabs"),
  leaderboardRows: $("#leaderboardRows"),
  leaderboardUpdated: $("#leaderboardUpdated"),
  leaderboardNote: $("#leaderboardNote"),
  rewardBanner: $("#rewardBanner"),
  rewardClaimForm: $("#rewardClaimForm"),
  rewardPayoutMethod: $("#rewardPayoutMethod"),
  rewardContactInput: $("#rewardContactInput"),
  rewardClaimButton: $("#rewardClaimButton"),
  rewardClaimNotice: $("#rewardClaimNotice"),
  toast: $("#toast"),
};

let latestPayload = null;
let aiAnalysisCache = {};
let marketOddsCache = {};
let leaderboardCache = { rows: [], recent: [], note: "娱乐榜单，非严格防作弊。" };

const DEVICE_ID_KEY = "worldcupPredictorDeviceId";
const PREDICTION_DRAFTS_KEY = "worldcupPredictorDrafts";
const PREDICTION_NICKNAME_KEY = "worldcupPredictorNickname";
const SHARE_SITE_URL = "https://storied-blini-c17d9b.netlify.app/";
const DAILY_REWARD_AMOUNT = 100;

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
    const seedByKey = new Map(matches.map((match) => [matchCacheKey(match), match]));
    matches = realMatches.map((realMatch) => ({
      ...(seedByKey.get(realMatch.key || matchCacheKey(realMatch)) || {}),
      ...realMatch,
    }));
    matches.sort((a, b) => new Date(a.kickoffAt || 0) - new Date(b.kickoffAt || 0));
  }

  for (const [key, rating] of Object.entries(realTeams)) {
    if (!teams[key]) {
      teams[key] = {
        name: rating.name || key,
        short: rating.short || key.slice(0, 3).toUpperCase(),
        flag: rating.flag || "🏳️",
        rating: Number(rating.rating || 65),
        form: Number(rating.form || 65),
        attack: Number(rating.attack || 65),
        defense: Number(rating.defense || 65),
        experience: Number(rating.experience || 55),
        hostBoost: Number(rating.hostBoost || 0),
      };
      continue;
    }
    teams[key] = {
      ...teams[key],
      ...rating,
      name: teams[key].name || rating.name,
      short: teams[key].short || rating.short,
      flag: teams[key].flag || rating.flag,
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

function compactUserStrategyChoiceText(draft, result) {
  const pick = pickLabel(draft.pick || modelPick(result), result);
  const score = `${Number(draft.scoreHome ?? result.homeGoals)}-${Number(draft.scoreAway ?? result.awayGoals)}`;
  return [
    pick,
    `波胆 ${score}`,
    `让球 ${strategyChoiceLabel("spread", draft.spreadChoice)}`,
    `大小球 ${strategyChoiceLabel("total", draft.totalChoice)}`,
    `角球 ${strategyChoiceLabel("corner", draft.cornerChoice)}`,
    `风险 ${strategyChoiceLabel("risk", draft.riskChoice)}`,
  ].join("｜");
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
    compact: `${result.home.name} vs ${result.away.name}｜${compactUserStrategyChoiceText(draft, result)}`,
  };
}

function buildStrategyCard(match, result, draft) {
  return buildExpandedStrategyCard(match, result, draft);
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
    nickname: storageGet(PREDICTION_NICKNAME_KEY, ""),
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

function updateDraftForMatch(match, updates) {
  const result = predict(match);
  const drafts = storageGet(PREDICTION_DRAFTS_KEY, {});
  const key = matchCacheKey(match);
  drafts[key] = {
    ...currentDraft(match, result),
    ...(drafts[key] || {}),
    nickname: elements.nicknameInput.value.trim() || storageGet(PREDICTION_NICKNAME_KEY, ""),
    ...updates,
  };
  storageSet(PREDICTION_DRAFTS_KEY, drafts);
  return drafts[key];
}

function renderFunTags(match, result) {
  const tags = buildFunTags(match, result);
  elements.funTags.innerHTML = tags
    .map((tag) => `<span class="fun-tag ${tag.tone}">${tag.text}</span>`)
    .join("");
}

function renderPredictionForm(match, result) {
  const draft = currentDraft(match, result);
  state.userPick = draft.pick || modelPick(result);

  if (!elements.nicknameInput.value) {
    elements.nicknameInput.value = draft.nickname || storageGet(PREDICTION_NICKNAME_KEY, "");
  }

  const selection = multiStrategySelection();
  const locked = isMultiScoreLocked(selection.matches);
  elements.submitPredictionButton.disabled = locked;
  elements.submitPredictionButton.textContent = locked ? "已开球，停止上传" : "提交这张票到榜单";
  elements.predictionComparison.textContent = selection.matches.length
    ? `${selection.batchKey} 这张票共 ${selection.matches.length} 场，当天榜会按 ${selection.matches.length}中几 排名。`
    : "暂无可提交的今日比赛。";
  elements.predictionNotice.textContent = locked
    ? "这个日期批次里已有比赛开球，停止上传，防止赛后刷榜。"
    : "同一个 IP 对这张日期票只能提交一次；提交后不能覆盖。";
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

function leaderboardRowsForMode(data) {
  if (state.leaderboardMode === "overall") {
    return Array.isArray(data.overallRows) ? data.overallRows : Array.isArray(data.rows) ? data.rows : [];
  }
  const daily = data.dailyRows && typeof data.dailyRows === "object" ? data.dailyRows : {};
  return Array.isArray(daily[activeBatchKey()]) ? daily[activeBatchKey()] : [];
}

function renderLeaderboardTabs() {
  elements.leaderboardTabs.querySelectorAll("button[data-leaderboard-mode]").forEach((button) => {
    button.classList.toggle("selected", button.dataset.leaderboardMode === state.leaderboardMode);
  });
}

function activeRewardStatus(data = leaderboardCache) {
  const rewards = data.dailyRewards && typeof data.dailyRewards === "object" ? data.dailyRewards : {};
  return rewards[activeBatchKey()] || null;
}

function renderRewardBanner(data = leaderboardCache, rows = leaderboardRowsForMode(data)) {
  const reward = activeRewardStatus(data);
  const batchKey = activeBatchKey();
  const nickname = elements.nicknameInput.value.trim();
  const topRow = rows[0] || null;
  const settled = Boolean(reward?.settled);
  const claimed = Boolean(reward?.claimed);
  const winnerNickname = reward?.winnerNickname || (settled ? topRow?.nickname : "");

  if (state.leaderboardMode === "overall") {
    elements.rewardBanner.innerHTML = `
      <span>每日冠军奖励</span>
      <strong>${DAILY_REWARD_AMOUNT} RMB</strong>
      <small>奖金按当天榜发放；总榜保留荣誉排名。</small>
    `;
    elements.rewardClaimForm.hidden = true;
    return;
  }

  const message = !topRow
    ? `${batchKey} 还没人交票，第一张认真票可能就是今天的故事开头。`
    : !settled
      ? `${batchKey} 比赛全部结束后自动结算，当天榜第一名可申请领取。`
      : claimed
        ? `今日冠军 ${winnerNickname} 已提交领奖信息，等待人工发放。`
        : `今日冠军 ${winnerNickname}，${reward?.winnerScoreText || topRow.batchScoreText || batchScoreText(topRow)}，可申请领取。`;

  elements.rewardBanner.innerHTML = `
    <span>每日冠军奖励</span>
    <strong>${DAILY_REWARD_AMOUNT} RMB</strong>
    <small>${escapeHtml(message)}</small>
  `;

  const canClaim = settled && !claimed && winnerNickname && nickname && winnerNickname === nickname;
  elements.rewardClaimForm.hidden = !canClaim;
  if (canClaim) {
    elements.rewardClaimButton.disabled = false;
    elements.rewardClaimNotice.textContent = "只保存给站长人工发奖，榜单不会公开你的联系方式。";
  }
}

function renderLeaderboard(data = leaderboardCache, mode = "online") {
  leaderboardCache = data;
  const rows = leaderboardRowsForMode(data);
  renderLeaderboardTabs();
  renderRewardBanner(data, rows);
  elements.leaderboardStatus.textContent = mode === "local" ? "本地模式" : "榜单已更新";
  elements.leaderboardUpdated.textContent = data.updatedAt ? formatLeaderboardTime(data.updatedAt) : "娱乐榜";
  elements.leaderboardNote.textContent =
    state.leaderboardMode === "overall"
      ? "总榜统计所有已提交比赛，按总命中数和连红排序。"
      : `${activeBatchKey()} 当天榜，只统计这一天的比赛票。`;

  if (rows.length === 0) {
    elements.leaderboardRows.innerHTML = `
      <div class="leaderboard-empty">
        ${state.leaderboardMode === "overall" ? "总榜还没有记录。" : "这个比赛日还没有上榜记录。"}
      </div>
    `;
    return;
  }

  elements.leaderboardRows.innerHTML = rows
    .slice(0, 8)
    .map((row, index) => `
      <div class="leaderboard-entry">
        <div class="leaderboard-row">
          <span class="rank">${index + 1}</span>
          <strong>${escapeHtml(row.nickname)}</strong>
          <span>${escapeHtml(row.batchScoreText || batchScoreText(row))}</span>
          <span>连红 ${row.currentStreak}</span>
          <button class="strategy-view-button" type="button">看策略</button>
        </div>
        ${renderLeaderboardStrategy(row)}
      </div>
    `)
    .join("");

  elements.leaderboardRows.querySelectorAll(".strategy-view-button").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".leaderboard-entry")?.querySelector(".leaderboard-strategy");
      if (!card) return;
      const shouldShow = card.hidden;
      card.hidden = !shouldShow;
      button.textContent = shouldShow ? "收起" : "看策略";
    });
  });
}

function batchScoreText(row) {
  const total = Number(row.batchTotal || row.totalPredictions || 0);
  const hits = Number(row.batchHits || row.totalHits || 0);
  return `${total}中${hits}`;
}

function renderLeaderboardStrategy(row) {
  if (Array.isArray(row.latestStrategies) && row.latestStrategies.length > 0) {
    const details = row.latestStrategies.map((strategy) => {
      const match = matches.find((item) => matchCacheKey(item) === strategy.matchKey);
      const result = match ? predict(match) : null;
      const matchName = match && result ? `${result.home.name} vs ${result.away.name}` : strategy.matchKey || "未知比赛";
      const pick = result ? pickLabel(strategy.pick, result) : strategy.pick || "未选择";
      const score = Number.isInteger(strategy.scoreHome) && Number.isInteger(strategy.scoreAway)
        ? `${strategy.scoreHome}-${strategy.scoreAway}`
        : "未填写";
      return `${matchName}｜方向 ${pick}｜波胆 ${score}`;
    });

    return `
      <div class="leaderboard-strategy" hidden>
        <strong>${escapeHtml(row.batchScoreText || batchScoreText(row))} · ${escapeHtml(row.batchKey || "今日票")}</strong>
        <p>${details.map(escapeHtml).join("<br />")}</p>
        <small>来这里生成你的策略：${SHARE_SITE_URL}</small>
      </div>
    `;
  }

  const strategy = row.latestStrategy;
  if (!strategy) {
    return `<div class="leaderboard-strategy" hidden>暂无可查看策略。</div>`;
  }

  const match = matches.find((item) => matchCacheKey(item) === strategy.matchKey);
  const result = match ? predict(match) : null;
  const matchName = match && result ? `${result.home.name} vs ${result.away.name}` : strategy.matchKey || "未知比赛";
  const pick = result ? pickLabel(strategy.pick, result) : strategy.pick || "未选择";
  const score = Number.isInteger(strategy.scoreHome) && Number.isInteger(strategy.scoreAway)
    ? `${strategy.scoreHome}-${strategy.scoreAway}`
    : "未填写";
  const details = [
    `方向 ${pick}`,
    `波胆 ${score}`,
    `让球 ${strategyChoiceLabel("spread", strategy.spreadChoice)}`,
    `大小球 ${strategyChoiceLabel("total", strategy.totalChoice)}`,
    `角球 ${strategyChoiceLabel("corner", strategy.cornerChoice)}`,
    `风险 ${strategyChoiceLabel("risk", strategy.riskChoice)}`,
    `信心 ${strategy.confidence || "--"}%`,
  ];

  return `
    <div class="leaderboard-strategy" hidden>
      <strong>${escapeHtml(matchName)}</strong>
      <p>${details.map(escapeHtml).join("｜")}</p>
      <small>来这里生成你的策略：${SHARE_SITE_URL}</small>
    </div>
  `;
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

function buildPredictionBatchPayload() {
  const nickname = elements.nicknameInput.value.trim();
  const selected = multiStrategyMatches();
  const drafts = storageGet(PREDICTION_DRAFTS_KEY, {});
  return {
    nickname,
    deviceId: deviceId(),
    entries: selected.map((match) => {
      const result = predict(match);
      const draft = drafts[matchCacheKey(match)] || currentDraft(match, result);
      const scoreHome = Number(draft.scoreHome ?? result.homeGoals);
      const scoreAway = Number(draft.scoreAway ?? result.awayGoals);
      return {
        matchKey: matchCacheKey(match),
        pick: finalPickFromScore(scoreHome, scoreAway),
        scoreHome,
        scoreAway,
        confidence: Number(draft.confidence || 70),
        spreadChoice: draft.spreadChoice || "none",
        totalChoice: draft.totalChoice || "none",
        cornerChoice: draft.cornerChoice || "none",
        riskChoice: draft.riskChoice || "medium",
      };
    }),
  };
}

function isMultiScoreLocked(selected = multiStrategyMatches()) {
  return selected.length === 0 || selected.some((match) => hasKickedOff(match));
}

async function submitPredictionBatch() {
  const payload = buildPredictionBatchPayload();
  if (!payload.nickname) {
    elements.predictionNotice.textContent = "先填一个昵称，朋友才知道这张票是谁的。";
    return;
  }

  const selected = multiStrategyMatches();
  if (isMultiScoreLocked(selected)) {
    elements.predictionNotice.textContent = "这个日期批次里已有比赛开球，停止上传，防止赛后刷榜。";
    renderPredictionForm(matches[state.matchIndex], predict(matches[state.matchIndex]));
    return;
  }

  storageSet(PREDICTION_NICKNAME_KEY, payload.nickname);

  try {
    const response = await fetch("/.netlify/functions/predictions", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "提交失败");
    renderLeaderboard(data.leaderboard);
    elements.predictionNotice.textContent = `已提交到连红榜：${activeBatchKey()} 共 ${payload.entries.length} 场，只能提交这一次。`;
  } catch (error) {
    const message = error instanceof Error ? error.message : "";
    elements.predictionNotice.textContent = message
      ? `提交失败：${message}。`
      : "提交失败：榜单服务暂时连不上，稍后可以再试。";
    if (!message.includes("已经提交")) {
      renderLeaderboard({ rows: [], recent: [], note: "当前为本地模式：公开榜单部署后可用。" }, "local");
    }
  }
}

async function submitRewardClaim() {
  const nickname = elements.nicknameInput.value.trim();
  const contact = elements.rewardContactInput.value.trim();
  if (!nickname) {
    elements.rewardClaimNotice.textContent = "先填榜单昵称，系统要确认你是不是当天第一。";
    return;
  }
  if (contact.length < 4) {
    elements.rewardClaimNotice.textContent = "请填写有效联系方式，方便站长人工发奖。";
    return;
  }

  elements.rewardClaimButton.disabled = true;
  elements.rewardClaimNotice.textContent = "正在提交领奖申请...";

  try {
    const response = await fetch("/.netlify/functions/rewards", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        batchKey: activeBatchKey(),
        nickname,
        payoutMethod: elements.rewardPayoutMethod.value,
        contact,
      }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "领奖申请提交失败");
    renderLeaderboard(data.leaderboard);
    elements.rewardClaimNotice.textContent = `领奖申请已收到，核对码 ${data.claimCode}，站长会人工发放。`;
  } catch (error) {
    const message = error instanceof Error ? error.message : "领奖申请提交失败";
    elements.rewardClaimButton.disabled = false;
    elements.rewardClaimNotice.textContent = `提交失败：${message}。`;
  }
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

function chinaDateKey(value = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(value);
}

function matchChinaDateKey(match) {
  if (!match.kickoffAt) return "";
  return chinaDateKey(new Date(match.kickoffAt));
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function matchSearchText(match) {
  const home = teams[match.home];
  const away = teams[match.away];
  return [
    home?.name,
    home?.short,
    away?.name,
    away?.short,
    match.group,
    match.venue,
    match.date,
    renderMatchStatus(match),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function filteredMatchEntries(now = new Date()) {
  const query = state.matchSearch.trim().toLowerCase();
  const todayKey = chinaDateKey(now);
  const tomorrowKey = chinaDateKey(addDays(now, 1));

  return matches
    .map((match, index) => ({ match, index }))
    .filter(({ match }) => {
      if (state.matchFilter === "today") return matchChinaDateKey(match) === todayKey;
      if (state.matchFilter === "tomorrow") return matchChinaDateKey(match) === tomorrowKey;
      if (state.matchFilter === "upcoming") return !hasKickedOff(match);
      return true;
    })
    .filter(({ match }) => !query || matchSearchText(match).includes(query));
}

function matchOptionText(match) {
  const home = teams[match.home];
  const away = teams[match.away];
  return `${formatKickoff(match.kickoffAt)}｜${match.group}｜${home.name} vs ${away.name}｜${renderMatchStatus(match)}`;
}

function renderMatchSelectorOptions() {
  const filtered = filteredMatchEntries();
  const current = matches[state.matchIndex] ? { match: matches[state.matchIndex], index: state.matchIndex, pinned: true } : null;
  const entries =
    current && !filtered.some(({ index }) => index === current.index)
      ? [current, ...filtered]
      : filtered;

  elements.matchSelect.innerHTML = "";

  if (entries.length === 0) {
    const option = document.createElement("option");
    option.value = String(state.matchIndex);
    option.textContent = "没有找到比赛，换个筛选试试";
    elements.matchSelect.appendChild(option);
    elements.matchSelectMeta.textContent = "当前筛选没有匹配结果";
    return;
  }

  entries.forEach(({ match, index, pinned }) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = `${pinned ? "当前｜" : ""}${matchOptionText(match)}`;
    elements.matchSelect.appendChild(option);
  });

  elements.matchSelect.value = String(state.matchIndex);
  elements.matchSelectMeta.textContent =
    entries.length === matches.length
      ? `共 ${matches.length} 场，按开球时间排序`
      : `显示 ${filtered.length} / ${matches.length} 场${current && entries[0]?.pinned ? "，已保留当前比赛" : ""}`;
}

function setMatchFilter(filter) {
  state.matchFilter = filter;
  elements.matchQuickFilter.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("selected", button.dataset.filter === filter);
  });
  selectFirstFilteredMatch();
  renderMatchSelectorOptions();
}

function selectFirstFilteredMatch() {
  const entries = filteredMatchEntries();
  if (entries.length > 0 && !entries.some(({ index }) => index === state.matchIndex)) {
    state.matchIndex = entries[0].index;
  }
}

function activeBatchKey(now = new Date()) {
  const match = matches[state.matchIndex];
  if (match?.kickoffAt) return matchChinaDateKey(match);
  if (state.matchFilter === "today") return chinaDateKey(now);
  if (state.matchFilter === "tomorrow") return chinaDateKey(addDays(now, 1));
  const next = matches
    .filter((item) => !hasKickedOff(item))
    .sort((a, b) => new Date(a.kickoffAt || 0) - new Date(b.kickoffAt || 0))[0];
  return next ? matchChinaDateKey(next) : chinaDateKey(now);
}

function matchesForBatchKey(batchKey) {
  return matches
    .filter((match) => matchChinaDateKey(match) === batchKey)
    .sort((a, b) => new Date(a.kickoffAt || 0) - new Date(b.kickoffAt || 0));
}

function multiStrategySelection(now = new Date()) {
  const batchKey = activeBatchKey(now);
  const selected = matchesForBatchKey(batchKey);
  const upcoming = matches
    .map((match, index) => ({ match, index }))
    .filter(({ match }) => !hasKickedOff(match))
    .sort((a, b) => new Date(a.match.kickoffAt || 0) - new Date(b.match.kickoffAt || 0));
  const fallbackKey = upcoming[0] ? matchChinaDateKey(upcoming[0].match) : "";
  const fallback = fallbackKey ? matchesForBatchKey(fallbackKey) : [];
  return {
    batchKey: selected.length > 0 ? batchKey : fallbackKey,
    matches: selected.length > 0 ? selected : fallback,
    mode: selected.length > 0 ? "selected" : "fallback",
  };
}

function multiStrategyMatches(now = new Date()) {
  return multiStrategySelection(now).matches;
}

function renderMultiScorePanel() {
  const { matches: selected, mode, batchKey } = multiStrategySelection();
  const drafts = storageGet(PREDICTION_DRAFTS_KEY, {});
  elements.multiScoreMeta.textContent =
    mode === "selected" ? `${batchKey} · ${selected.length} 场比赛` : "当前日期暂无比赛，显示最近一个比赛日";

  if (selected.length === 0) {
    elements.multiScoreList.innerHTML = `<p class="market-note">暂无可填写的未开球比赛。</p>`;
    return;
  }

  elements.multiScoreList.innerHTML = selected
    .map((match) => {
      const result = predict(match);
      const key = matchCacheKey(match);
      const draft = drafts[key] || currentDraft(match, result);
      return `
        <div class="multi-score-row" data-match-key="${escapeHtml(key)}">
          <div class="multi-score-match">
            <strong>${escapeHtml(result.home.name)} vs ${escapeHtml(result.away.name)}</strong>
            <span>${escapeHtml(formatKickoff(match.kickoffAt))} · ${escapeHtml(match.group)}</span>
          </div>
          <div class="multi-score-inputs">
            <input data-side="home" type="number" min="0" max="9" inputmode="numeric" value="${Number(draft.scoreHome ?? result.homeGoals)}" aria-label="${escapeHtml(result.home.name)}预测进球" />
            <strong>:</strong>
            <input data-side="away" type="number" min="0" max="9" inputmode="numeric" value="${Number(draft.scoreAway ?? result.awayGoals)}" aria-label="${escapeHtml(result.away.name)}预测进球" />
          </div>
        </div>
      `;
    })
    .join("");
}

function handleMultiScoreInput(event) {
  const input = event.target.closest("input[data-side]");
  const row = input?.closest(".multi-score-row");
  if (!input || !row) return;

  const match = matches.find((item) => matchCacheKey(item) === row.dataset.matchKey);
  if (!match) return;

  const homeInput = row.querySelector('input[data-side="home"]');
  const awayInput = row.querySelector('input[data-side="away"]');
  const scoreHome = clamp(Number(homeInput.value || 0), 0, 9);
  const scoreAway = clamp(Number(awayInput.value || 0), 0, 9);
  homeInput.value = String(scoreHome);
  awayInput.value = String(scoreAway);
  updateDraftForMatch(match, {
    scoreHome,
    scoreAway,
    pick: finalPickFromScore(scoreHome, scoreAway),
  });

  if (matchCacheKey(matches[state.matchIndex]) === row.dataset.matchKey) {
    renderPredictionForm(match, predict(match));
  }
}

function scoreDeviationComment(draft, result) {
  const userHome = Number(draft.scoreHome ?? result.homeGoals);
  const userAway = Number(draft.scoreAway ?? result.awayGoals);
  const modelHome = Number(result.homeGoals);
  const modelAway = Number(result.awayGoals);
  const gap = Math.abs(userHome - modelHome) + Math.abs(userAway - modelAway);
  const userPick = finalPickFromScore(userHome, userAway);
  const model = modelPick(result);

  if (gap === 0) return "趣味点评：和模型同款剧本，属于理性派交作业。";
  if (userPick !== model) return `趣味点评：和模型反着来，${pickLabel(userPick, result)}这手有点朋友局火药味。`;
  if (gap <= 2) return "趣味点评：方向跟模型同路，比分稍微加了点个人审美。";
  return "趣味点评：比分比模型大胆不少，主打一个先把聊天群点燃。";
}

function buildMultiMatchStrategyShare() {
  const { matches: selected, batchKey } = multiStrategySelection();
  const drafts = storageGet(PREDICTION_DRAFTS_KEY, {});
  const rows = selected.map((match) => {
    const result = predict(match);
    const draft = drafts[matchCacheKey(match)] || currentDraft(match, result);
    const scoreHome = Number(draft.scoreHome ?? result.homeGoals);
    const scoreAway = Number(draft.scoreAway ?? result.awayGoals);
    return `${result.home.name} vs ${result.away.name}｜波胆 ${scoreHome}-${scoreAway}｜${scoreDeviationComment({ scoreHome, scoreAway }, result)}`;
  });
  return [
    `${batchKey} 多场波胆：`,
    ...rows,
    `来这里生成你的策略：${SHARE_SITE_URL}`,
    "仅供朋友局娱乐，不构成投注建议。",
  ].join("\n");
}

function showShareTextFallback(text) {
  elements.shareTextFallback.hidden = false;
  elements.shareTextFallback.value = text;
  elements.shareTextFallback.focus();
  elements.shareTextFallback.select();
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
  renderMultiScorePanel();
  renderLeaderboard(leaderboardCache);
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

  state.matchIndex = initialMatchIndex();
  renderMatchSelectorOptions();

  elements.matchSelect.addEventListener("change", (event) => {
    state.matchIndex = Number(event.target.value);
    renderMatchSelectorOptions();
    render();
  });

  elements.matchQuickFilter.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-filter]");
    if (!button) return;
    setMatchFilter(button.dataset.filter);
    render();
  });

  elements.matchSearchInput.addEventListener("input", () => {
    state.matchSearch = elements.matchSearchInput.value;
    selectFirstFilteredMatch();
    renderMatchSelectorOptions();
    render();
  });

  elements.leaderboardTabs.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-leaderboard-mode]");
    if (!button) return;
    state.leaderboardMode = button.dataset.leaderboardMode;
    renderLeaderboard(leaderboardCache);
  });

  $("#predictButton").addEventListener("click", () => {
    const entries = filteredMatchEntries();
    if (entries.length > 0) {
      const currentPosition = entries.findIndex(({ index }) => index === state.matchIndex);
      const next = entries[(currentPosition + 1) % entries.length] || entries[0];
      state.matchIndex = next.index;
      renderMatchSelectorOptions();
    }
    render();
  });

  elements.nicknameInput.addEventListener("input", () => {
    storageSet(PREDICTION_NICKNAME_KEY, elements.nicknameInput.value.trim());
    multiStrategyMatches().forEach((match) => updateDraftForMatch(match, {}));
    renderRewardBanner(leaderboardCache);
  });

  elements.multiScoreList.addEventListener("input", handleMultiScoreInput);
  elements.multiScoreList.addEventListener("change", handleMultiScoreInput);

  elements.predictionForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    await submitPredictionBatch();
  });

  elements.rewardClaimForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    await submitRewardClaim();
  });

  elements.copyMultiStrategyButton.addEventListener("click", async () => {
    const text = buildMultiMatchStrategyShare();
    try {
      await copyText(text);
      elements.shareTextFallback.hidden = true;
      elements.toast.classList.add("show");
      setTimeout(() => elements.toast.classList.remove("show"), 1300);
    } catch {
      showShareTextFallback(text);
      elements.predictionNotice.textContent = "复制失败，已把策略文字展开在下方，可以手动全选复制。";
    }
  });

  await loadLeaderboard();
  render();
}

init();
