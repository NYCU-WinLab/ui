"use client"

import { toast } from "sonner"

import { Button } from "@/registry/winlab/ui/button"

export function Demo() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <Button variant="outline" onClick={() => toast.success("已送出")}>
        成功
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.error("檔案超過 10 MB", {
            action: { label: "重試", onClick: () => {} },
          })
        }
      >
        錯誤
      </Button>
      <Button variant="outline" onClick={() => toast.warning("缺少統編")}>
        警告
      </Button>
      <Button variant="outline" onClick={() => toast.message("已複製")}>
        訊息
      </Button>
    </div>
  )
}
