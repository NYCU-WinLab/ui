"use client"

import { Separator } from "@/registry/winlab/ui/separator"

export function Demo() {
  return (
    <div className="flex w-full flex-col gap-4">
      <p>本月報帳</p>
      <Separator />
      <div className="flex h-6 items-center gap-4 text-muted-foreground">
        <span>3 筆待簽核</span>
        <Separator orientation="vertical" />
        <span>NT$ 2,064</span>
      </div>
    </div>
  )
}
