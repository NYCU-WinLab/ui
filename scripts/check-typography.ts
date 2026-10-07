// The base allows two sizes: 16px for everything and 24px for titles. Every
// text-* utility already maps onto those, so this only has to catch sizes that
// bypass the scale: arbitrary text-[...] classes and raw font-size values.
import { readdir, readFile } from "node:fs/promises"
import { join } from "node:path"

const roots = ["app", "components", "registry", "hooks", "lib"]
const patterns = [
  {
    name: "arbitrary text size",
    regex: /\btext-\[(?:\d|calc|clamp|var)[^\]]*\]/g,
  },
  { name: "inline fontSize", regex: /\bfontSize\s*:/g },
  { name: "CSS font-size", regex: /\bfont-size\s*:/g },
]

async function* files(dir: string): AsyncGenerator<string> {
  const entries = await readdir(dir, { withFileTypes: true }).catch(() => [])
  for (const entry of entries) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) yield* files(path)
    else if (/\.(tsx?|css)$/.test(entry.name)) yield path
  }
}

let failed = false
for (const root of roots) {
  for await (const path of files(root)) {
    const lines = (await readFile(path, "utf8")).split("\n")
    lines.forEach((line, index) => {
      for (const { name, regex } of patterns) {
        for (const match of line.matchAll(regex)) {
          console.error(`${path}:${index + 1}: ${name}: ${match[0]}`)
          failed = true
        }
      }
    })
  }
}

if (failed) process.exit(1)
console.log("typography uses the scale")
