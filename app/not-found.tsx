import Link from "next/link"

import { SiteShell } from "@/app/_docs/site-shell"
import { buttonVariants } from "@/registry/winlab/ui/button"

export default function NotFound() {
  return (
    <SiteShell layout="spotlight">
      <div className="flex flex-col items-center gap-12 text-center">
        <header className="flex flex-col items-center gap-2">
          <h1 className="text-title font-medium">找不到這個頁面</h1>
          <p className="text-muted-foreground">
            網址可能打錯了，或這個頁面已經移走。
          </p>
        </header>
        <Link href="/" className={buttonVariants()}>
          回到首頁
        </Link>
      </div>
    </SiteShell>
  )
}
