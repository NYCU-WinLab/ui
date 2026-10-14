# Migrating a shadcn app to WinLab UI

This guide moves an existing shadcn app (Radix primitives, the stock theme) to the WinLab registry (Base UI primitives, the WinLab tokens). It comes from moving [llm.winlab.tw](https://github.com/NYCU-WinLab/llm.winlab.tw/pull/80): 25 files, 22 components, 204 e2e tests.

Keep the copy, labels and roles the same in the first pass. Then the app's e2e tests catch what the move breaks, and design changes can follow in their own pull requests.

## 1. Install

1. Delete `components/ui/` and `components.json`.
2. Run `npx shadcn@latest init https://ui.winlab.tw/r/base.json`.
3. Add each component the app uses: `npx shadcn@latest add @winlab/<name> -o`.
4. Add `@winlab/app-shell` and `@winlab/theme-provider`. Wrap the app in `ThemeProvider`.
5. Load the four fonts in the root layout with the variables `--font-inter`, `--font-noto-sans-jp`, `--font-noto-sans-tc` and `--font-jetbrains-mono`. Remove Geist.
6. Remove `radix-ui`, `clsx` and `tailwind-merge` when nothing imports them. `cn` now comes from `lib/utils` (the `cn` package).

## 2. Replace what the registry does not have

| Before | After |
|--------|-------|
| `card` | `section`: a divider, a title and the group's actions. A table under a page header needs no wrapper |
| `sidebar`, `sheet` | `app-shell`: the pages in the top right, folding into 頁面選單 on narrow screens. A second area (such as `/admin`) gets its own pages there |
| Theme toggle | None. The theme follows the system. D switches it while checking a page |
| `chart-1` to `chart-5` | `primary`, `muted-foreground`, a state color, or `primaryShades` for parts of one total |
| `bg-secondary`, `bg-accent`, `bg-card`, `bg-popover` | `bg-muted`, or nothing on the page layer |
| `Badge variant="secondary"` | `variant="muted"`; `success`, `warning` or `destructive` for a state |
| `Button size="sm"`, `"lg"`, `"icon-sm"` | One height: `size="default"` or `size="icon"` |
| `text-xs`, `text-sm`, `text-base` | `text-body`; secondary text adds `text-muted-foreground` |
| `text-lg` to `text-3xl` | `text-title` for a page title. Section titles stay `text-body` with `font-semibold` |
| `rounded-sm` to `rounded-4xl` | `rounded-control`, `rounded-menu`, `rounded-surface` or `rounded-full` |

## 3. Behavior that changes with Base UI

| Radix | Base UI | Why it matters |
|-------|---------|----------------|
| `<Button asChild><X/></Button>` | `<Button render={<X/>}>` | `asChild` does not exist |
| A `Button` in a form submits | `Button` is `type="button"` | Add `type="submit"` to every submit button, or the form never submits |
| `<Button asChild><Link/></Button>` | `<Link className={buttonVariants()}>` | `render={<Link/>}` gives the link `role="button"`, so `getByRole("link")` finds nothing |
| `onEscapeKeyDown`, `onInteractOutside` on `DialogContent` | `onOpenChange(open, details)` on `Dialog`: check `details.reason` (`"escape-key"`, `"outside-press"`) and call `details.cancel()`. `disablePointerDismissal` blocks outside clicks | The old props do not exist |
| Dialog content can disappear with its data | Keep the last value while the dialog closes | The dialog animates out with its content; an empty dialog flashes |
| `DropdownMenuItem onSelect` | `onClick` | `onSelect` does not fire |
| `SelectValue` shows the label | Pass `items` (`{value, label}[]`) to `Select` | Without `items`, the trigger shows the raw value |
| `onValueChange(value: string)` | `value` can be `null` | Guard before you use it |

## 4. Tests

- **Paused clocks.** Base UI finishes opening and closing with timers. A test that pauses the page clock (`page.clock.pauseAt`) also stops them. A closed dialog then stays mounted with `data-ending-style`, and its backdrop blocks every click. Select options also stay unpositioned. Advance the clock in small steps:

  ```ts
  export async function closeDialogs(page: Page) {
    const dialogs = page.getByRole("dialog").or(page.getByRole("alertdialog"))
    await expect.poll(async () => {
      await page.clock.runFor(100)
      return dialogs.count()
    }).toBe(0)
  }

  export async function openSelect(page: Page, name: string) {
    await page.getByRole("combobox", { name }).click()
    await page.clock.runFor(100)
  }
  ```

- **Fonts in headless Chromium.** Noto Sans JP and TC load as about 240 `woff2` slices. Headless Chromium sometimes crashes on them ("Page crashed"; ui.winlab.tw itself crashed 2 times in 20 loads). Block fonts in e2e. Then ignore console errors that come from `.woff2`:

  ```ts
  await context.route("**/*.woff2", (route) => route.abort())
  ```

- **Narrow screens.** The page links are inside 頁面選單 below `md`. Open it first in a mobile project.
