"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "cn"
import { ContrastIcon } from "lucide-react"
import { useTheme } from "next-themes"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/winlab/ui/avatar"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/winlab/ui/tooltip"

// A tip says what the label leaves out (where a link goes, what a page
// holds); it never repeats the label.
type Crumb = { label: string; href: string; tip?: string }
type NavItem = { label: string; href: string; tip?: string }
type User = { name: string; href: string; image?: string; tip?: string }

// The chrome of every WinLab app is its four corners, and each corner has one
// job. The props are the contract: there is no slot for anything else.
//   top left     where you are: breadcrumb back to the lab and the app
//   top right    where you can go: this app's pages
//   bottom left  who you are: the signed-in member and the theme
//   bottom right the copyright year; the tip names the owner
// Every item can carry a tip, opening toward the page and lined up with the
// corner's outer edge so it never leaves the viewport.
function AppShell({
  breadcrumb,
  nav = [],
  user,
  children,
}: {
  breadcrumb: Crumb[]
  nav?: NavItem[]
  user?: User
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <TooltipProvider>
      {/* Content scrolling under the corners fades into frosted glass. */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 z-40 h-16 mask-b-from-0% backdrop-blur-md"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 bottom-0 z-40 h-16 mask-t-from-0% backdrop-blur-md"
      />

      <header className="fixed top-6 left-6 z-50">
        <nav aria-label="位置" className="flex items-center gap-2">
          {breadcrumb.map((crumb, index) => {
            const last = index === breadcrumb.length - 1
            return (
              <React.Fragment key={crumb.href}>
                {index > 0 && (
                  <span aria-hidden className="text-muted-foreground">
                    /
                  </span>
                )}
                <CornerTip tip={crumb.tip} corner="top-left">
                  <Link
                    href={crumb.href}
                    aria-current={last ? "page" : undefined}
                    className={cn(cornerLink, last && "text-foreground")}
                  >
                    {crumb.label}
                  </Link>
                </CornerTip>
              </React.Fragment>
            )
          })}
        </nav>
      </header>

      {nav.length > 0 && (
        <nav
          aria-label="頁面"
          className="fixed top-6 right-6 z-50 flex items-center gap-4"
        >
          {nav.map((item) => (
            <CornerTip key={item.href} tip={item.tip} corner="top-right">
              <Link
                href={item.href}
                aria-current={isCurrent(item.href) ? "page" : undefined}
                className={cn(
                  cornerLink,
                  isCurrent(item.href) && "text-foreground"
                )}
              >
                {item.label}
              </Link>
            </CornerTip>
          ))}
        </nav>
      )}

      <div className="fixed bottom-6 left-6 z-50 flex items-center gap-4">
        {user && (
          <CornerTip tip={user.tip ?? "個人頁面"} corner="bottom-left">
            <Link href={user.href} className={cn(cornerLink, "gap-2")}>
              <Avatar className="size-6">
                {user.image && <AvatarImage src={user.image} alt="" />}
                <AvatarFallback>{user.name.slice(0, 1)}</AvatarFallback>
              </Avatar>
              {user.name}
            </Link>
          </CornerTip>
        )}
        <CornerTip tip="切換深色模式" corner="bottom-left">
          <ThemeToggle />
        </CornerTip>
      </div>

      <div className="fixed right-6 bottom-6 z-50">
        <CornerTip tip="NYCU WinLab" corner="bottom-right">
          <span tabIndex={0} className={cn(cornerLink, "cursor-default")}>
            © {new Date().getFullYear()}
          </span>
        </CornerTip>
      </div>

      <main className="mx-auto w-full max-w-4xl px-6 pt-24 pb-24">
        {children}
      </main>
    </TooltipProvider>
  )
}

type Corner = "top-left" | "top-right" | "bottom-left" | "bottom-right"

function CornerTip({
  tip,
  corner,
  children,
}: {
  tip?: string
  corner: Corner
  children: React.ReactElement
}) {
  if (!tip) return children
  return (
    <Tooltip>
      <TooltipTrigger render={children} />
      <TooltipContent
        side={corner.startsWith("top") ? "bottom" : "top"}
        align={corner.endsWith("left") ? "start" : "end"}
      >
        {tip}
      </TooltipContent>
    </Tooltip>
  )
}

const cornerLink =
  "relative inline-flex h-6 items-center text-muted-foreground transition-colors duration-state outline-none after:absolute after:-inset-2 hover:text-foreground focus-visible:text-foreground"

function ThemeToggle(props: React.ComponentProps<"button">) {
  const { resolvedTheme, setTheme } = useTheme()
  return (
    <button
      {...props}
      type="button"
      aria-label="切換深色模式"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={cn(cornerLink, "[&_svg]:size-4")}
    >
      <ContrastIcon />
    </button>
  )
}

export { AppShell }
