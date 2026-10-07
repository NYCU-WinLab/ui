# WinLab UI design rules

These rules hold for every WinLab app. `bun run tokens:check` enforces the parts a regex can see; the rest is review.

## Two layers

The interface is flat and has exactly two layers.

| Layer | What lives there | Surface |
|-------|------------------|---------|
| 1. Page | Everything that is on the page when it loads: titles, text, lists, tables, long forms | None. No borders around groups, no shadows, no card backgrounds |
| 2. Overlay | Anything called up on top of the page: `dialog`, `alert-dialog`, the `select` menu, popovers and menus | No fill: frosted glass (`bg-transparent backdrop-blur-md`, 12px), a border, a shadow, `rounded-surface` or `rounded-menu`. The dialog overlay is the same frosted glass with no tint |

- Group page content with spacing and, where a line helps, a divider (`border-t` / `border-b`). Never wrap a group in a frame.
- Every pick-a-value control (select, combobox) looks like an input when closed: one shared trigger class. Never use a button as a field.
- Controls keep their own outline: inputs, selects and outline buttons are controls, not containers. A segmented tab list may use the `muted` fill: it is one control.
- Tooltips are the one inverted overlay (`bg-foreground text-background`): a few words over any content must stay legible, so they are not frosted.
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
| `rounded-surface` | control + 24px | Dialogs and toasts with `p-6` around controls |
| `rounded-full` | pill / circle | Badges, switches, checkboxes, avatars |

A new container picks its radius from this rule, not by eye. If its padding is not 4px or 24px, it either changes padding or adds a token here.

## Color

Use the theme tokens only: `background` / `foreground`, `primary`, `muted` (the one neutral fill and the secondary text color), `border` / `input` / `ring`, `destructive`, `success`, `warning`. There is no `secondary`, `accent` or `card` (they duplicated `muted` or `background`), no `popover` (overlays are frosted glass) and no `sidebar-*`: a sidebar needs a second surface color, which layer 1 does not have. Navigation lives in the app shell's corners or in an overlay.

Charts use the same colors, not chart-specific tokens:

| Series | Color |
|--------|-------|
| The main series | `primary` |
| A comparison (last year, average) | `muted-foreground` |
| A series with a meaning (income, expense, overdue) | `success`, `destructive`, `warning` |

A chart that needs more than two series to be told apart by color is split into small multiples or shown as a table. No Tailwind palette colors and no color literals.

Focus follows the component's own color. `--ring` is a neutral gray, so inputs, selects and outline or ghost buttons show a gray focus ring; the primary button shows a primary ring and the destructive button a destructive one. Ultramarine marks the main action, not every focused control.
