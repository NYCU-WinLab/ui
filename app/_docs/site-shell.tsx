import { AppShell } from "@/registry/winlab/blocks/app-shell/app-shell"

// The site's own corners: every page sits under WinLab / UI.
export function SiteShell({
  page,
  children,
}: {
  page?: { label: string; href: string }
  children: React.ReactNode
}) {
  return (
    <AppShell
      breadcrumb={[
        {
          label: "WinLab",
          href: "https://portal.winlab.tw",
          tip: "回到 WinLab Portal",
        },
        { label: "UI", href: "/", tip: "所有元件" },
        ...(page ? [page] : []),
      ]}
      nav={[
        {
          label: "設計規則",
          href: "https://github.com/NYCU-WinLab/ui/blob/main/DESIGN.md",
          tip: "GitHub 上的 DESIGN.md",
        },
        {
          label: "原始碼",
          href: "https://github.com/NYCU-WinLab/ui",
          tip: "GitHub 上的 NYCU-WinLab/ui",
        },
      ]}
    >
      {children}
    </AppShell>
  )
}
