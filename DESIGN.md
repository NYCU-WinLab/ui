# WinLab UI design rules

These rules hold for every WinLab app. `bun run tokens:check` enforces the parts a regex can see; the rest is review.

## App shell

Every WinLab app is framed by four fixed corners, 24px in from the viewport. `app-shell` draws them. By default each corner has the job below; an app that needs something else in a corner replaces it through `corners`, built from `CornerLink` and `CornerTip` so it keeps the corner's type, color and tips.

| Corner | Default job | Default content |
|--------|-----|---------|
| Top left | Where you are | Breadcrumb: the lab (portal home), then the app (its home) |
| Top right | Where you can go | The app's pages; the current one in `foreground` |
| Bottom left | Who you are | The signed-in member (to their profile) and the theme toggle |
| Bottom right | Whose it is | © year; its tip says NYCU WinLab |

- Actions are not navigation: a "新增訂單" button goes in the page header next to the content it changes, never in a corner.
- A corner with nothing to show stays empty.
- Every corner item can carry a tip that says what its label leaves out (where a link goes, what a page holds, who owns the site). A tip never repeats the label. Tips open at once, toward the page, lined up with the corner's outer edge; touch never opens them, so nothing depends on one.
- Corner text is `text-body` in `muted-foreground`, links turn `foreground` on hover and when current.
- Content that scrolls under the corners fades into a 64px band of frosted glass at the top and bottom edges.
- No menu button: an app keeps its pages few enough to fit beside the breadcrumb on a phone.

## Page layouts

Two, chosen per page with `app-shell`'s `layout`:

| Layout | For | Shape |
|--------|-----|-------|
| `column` | Pages read top to bottom: home, lists, tables, long forms | One centered column (`max-w-4xl`) starting under the top corners |
| `spotlight` | Pages about one thing: a single item, sign-in, a result, an empty state, a not-found, a component's doc page | The content centered horizontally and vertically between the corners (`max-w-2xl`); taller content scrolls as a column |

In a spotlight, the title and description center above the focal content; text that is the focus itself stays left-aligned when it runs to more than one line.

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
- No helper text under a field. If a field needs explaining, its label says it ("備註（簽核人看得到）"); errors go in a toast.
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

## Motion

Two durations, both ease-out:

| Utility | Duration | Use |
|---------|----------|-----|
| `duration-state` | 150ms | A control changing state: hover, focus, check, switch, the tab highlight sliding |
| `duration-overlay` | 200ms | Something appearing or leaving: dialogs, menus, popovers, tooltips, a collapsible opening |

- Every animation runs the same way in both directions: what zooms in zooms out, what fades in fades out, at the same duration.
- Overlays fade and zoom from where they open; a select menu that sits over its trigger only fades, opening and closing.
- Menu rows highlight instantly, so keyboard navigation never lags.
- When the system asks for reduced motion (`prefers-reduced-motion: reduce`), every zoom and slide is dropped and the fades stay; sliding highlights and height animations jump instead.
- `tokens:check` rejects other durations (`duration-300`), easing classes and delays.
- Toasts keep sonner's own timing, which also follows reduced motion.
