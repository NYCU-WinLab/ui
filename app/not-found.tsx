import Link from "next/link"

import { SiteShell } from "@/app/_docs/site-shell"
import { StatusPage } from "@/registry/winlab/blocks/status-page/status-page"
import { buttonVariants } from "@/registry/winlab/ui/button"

export default function NotFound() {
  return (
    <SiteShell layout="spotlight">
      <StatusPage
        title="找不到這個頁面"
        action={
          <Link href="/" className={buttonVariants()}>
            回到首頁
          </Link>
        }
      />
    </SiteShell>
  )
}
