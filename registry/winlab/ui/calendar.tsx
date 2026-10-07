"use client"

import * as React from "react"
import { cn } from "@/registry/winlab/lib/utils"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { DayPicker, type DayButton } from "react-day-picker"
import { zhTW } from "react-day-picker/locale"

import { Button, buttonVariants } from "@/registry/winlab/ui/button"

const weekdayNames = "日一二三四五六"

// A month of 40px days, weeks starting on Monday, captions in Chinese
// ("2026 年 10 月"). Fits a popover's 288px exactly. Single dates only:
// WinLab apps pick one day at a time.
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      locale={zhTW}
      weekStartsOn={1}
      showOutsideDays={showOutsideDays}
      className={cn("w-fit", className)}
      formatters={{
        formatCaption: (month) =>
          `${month.getFullYear()} 年 ${month.getMonth() + 1} 月`,
        formatWeekdayName: (day) => weekdayNames[day.getDay()],
      }}
      classNames={{
        months: "relative flex flex-col",
        month: "flex flex-col gap-1",
        nav: "absolute inset-x-0 top-0 flex items-center justify-between",
        button_previous: buttonVariants({ variant: "ghost", size: "icon" }),
        button_next: buttonVariants({ variant: "ghost", size: "icon" }),
        month_caption: "flex h-10 items-center justify-center font-medium",
        month_grid: "border-collapse",
        weekdays: "flex",
        weekday:
          "flex size-10 items-center justify-center font-normal text-muted-foreground",
        week: "flex",
        day: "size-10 p-0 text-center",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation }) =>
          orientation === "left" ? <ChevronLeftIcon /> : <ChevronRightIcon />,
        DayButton: CalendarDayButton,
      }}
      {...props}
    />
  )
}

// Today is primary text; the chosen day is filled primary, including when it
// is today, and keeps its fill on hover; days outside the month and disabled
// days are muted.
function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.isoDate}
      data-selected={modifiers.selected || undefined}
      data-today={modifiers.today || undefined}
      data-outside={modifiers.outside || undefined}
      className={cn(
        "font-normal tabular-nums data-outside:text-muted-foreground data-today:font-semibold data-today:not-data-selected:text-primary data-selected:bg-primary data-selected:text-primary-foreground data-selected:hover:bg-primary",
        className
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }
