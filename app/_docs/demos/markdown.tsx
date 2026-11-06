import { Markdown } from "@/registry/winlab/blocks/markdown/markdown"

const source = `## 本週進度

模擬器分成 **simulation mode** 與 *emulation mode*，最高約 \`250Mbps\`。

1. 鏈路預算：等 TASA 提供
2. QoS 注入點：放在封裝前
3. 待確認清單：https://gitlab.winlab.tw/winlab

> 衛星端也能做 QoS，下次介紹做法。

| 項目 | 負責 | 期限 |
| --- | --- | --- |
| 需求分析 | 詠翔 | 11/30 |
| S-NOS API | TASA | 11/13 |

![架構圖](https://ui.winlab.tw/icon.png)`

export function Demo() {
  return <Markdown>{source}</Markdown>
}
