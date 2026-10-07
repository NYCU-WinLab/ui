"use client"

import { Button } from "@/registry/winlab/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/winlab/ui/popover"

export function Demo() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        匯出
      </PopoverTrigger>
      <PopoverContent className="w-48">
        <Button variant="ghost" className="justify-start">
          CSV
        </Button>
        <Button variant="ghost" className="justify-start">
          PDF
        </Button>
      </PopoverContent>
    </Popover>
  )
}
