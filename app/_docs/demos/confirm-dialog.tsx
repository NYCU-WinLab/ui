"use client"

import { Trash2Icon } from "lucide-react"

import { ConfirmDialog } from "@/registry/winlab/blocks/confirm-dialog/confirm-dialog"
import { Button } from "@/registry/winlab/ui/button"

const wait = () => new Promise<void>((resolve) => setTimeout(resolve, 1000))

export function Demo() {
  return (
    <div className="flex items-center gap-3">
      <ConfirmDialog
        trigger={
          <Button variant="ghost" size="icon" aria-label="刪除">
            <Trash2Icon />
          </Button>
        }
        title="刪除這張收據？"
        confirmLabel="刪除"
        onConfirm={wait}
      />
      <ConfirmDialog
        trigger={<Button variant="outline">關閉訂單</Button>}
        title="關閉這筆訂單？"
        confirmLabel="關閉"
        variant="default"
        onConfirm={wait}
      />
    </div>
  )
}
