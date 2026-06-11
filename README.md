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

把项目发布到 Netlify 即可。当前 `netlify.toml` 是纯静态发布配置，不包含运行时函数。

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

## 后续可丰富的内容

- 小组形势：展示同组其它球队、出线概率、最佳第三名压力。
- 赛前看点：继续扩展为战术点、爆冷条件、朋友局押点。
- 分享卡片：生成一张适合朋友圈/微信群转发的预测海报。
- 热度榜：展示最可能爆冷、最稳强队、最适合押平的比赛。
- 数据更新时间：在页面上标记赛程、球队评分、OpenAI 分析缓存的更新时间。
