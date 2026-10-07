"use client"

import * as React from "react"

import { DatePicker } from "@/registry/winlab/blocks/date-picker/date-picker"
import { Label } from "@/registry/winlab/ui/label"

export function Demo() {
  const [date, setDate] = React.useState<Date | null>(null)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Label htmlFor="spent-on">消費日期</Label>
      <DatePicker
        id="spent-on"
        value={date}
        onValueChange={setDate}
        disabledDays={{ after: new Date() }}
        className="w-full"
      />
    </div>
  )
}
