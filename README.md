# 2026 世界杯赛前预测情报站

这是一个静态网站。访客打开页面时不会调用 OpenAI，也不会消耗 token。

## OpenAI 分析缓存

OpenAI 只用于预生成 `data/ai-analysis.json`。网站运行时直接读取这个 JSON，所以所有用户看到同一份分析内容。

刷新缓存时，在本地或一次性后台环境运行：

```bash
OPENAI_API_KEY=你的key node scripts/generate-ai-analysis-cache.mjs
```

运行后提交并部署更新后的 `data/ai-analysis.json`。

## 部署

把项目发布到 Netlify 即可。页面主体仍是静态发布，连红排行榜使用 Netlify Functions + Netlify Blobs 保存朋友预测。

如果函数暂时不可用，前端会自动切到本地模式，预测表单仍可使用，只是不显示共享榜单。

## 本地检查

项目不需要构建。修改数据或脚本后，运行：

```bash
node scripts/check-site.mjs
```

检查内容包括：

- 比赛是否包含 `kickoffAt` 和 `status`，避免赛后还伪装成赛前预测。
- 市场赔率 JSON 是否包含基础胜平负字段。
- 市场数据缺少波胆或角球时，前端是否有兜底文案。
- 没有配置赔率数据源时，更新脚本是否跳过写入，避免制造“自动更新成功”的错觉。
- 互动预测面板、连红榜函数和前端 API hooks 是否存在。

## 互动预测与连红榜

访客可以在页面中填写昵称、选择胜平负、输入比分和信心值。提交后会进入朋友连红榜：

- 命中方向：预测主胜/平局/客胜与真实赛果一致。
- 当前连红：只统计已完赛比赛，猜错会重置当前连红。
- 未开赛比赛：保留预测，不影响连红。

这是无登录轻量版，使用浏览器设备 ID + 昵称做基础去重，页面会标注“娱乐榜单，非严格防作弊”。

## 真实数据缓存

网站前端不会直接调用第三方 API。真实数据通过脚本预先写入缓存 JSON，访客只读取静态文件，API key 不会暴露。

核心缓存文件：

- `data/matches.json`：赛程、比分、比赛状态，优先来自 football-data.org。
- `data/team-ratings.json`：球队实力评分，可接入 Elo/FIFA 风格外部评分源。
- `data/model-inputs.json`：模型权重和数据来源说明。
- `data/market-odds.json`：赔率市场观察，来自 The Odds API 或自定义授权源。

刷新赛程、比分和球队评分：

```bash
FOOTBALL_DATA_API_KEY=你的key \
TEAM_RATINGS_SOURCE_URL=https://你的评分数据源.json \
node scripts/update-real-data.mjs
```

`TEAM_RATINGS_SOURCE_URL` 是可选项。它可以返回下面任意一种格式：

```json
{
  "source": "World Football Elo / custom cache",
  "teams": {
    "brazil": { "elo": 2140, "fifaRank": 1, "form": 86 },
    "france": { "elo": 2100, "fifaRank": 2, "form": 84 }
  }
}
```

或者：

```json
[
  { "key": "brazil", "elo": 2140, "fifaRank": 1, "form": 86 },
  { "key": "france", "elo": 2100, "fifaRank": 2, "form": 84 }
]
```

如果没有配置 API key，脚本会保留现有缓存，网站仍然可用。

## 定时市场数据

市场赔率观察读取 `data/market-odds.json`。仓库内的 GitHub Actions 会每 30 分钟运行一次：

```bash
node scripts/update-market-odds.mjs
```

推荐配置方式：

1. 在 GitHub 仓库设置 `Settings -> Secrets and variables -> Actions`。
2. 如果使用 The Odds API，添加 Secret：`ODDS_API_KEY`。
3. 可选添加 Variables：
   - `ODDS_API_SPORT`，默认 `soccer_fifa_world_cup`
   - `ODDS_API_REGIONS`，默认 `us,uk,eu`
   - `ODDS_API_BOOKMAKERS`，留空则使用 API 默认 bookmaker
4. 如果你有自己的授权数据源，添加 Secret：
   - `MARKET_ODDS_SOURCE_URL`
   - `MARKET_ODDS_BEARER_TOKEN`，如果接口需要 bearer token

`MARKET_ODDS_SOURCE_URL` 返回的数据建议直接使用网站内部格式：

```json
{
  "brazil-morocco": {
    "source": "Authorized odds API",
    "updatedAt": "2026-06-12T10:00:00.000Z",
    "winner": { "home": 1.58, "draw": 3.9, "away": 6.2 },
    "correctScore": [{ "score": "2-1", "odds": 8.0 }],
    "corners": { "line": 10.0, "over": 1.91, "under": 1.89 }
  }
}
```

网站只展示隐含概率、返还率和风险观察，不输出具体购买建议。

如果没有配置 `ODDS_API_KEY` 或 `MARKET_ODDS_SOURCE_URL`，脚本会直接跳过更新，不会重写旧缓存。

## 后续可丰富的内容

- 小组形势：展示同组其它球队、出线概率、最佳第三名压力。
- 赛前看点：继续扩展为战术点、爆冷条件、朋友局押点。
- 分享卡片：生成一张适合朋友圈/微信群转发的预测海报。
- 热度榜：展示最可能爆冷、最稳强队、最适合押平的比赛。
- 数据更新时间：在页面上标记赛程、球队评分、OpenAI 分析缓存的更新时间。
