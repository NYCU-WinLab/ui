"use client"

import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/registry/winlab/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/winlab/ui/collapsible"

export function Demo() {
  return (
    <Collapsible className="flex flex-col gap-3">
      <CollapsibleTrigger render={<Button variant="ghost" className="w-fit" />}>
        更多資訊
        <ChevronDownIcon />
      </CollapsibleTrigger>
      <CollapsibleContent className="text-muted-foreground">
        研究方向：毫米波通訊。座位：B09。
      </CollapsibleContent>
    </Collapsible>
  )
}
