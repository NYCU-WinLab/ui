"use client"

import { CopyIcon } from "lucide-react"

import { Button } from "@/registry/winlab/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/winlab/ui/tooltip"

export function Demo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button variant="outline" size="icon" aria-label="複製信箱" />
          }
        >
          <CopyIcon />
        </TooltipTrigger>
        <TooltipContent>複製信箱</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
