"use client"

import { StatusPage } from "@/registry/winlab/blocks/status-page/status-page"
import { Button } from "@/registry/winlab/ui/button"

export function Demo() {
  return (
    <StatusPage
      title="這個頁面出了問題"
      action={<Button onClick={() => window.location.reload()}>重試</Button>}
    />
  )
}
