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
npx shadcn@latest add @winlab/button
```

## What is in the registry

| Item | Type | What it gives you |
|------|------|-------------------|
| `base` | `registry:base` | Ultramarine brand tokens (Pantone 286 C, `#0033A0`) on a neutral scale, light and dark; `success` and `warning` status colors; `--radius: 1rem`; the font stacks below |
| `font-inter` | `registry:font` | Inter for Latin text and numbers |
| `font-noto-sans-jp` | `registry:font` | Noto Sans JP for kanji and punctuation (Japanese forms: `，。` sit in the lower left) |
| `font-noto-sans-tc` | `registry:font` | Noto Sans TC for the Traditional Chinese characters Noto Sans JP lacks |
| `font-jetbrains-mono` | `registry:font` | JetBrains Mono for code and IDs, ligatures on |
| `button` | `registry:ui` | 40px tall; variants `default`, `outline`, `ghost`, `destructive`; sizes `default`, `icon` |
| `label` | `registry:ui` | Form label |
| `input` | `registry:ui` | Text input, same height as `button` |
| `textarea` | `registry:ui` | Multi-line input that grows with its content |
| `skeleton` | `registry:ui` | Loading placeholder |
| `dialog` | `registry:ui` | Modal; sizes `default` (512px) and `wide` (672px), scrolls past 92% of the viewport height |
| `alert-dialog` | `registry:ui` | Confirmation with Cancel and an action |
| `select` | `registry:ui` | Single-choice dropdown, same height as `input` |
| `table` | `registry:ui` | Data table with muted headers; add `tabular-nums` and `text-right` to number columns |
| `popover` | `registry:ui` | Frosted menu surface anchored to a trigger; `w-(--anchor-width)` matches the trigger |
| `command` | `registry:ui` | Searchable list for a combobox inside a `popover` |
| `combobox` | `registry:ui` | `ComboboxTrigger` (same field look as `select`) and `ComboboxContent` (as wide as the trigger) around a `command` |
| `dropdown-menu` | `registry:ui` | Action menu: items, labels, separators and submenus |
| `checkbox` | `registry:ui` | Round 20px checkbox |
| `switch` | `registry:ui` | On / off toggle, 40 x 24 |
| `tabs` | `registry:ui` | Segmented tabs |
| `avatar` | `registry:ui` | Round 40px avatar with initials fallback |
| `tooltip` | `registry:ui` | Short inverted label on hover or focus |
| `separator` | `registry:ui` | Hairline divider |
| `collapsible` | `registry:ui` | Unstyled show / hide region |
| `sonner` | `registry:ui` | Toasts: frosted surface, status-colored icons, action and cancel buttons |
| `app-shell` | `registry:block` | The four corners of every WinLab app (needs `next-themes`' `ThemeProvider`) |
| `badge` | `registry:ui` | Status label; variants `default`, `muted`, `outline`, `destructive`, `success`, `warning` |

Text falls back in that order: `font-sans` is Inter, then Noto Sans JP, then Noto Sans TC. `font-mono` puts JetBrains Mono in front of the same CJK fonts. Use Inter's `tabular-nums` for amounts and table figures, not `font-mono`.

### Type scale

Two sizes, named by role:

| Utility | Size / line height | Use |
|---------|--------------------|-----|
| `text-title` | 24px / 32px | Page and container titles |
| `text-body` | 16px / 24px | Everything else; secondary text uses `text-muted-foreground` |

The base clears Tailwind's default scale (`--text-*: initial`), so `text-sm`, `text-2xl` and the rest generate nothing. Components added to this registry use `text-title` and `text-body` only. Hierarchy below a title comes from weight, the muted color and layout patterns, not size.

`bun run tokens:check` rejects anything that bypasses the tokens in this repo: the old scale names, arbitrary values (`rounded-[10px]`, `text-[13px]`), Tailwind palette colors (`bg-blue-500`), color literals, inline styles and raw `font-size`.

> [!NOTE]
> A project created with `-t next` keeps the template's Geist imports in `app/layout.tsx`. They are unused by the WinLab stacks; delete them to skip the extra download.

## Design rules

The two-layer model, type, radius and color rules are in [DESIGN.md](DESIGN.md).

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
