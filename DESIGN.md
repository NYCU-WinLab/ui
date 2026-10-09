# WinLab UI design rules

These rules hold for every WinLab app. `bun run tokens:check` enforces the parts a regex can see; the rest is review.

## App shell

Every WinLab app is framed by four fixed corners, 24px in from the viewport. `app-shell` draws them. By default each corner has the job below; an app that needs something else in a corner replaces it through `corners`, built from `CornerLink` and `CornerTip` so it keeps the corner's type, color and tips.

| Corner | Default job | Default content |
|--------|-----|---------|
| Top left | Where you are | Breadcrumb: the lab (portal home), then the app (its home) |
| Top right | Where you can go | The app's pages, the current one in `foreground`; last, the account: "登入" when signed out, the member's name when signed in |
| Bottom left | Which build | The short commit of this build, linking to its CD run, with the build time (Asia/Taipei) as its tip |
| Bottom right | Whose it is | © year; its tip says NYCU WinLab |

- Actions are not navigation: a "新增訂單" button goes in the page header next to the content it changes, never in a corner.
- There is no theme toggle: the theme follows the system.
- CD passes `BUILD_SHA`, `BUILD_TIME` and `BUILD_URL` to the image build (`NEXT_PUBLIC_BUILD_*`); without them the version reads `dev`.
- A corner with nothing to show stays empty.
- Every corner item has a tip (`tip` is required in `app-shell`, so a missing one fails the type check) that says what its label leaves out (where a link goes, what a page holds, who owns the site). A tip never repeats the label. Tips open at once, toward the page, lined up with the corner's outer edge; touch never opens them, so nothing depends on one.
- Corner text is `text-body` in `muted-foreground`, links turn `foreground` on hover and when current.
- Content that scrolls under the corners fades into a 64px band of frosted glass at the top and bottom edges.
- No menu button: an app keeps its pages few enough to fit beside the breadcrumb on a phone.

## Page layouts

Three, chosen per page with `app-shell`'s `layout`:

| Layout | For | Shape |
|--------|-----|-------|
| `column` | Pages read top to bottom: home, lists, tables, long forms | One centered column (`max-w-4xl`) starting under the top corners |
| `wide` | A grid that needs the whole screen: a two-week timetable, a room schedule | The full width between the corners' outer edges (24px in from the viewport), starting under the top corners |
| `spotlight` | Pages about one thing: a single item, sign-in, a result, an empty state, a not-found, a component's doc page | The content centered horizontally and vertically between the corners (`max-w-2xl`); taller content scrolls as a column |

Use `wide` only when the content is a grid that loses meaning when squeezed; text and lists stay in `column`, so lines never run across a whole monitor.

In a spotlight, the title and description center above the focal content; text that is the focus itself stays left-aligned when it runs to more than one line.

## Focus and quiet

Every app page has one loud thing and keeps the rest quiet.

- **The focus** is what a member opened the page for: the next meeting, today's lunch order, what waits on their signature. It sits right under the page header, in the `focus` block, and nowhere else on the page.
- Only the focus may use the primary color for text (`FocusHighlight`), the spring (`duration-spring`, `animate-rise`) and the large type of `FocusTitle`. Numbers in it roll (`number-ticker`, `countdown`); people in it show as an `avatar-stack`.
- **Everything else is quiet**: lists in `text-body`, secondary facts in `muted-foreground`, motion at `duration-state` / `duration-overlay`. Every list arrives with `stagger-rise`, so pages feel the same when they load.
- A page with nothing pressing (a settings page, a list of records) has no focus. Do not invent one.
- A row that has more to say opens in place (`expand-row`) instead of sending the member to another page; editing still happens in a dialog.

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

## Lists

- Rows are separated by dividers (`border-b`), never framed: no card per row, no border around the list. A row's text lines up with the page's left edge.
- Row actions follow how many there are:

| Actions on a row | Shape |
|------------------|-------|
| One or two | Ghost icon buttons, each with a tooltip naming the verb ("編輯", "刪除") |
| Three or more | One `⋯` button opening a `dropdown-menu`; the destructive action last, after a separator |

- A delete button stays muted on the row. Red belongs to the confirmation that follows, not to the trigger.
- Every action that cannot be undone asks first, in the `confirm-dialog` block. Its confirm button names the verb ("刪除", "撤回"), never "確定".

## Status and categories

Color means state: something that changes as work moves on. A category (a kind, a tag, a group) never gets a color.

| What it is | Badge |
|------------|-------|
| Waiting on someone (審核中, 送簽中) | `warning` |
| Done or accepted (已通過, 已完成) | `success` |
| Rejected or failed (已拒絕, 失敗) | `destructive` |
| Open, active, in progress (進行中) | `default` |
| Closed, inactive, draft (已關閉, 停用, 草稿) | `muted` |
| A category or tag, not a state | `outline` |

- Each app maps its status values to these variants in one place, next to the status labels, and every page reads that map.
- A status that only applies to some rows shows nothing on the others; do not add a "normal" badge.

## Copy

Say it once, in as few words as the thing needs. No sentence explains what the screen already shows.

- Buttons are the verb: "登入", "刪除", "允許". While it runs, the verb + "中…".
- Titles name the thing or ask the question: "收據", "刪除這張收據？", "找不到這個頁面". There is no subtitle; blocks have no description slot, so a page cannot grow one.
- Toasts are the outcome or the reason, a few words: "已送出", "檔案超過 10 MB".
- Field labels carry what a field needs; there is no helper text (see Two layers).

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

Quiet things move briefly and ease out; the page's one focus moves on a spring.

| Utility | Duration | Use |
|---------|----------|-----|
| `duration-state` | 150ms | A control changing state: hover, focus, check, switch, the tab highlight sliding |
| `duration-overlay` | 200ms | Something appearing or leaving: dialogs, menus, popovers, tooltips, a collapsible opening |
| `duration-spring` | 500ms, overshooting 10% | Only what the page is about: the `focus` block, digits rolling, an avatar stack spreading, a row opening in place |

| Utility | What it does |
|---------|--------------|
| `animate-rise` | The focus rises 8px into place on the spring when the page loads |
| `stagger-rise` | On a list: its rows rise one after another, 30ms apart, in 200ms each, so a list arrives as a sequence and not as one block |

- Every animation runs the same way in both directions: what zooms in zooms out, what fades in fades out, at the same duration.
- Overlays fade and zoom from where they open; a select menu that sits over its trigger only fades, opening and closing.
- Menu rows highlight instantly, so keyboard navigation never lags.
- The spring is for the focus only. A spring on every button makes the page loud everywhere, which is the same as nowhere.
- When the system asks for reduced motion (`prefers-reduced-motion: reduce`), every zoom and slide is dropped and the fades stay; rising becomes fading, digits change without rolling, sliding highlights and height animations jump instead.
- `tokens:check` rejects other durations (`duration-300`), easing classes and delays.
- Toasts keep sonner's own timing, which also follows reduced motion.

