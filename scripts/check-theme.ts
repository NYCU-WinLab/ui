// Fails when app/globals.css drifts from the base item's cssVars in registry.json.
import { readFile } from "node:fs/promises"

import registry from "../registry.json"

const css = await readFile(
  new URL("../app/globals.css", import.meta.url),
  "utf8"
)
const base = registry.items.find((item) => item.name === "base")
const baseVars = base && "cssVars" in base ? base.cssVars : undefined
if (!baseVars) throw new Error("registry.json has no base item with cssVars")

function readBlock(selector: string) {
  const start = css.indexOf(`${selector} {`)
  if (start === -1) throw new Error(`globals.css has no ${selector} block`)
  const body = css.slice(start, css.indexOf("\n}", start))
  return Object.fromEntries(
    [...body.matchAll(/--([\w*-]+):\s*([^;]+);/g)].map((m) => [
      m[1],
      m[2].replace(/\s+/g, " ").trim(),
    ])
  )
}

const pairs = [
  // @theme inline also maps the stock colors and radii; compare fonts, text sizes
  // and every mapping the base itself declares.
  [
    "theme",
    Object.fromEntries(
      Object.entries(readBlock("@theme inline")).filter(
        ([name]) =>
          name.startsWith("font-") ||
          name.startsWith("text-") ||
          name in baseVars.theme
      )
    ),
    baseVars.theme,
  ],
  ["light", readBlock(":root"), baseVars.light],
  ["dark", readBlock(".dark"), baseVars.dark],
] as const

let failed = false
for (const [mode, cssVars, registryVars] of pairs) {
  const names = new Set([...Object.keys(cssVars), ...Object.keys(registryVars)])
  for (const name of names) {
    const a = cssVars[name]
    const b = (registryVars as Record<string, string>)[name]
    if (a !== b) {
      console.error(`${mode} --${name}: globals.css=${a} registry.json=${b}`)
      failed = true
    }
  }
}

// Utilities and keyframes the registry ships must exist here too, or the
// site renders an item differently from a project that installed it.
for (const item of registry.items) {
  const rules = "css" in item && item.css ? Object.keys(item.css) : []
  for (const rule of rules) {
    if (!rule.startsWith("@utility") && !rule.startsWith("@keyframes")) continue
    if (!css.includes(`${rule} {`)) {
      console.error(`globals.css is missing ${rule} (from ${item.name})`)
      failed = true
    }
  }
}

if (failed) process.exit(1)
console.log("theme in sync")
