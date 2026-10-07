"use client"

import { toast } from "sonner"

import { Button } from "@/registry/winlab/ui/button"

export function Demo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button
        variant="outline"
        onClick={() =>
          toast.success("已送出申請", {
            description: "簽核人會收到通知。",
          })
        }
      >
        成功
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.error("上傳失敗", {
            description: "檔案超過 10 MB。",
            action: { label: "重試", onClick: () => {} },
          })
        }
      >
        錯誤
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.warning("發票缺少統編，請在 3 天內補件。")}
      >
        警告
      </Button>
      <Button variant="outline" onClick={() => toast.message("已複製信箱")}>
        訊息
      </Button>
    </div>
  )
}
