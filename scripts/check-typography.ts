// The base defines two sizes, text-title (24px) and text-body (16px), and
// clears Tailwind's default scale. This catches anything else: the old scale
// names, arbitrary text-[...] classes and raw font-size values.
import { readdir, readFile } from "node:fs/promises"
import { join } from "node:path"

const roots = ["app", "components", "registry", "hooks", "lib"]
const patterns = [
  {
    name: "size outside the scale",
    regex: /\btext-(?:xs|sm|base|lg|xl|[2-9]xl)\b/g,
  },
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
    // globals.css defines the scale itself.
    if (path === join("app", "globals.css")) continue
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
