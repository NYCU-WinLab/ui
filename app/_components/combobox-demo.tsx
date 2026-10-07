"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/registry/winlab/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/winlab/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/winlab/ui/popover"

const members = ["陳怡君", "林志豪", "吳佳穎", "黃冠宇", "蔡宜庭"]

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState<string | null>(null)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        render={<Button variant="outline" className="w-full justify-between" />}
      >
        <span className={value ? "" : "text-muted-foreground"}>
          {value ?? "選擇與會者"}
        </span>
        <ChevronDownIcon className="text-muted-foreground" />
      </PopoverTrigger>
      <PopoverContent className="w-(--anchor-width)">
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
      </PopoverContent>
    </Popover>
  )
}
