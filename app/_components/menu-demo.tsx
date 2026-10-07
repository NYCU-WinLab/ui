"use client"

import { EllipsisIcon } from "lucide-react"

import { Button } from "@/registry/winlab/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/registry/winlab/ui/dropdown-menu"

export function MenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button variant="outline" size="icon" aria-label="更多" />}
      >
        <EllipsisIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>收據</DropdownMenuLabel>
          <DropdownMenuItem>重新命名</DropdownMenuItem>
          <DropdownMenuItem>下載</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>移到</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>交通</DropdownMenuItem>
              <DropdownMenuItem>餐費</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>刪除</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
