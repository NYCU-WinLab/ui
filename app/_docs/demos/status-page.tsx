"use client"

import { StatusPage } from "@/registry/winlab/blocks/status-page/status-page"
import { Button } from "@/registry/winlab/ui/button"

export function Demo() {
  return (
    <StatusPage
      title="這個頁面出了問題"
      description="資料沒有載入成功，可以再試一次。"
      action={<Button onClick={() => window.location.reload()}>重試</Button>}
    />
  )
}
