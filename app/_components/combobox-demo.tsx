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

const members = ["陳怡君", "林志豪", "吳佳穎", "黃冠宇", "蔡宜庭"]

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState<string | null>(null)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <ComboboxTrigger placeholder="選擇與會者" className="w-full">
        {value}
      </ComboboxTrigger>
      <ComboboxContent>
        <Command>
          <CommandInput placeholder="搜尋成員" />
          <CommandList>
            <CommandEmpty>找不到成員</CommandEmpty>
            <CommandGroup>
              {members.map((member) => (
                <CommandItem
                  key={member}
                  value={member}
                  data-checked={value === member}
                  onSelect={() => {
                    setValue(member)
                    setOpen(false)
                  }}
                >
                  {member}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </ComboboxContent>
    </Popover>
  )
}
