"use client"

import * as React from "react"

import { Calendar } from "@/registry/winlab/ui/calendar"

export function Demo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return <Calendar mode="single" selected={date} onSelect={setDate} />
}
