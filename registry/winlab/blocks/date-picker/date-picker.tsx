"use client"

import * as React from "react"
import { cn } from "cn"
import { CalendarIcon } from "lucide-react"
import type { Matcher } from "react-day-picker"

import { fieldTriggerClassName } from "@/registry/winlab/lib/field"
import { Calendar } from "@/registry/winlab/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/winlab/ui/popover"

/** 2026-10-07: the value a form posts, in local time. */
function toDateString(date: Date) {
  const pad = (n: number) => String(n).padStart(2, "0")
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

type DatePickerProps = {
  value: Date | null
  onValueChange: (date: Date | null) => void
  placeholder?: string
  /** Posts the date as yyyy-mm-dd under this name, for FormDialog. */
  name?: string
  /** A required date cannot be cleared by choosing it again. */
  required?: boolean
  /** Days that cannot be chosen, such as { before: new Date() }. */
  disabledDays?: Matcher | Matcher[]
  disabled?: boolean
  className?: string
  id?: string
}

// A date field: closed it looks like every other field, open it is a
// calendar, and choosing a day closes it.
function DatePicker({
  value,
  onValueChange,
  placeholder = "選擇日期",
  name,
  required,
  disabledDays,
  disabled,
  className,
  id,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        id={id}
        disabled={disabled}
        aria-required={required}
        data-placeholder={value ? undefined : ""}
        className={cn(fieldTriggerClassName, "tabular-nums", className)}
      >
        <span className="flex-1 truncate text-left">
          {value
            ? `${value.getFullYear()} 年 ${value.getMonth() + 1} 月 ${value.getDate()} 日`
            : placeholder}
        </span>
        <CalendarIcon className="text-muted-foreground" />
      </PopoverTrigger>
      <PopoverContent className="w-auto">
        <Calendar
          mode="single"
          required={required}
          selected={value ?? undefined}
          defaultMonth={value ?? undefined}
          disabled={disabledDays}
          onSelect={(date: Date | undefined) => {
            onValueChange(date ?? null)
            setOpen(false)
          }}
        />
      </PopoverContent>
      {name && (
        <input
          type="hidden"
          name={name}
          value={value ? toDateString(value) : ""}
        />
      )}
    </Popover>
  )
}

export { DatePicker, toDateString }
