"use client"

import * as React from "react"

import { ComboboxContent, ComboboxTrigger } from "@/registry/winlab/ui/combobox"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/winlab/ui/command"
import { Popover } from "@/registry/winlab/ui/popover"

const categories = ["交通", "餐費", "文具", "設備", "印刷"]

export function Demo() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState<string | null>(null)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <ComboboxTrigger placeholder="選擇報帳類別" className="w-full">
        {value}
      </ComboboxTrigger>
      <ComboboxContent>
        <Command>
          <CommandInput placeholder="搜尋類別" />
          <CommandList>
            <CommandEmpty>找不到類別</CommandEmpty>
            <CommandGroup>
              {categories.map((category) => (
                <CommandItem
                  key={category}
                  value={category}
                  data-checked={value === category}
                  onSelect={() => {
                    setValue(category)
                    setOpen(false)
                  }}
                >
                  {category}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </ComboboxContent>
    </Popover>
  )
}
