# WinLab UI design rules

These rules hold for every WinLab app. `bun run tokens:check` enforces the parts a regex can see; the rest is review.

## Two layers

The interface is flat and has exactly two layers.

| Layer | What lives there | Surface |
|-------|------------------|---------|
| 1. Page | Everything that is on the page when it loads: titles, text, lists, tables, long forms | None. No borders around groups, no shadows, no card backgrounds |
| 2. Overlay | Anything called up on top of the page: `dialog`, `alert-dialog`, the `select` menu, popovers and menus | No fill: frosted glass (`bg-transparent backdrop-blur-md`, 12px), a border, a shadow, `rounded-surface` or `rounded-menu`. The dialog overlay is the same frosted glass with no tint |

- Group page content with spacing and, where a line helps, a divider (`border-t` / `border-b`). Never wrap a group in a frame.
- Controls keep their own outline: inputs, selects and outline buttons are controls, not containers.
- A form either is the page (layer 1, no frame) or is called up in a `dialog` (layer 2). Short edits, such as adding one item or changing one field of a row, go in a dialog; a form that is the purpose of the page stays on the page.
- A section title on a page is followed by more space (`gap-6`) than a field label (`gap-2`), so the two never read as the same level.

## Type

Two sizes, by role: `text-title` (24px) for page and dialog titles, `text-body` (16px) for everything else. Weight and the muted color carry the rest: section titles `font-semibold`, labels and buttons `font-medium`, secondary text `text-muted-foreground`.

## Radius

Radii are concentric: an outer corner equals the inner corner plus the padding between them.

| Utility | Value | Use |
|---------|-------|-----|
| `rounded-control` | `--radius` (16px) | Buttons, inputs, select triggers, menu items |
| `rounded-menu` | control + 4px | Menus with `p-1` around control-radius items |
| `rounded-surface` | control + 24px | Dialogs with `p-6` around controls |
| `rounded-full` | pill | Badges |

A new container picks its radius from this rule, not by eye. If its padding is not 4px or 24px, it either changes padding or adds a token here.

## Color

Use the theme tokens only: `background` / `foreground`, `primary`, `muted` (the one neutral fill and the secondary text color), `border` / `input` / `ring`, `destructive`, `success`, `warning`. There is no `secondary` or `accent`; they were the same gray as `muted`. No Tailwind palette colors and no color literals.

Focus follows the component's own color. `--ring` is a neutral gray, so inputs, selects and outline or ghost buttons show a gray focus ring; the primary button shows a primary ring and the destructive button a destructive one. Ultramarine marks the main action, not every focused control.
