// Everything visual must come from the base tokens. This rejects the ways
// around them: sizes outside text-title / text-body, arbitrary values,
// Tailwind palette colors, color literals, inline styles and raw font-size.
import { readdir, readFile } from "node:fs/promises"
import { join } from "node:path"

const roots = ["app", "components", "registry", "hooks", "lib"]
const palette =
  "slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|black|white"
const colorUtilities =
  "bg|text|border|ring|outline|fill|stroke|from|via|to|decoration|divide|placeholder|caret|accent|shadow"

const patterns = [
  {
    name: "size outside the scale",
    regex: /\btext-(?:xs|sm|base|lg|xl|[2-9]xl)\b/g,
  },
  // Arbitrary values such as rounded-[10px]; arbitrary variants such as
  // data-[state=open]: end in ":" or "/" and stay allowed.
  {
    name: "arbitrary value",
    regex: /\b[a-z][\w-]*-\[[^\]\s]+\](?![:/\]])/g,
  },
  {
    name: "palette color",
    regex: new RegExp(`\\b(?:${colorUtilities})-(?:${palette})\\b`, "g"),
  },
  {
    name: "color literal",
    regex: /#[0-9a-fA-F]{3,8}\b|\b(?:rgba?|hsla?|oklch|oklab)\(/g,
  },
  { name: "inline style", regex: /\bstyle=\{/g },
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
    // globals.css defines the tokens themselves.
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
console.log("everything uses the tokens")
