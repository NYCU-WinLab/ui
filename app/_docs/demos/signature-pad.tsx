"use client"

import * as React from "react"
import { toast } from "sonner"

import {
  SignaturePad,
  SignaturePreview,
} from "@/registry/winlab/blocks/signature-pad/signature-pad"
import { Button } from "@/registry/winlab/ui/button"

export function Demo() {
  const [signature, setSignature] = React.useState<string | null>(null)
  return (
    <div className="flex flex-col items-center gap-6">
      {signature ? (
        <SignaturePreview src={signature} className="w-64" />
      ) : (
        <p className="text-muted-foreground">還沒有簽名</p>
      )}
      <SignaturePad
        trigger={<Button>{signature ? "重新簽名" : "簽名"}</Button>}
        onSave={(dataUrl) => {
          setSignature(dataUrl)
          toast.success("已儲存簽名")
        }}
      />
    </div>
  )
}
