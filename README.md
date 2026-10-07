```
██╗    ██╗██╗███╗   ██╗██╗      █████╗ ██████╗     ██╗   ██╗██╗
██║    ██║██║████╗  ██║██║     ██╔══██╗██╔══██╗    ██║   ██║██║
██║ █╗ ██║██║██╔██╗ ██║██║     ███████║██████╔╝    ██║   ██║██║
██║███╗██║██║██║╚██╗██║██║     ██╔══██║██╔══██╗    ██║   ██║██║
╚███╔███╔╝██║██║ ╚████║███████╗██║  ██║██████╔╝    ╚██████╔╝██║
 ╚══╝╚══╝ ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚═════╝      ╚═════╝ ╚═╝
```

# WinLab UI

> One design system for every WinLab app, installed with the shadcn CLI.

[![CI](https://github.com/NYCU-WinLab/ui/actions/workflows/ci.yml/badge.svg)](https://github.com/NYCU-WinLab/ui/actions) &nbsp;[![Live](https://img.shields.io/badge/live-ui.winlab.tw-0033A0)](https://ui.winlab.tw) &nbsp;[![License: MIT](https://img.shields.io/badge/license-MIT-blue)](#license)

WinLab apps used to pick their own colors, spacing and component variants. This registry is the single source for all of them: a lightweight set of tokens and components, each with only the variants our apps actually use.

**[Browse it live](https://ui.winlab.tw)**

## Use it

Start a new project with the WinLab base:

```bash
npx shadcn@latest init https://ui.winlab.tw/r/base.json
```

This writes the WinLab tokens into `app/globals.css` and registers the `@winlab` namespace in `components.json`, so later components install with:

```bash
npx shadcn@latest add @winlab/<component>
```

## What is in the registry

| Item | Type | What it gives you |
|------|------|-------------------|
| `base` | `registry:base` | Ultramarine brand tokens (Pantone 286 C, `#0033A0`) on a neutral scale, light and dark; `--radius: 1rem`; the font stacks below |
| `font-inter` | `registry:font` | Inter for Latin text and numbers |
| `font-noto-sans-jp` | `registry:font` | Noto Sans JP for kanji and punctuation (Japanese forms: `，。` sit in the lower left) |
| `font-noto-sans-tc` | `registry:font` | Noto Sans TC for the Traditional Chinese characters Noto Sans JP lacks |
| `font-jetbrains-mono` | `registry:font` | JetBrains Mono for code and IDs, ligatures on |

Text falls back in that order: `font-sans` is Inter, then Noto Sans JP, then Noto Sans TC. `font-mono` puts JetBrains Mono in front of the same CJK fonts. Use Inter's `tabular-nums` for amounts and table figures, not `font-mono`.

> [!NOTE]
> A project created with `-t next` keeps the template's Geist imports in `app/layout.tsx`. They are unused by the WinLab stacks; delete them to skip the extra download.

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router, static export) |
| Registry | shadcn CLI (`shadcn build`) |
| Styling | Tailwind CSS v4 + Base UI |
| Package manager | Bun |

## Getting started

```bash
git clone https://github.com/NYCU-WinLab/ui && cd ui
bun install
bun dev
```

Registry items are declared in [`registry.json`](registry.json). `bun run build` runs `shadcn build` into `public/r/` and then builds the site.

The site's own `app/globals.css` must match the `base` item's `cssVars`; `bun run theme:check` fails when they drift.

## Deploy

The site is a static export served by nginx. Each push to `main` publishes `ghcr.io/nycu-winlab/ui:main` and `ghcr.io/nycu-winlab/ui:sha-<commit>`.

```bash
cp .env.example .env   # pin UI_VERSION to a sha- tag in production
docker compose pull && docker compose up -d
```

## Contributing

Issues and PRs welcome: start with [CONTRIBUTING.md](https://github.com/zyx1121/.github/blob/main/CONTRIBUTING.md).

## License

[MIT](LICENSE) · Ultramarine, all the way down.
