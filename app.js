const teams = {
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

const matches = [
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
};

const $ = (selector) => document.querySelector(selector);

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
  verdictTitle: $("#verdictTitle"),
  verdictCopy: $("#verdictCopy"),
  copyButton: $("#copyButton"),
  toast: $("#toast"),
};

let latestPayload = null;
let aiAnalysisCache = {};
let marketOddsCache = {};

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

  elements.verdictTitle.textContent = verdict.title;
  elements.verdictCopy.textContent = verdict.copy;
  elements.aiSummary.textContent = cachedAiText(match, latestPayload);
  elements.aiSummary.classList.remove("loading");
}

async function init() {
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

  elements.matchSelect.addEventListener("change", (event) => {
    state.matchIndex = Number(event.target.value);
    render();
  });

  $("#predictButton").addEventListener("click", render);

  elements.copyButton.addEventListener("click", async () => {
    const share = `${elements.verdictTitle.textContent}\n${elements.verdictCopy.textContent}\n爆冷概率：${elements.upsetProb.textContent}（${elements.upsetLabel.textContent}）\n开球方习惯预测：${elements.kickoffTeam.textContent}\n\n${elements.aiSummary.textContent}`;
    try {
      await navigator.clipboard.writeText(share);
      elements.toast.classList.add("show");
      setTimeout(() => elements.toast.classList.remove("show"), 1300);
    } catch {
      elements.copyButton.textContent = "复制失败";
      setTimeout(() => {
        elements.copyButton.textContent = "复制分享文案";
      }, 1300);
    }
  });

  render();
}

init();
