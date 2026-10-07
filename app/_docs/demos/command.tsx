"use client"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/winlab/ui/command"

export function Demo() {
  return (
    <Command>
      <CommandInput placeholder="搜尋功能" />
      <CommandList>
        <CommandEmpty>找不到功能</CommandEmpty>
        <CommandGroup heading="常用">
          <CommandItem>訂便當</CommandItem>
          <CommandItem>請假</CommandItem>
          <CommandItem>報帳</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
