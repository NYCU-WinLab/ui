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

const members = ["Alice Chen", "Bob Lin", "Carol Wu", "Dave Huang", "Eve Tsai"]

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState<string | null>(null)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        render={<Button variant="outline" className="w-full justify-between" />}
      >
        <span className={value ? "" : "text-muted-foreground"}>
          {value ?? "Choose an attendee"}
        </span>
        <ChevronDownIcon className="text-muted-foreground" />
      </PopoverTrigger>
      <PopoverContent className="w-(--anchor-width)">
        <Command>
          <CommandInput placeholder="Search members" />
          <CommandList>
            <CommandEmpty>No member found.</CommandEmpty>
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
