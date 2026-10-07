import Link from "next/link"

import { SiteShell } from "@/app/_docs/site-shell"
import { StatusPage } from "@/registry/winlab/blocks/status-page/status-page"
import { buttonVariants } from "@/registry/winlab/ui/button"

export default function NotFound() {
  return (
    <SiteShell layout="spotlight">
      <StatusPage
        title="找不到這個頁面"
        description="網址可能打錯了，或這個頁面已經移走。"
        action={
          <Link href="/" className={buttonVariants()}>
            回到首頁
          </Link>
        }
      />
    </SiteShell>
  )
}
