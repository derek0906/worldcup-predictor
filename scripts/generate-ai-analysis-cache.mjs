import { mkdir, writeFile } from "node:fs/promises";

const apiKey = process.env.OPENAI_API_KEY;
const model = process.env.OPENAI_MODEL || "gpt-4.1-mini";

if (!apiKey) {
  console.error("Missing OPENAI_API_KEY. Set it before running this script.");
  process.exit(1);
}

const matches = [
  ["mexico-southAfrica", "墨西哥", "南非"],
  ["korea-czechia", "韩国", "捷克"],
  ["canada-bosnia", "加拿大", "波黑"],
  ["usa-paraguay", "美国", "巴拉圭"],
  ["brazil-morocco", "巴西", "摩洛哥"],
  ["germany-curacao", "德国", "库拉索"],
  ["spain-capeVerde", "西班牙", "佛得角"],
  ["france-senegal", "法国", "塞内加尔"],
  ["argentina-algeria", "阿根廷", "阿尔及利亚"],
  ["austria-jordan", "奥地利", "约旦"],
  ["england-croatia", "英格兰", "克罗地亚"],
  ["portugal-colombia", "葡萄牙", "哥伦比亚"],
];

const cache = {};

for (const [key, home, away] of matches) {
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      input: [
        {
          role: "system",
          content:
            "你是中文足球赛前分析师。写可信、克制、适合公开网站展示的世界杯赛前预测解读。不要编造实时新闻、伤病、首发或未提供的数据。",
        },
        {
          role: "user",
          content: `请为 ${home} vs ${away} 写一段 180-240 字中文赛前预测分析。说明这是模型预测，不是确定结果；提到爆冷概率和开球预测都有不确定性。不要使用项目符号。`,
        },
      ],
      max_output_tokens: 480,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`OpenAI request failed for ${key}: ${detail}`);
  }

  const data = await response.json();
  cache[key] = { analysis: extractText(data) };
  console.log(`Generated ${key}`);
}

await mkdir("data", { recursive: true });
await writeFile("data/ai-analysis.json", `${JSON.stringify(cache, null, 2)}\n`);
console.log("Wrote data/ai-analysis.json");

function extractText(data) {
  if (typeof data.output_text === "string" && data.output_text.trim()) {
    return data.output_text.trim();
  }

  const chunks = [];
  for (const item of data.output || []) {
    for (const content of item.content || []) {
      if (content.type === "output_text" && content.text) {
        chunks.push(content.text);
      }
    }
  }

  return chunks.join("\n").trim();
}
