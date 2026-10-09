"use client"

import { PencilIcon } from "lucide-react"

import { AvatarStack } from "@/registry/winlab/blocks/avatar-stack/avatar-stack"
import { ExpandRow } from "@/registry/winlab/blocks/expand-row/expand-row"
import { Button } from "@/registry/winlab/ui/button"

const weeks = [
  { date: "10 月 19 日", who: "博士生", what: "NetLLM (SIGCOMM'24)" },
  { date: "11 月 2 日", who: "碩士生", what: "ORANSlice (MobiCom'24)" },
  { date: "11 月 9 日", who: "專題生", what: "XRP (OSDI'22)" },
]

export function Demo() {
  return (
    <ul className="flex w-full max-w-2xl stagger-rise flex-col text-left">
      {weeks.map((week) => (
        <ExpandRow
          key={week.date}
          summary={
            <div className="flex gap-4">
              <span className="w-28 shrink-0 tabular-nums">{week.date}</span>
              <span className="font-medium">{week.who}</span>
              <span className="min-w-0 truncate text-muted-foreground">
                {week.what}
              </span>
            </div>
          }
          actions={
            <Button variant="ghost" size="icon" aria-label="編輯">
              <PencilIcon />
            </Button>
          }
        >
          <div className="flex flex-wrap items-center gap-4 pl-32 text-muted-foreground">
            <AvatarStack
              people={[
                { id: "a", name: "教授" },
                { id: "b", name: "助理" },
                { id: "c", name: "校友" },
              ]}
            />
            <span>提問</span>
            <span>EC 411　15:30</span>
          </div>
        </ExpandRow>
      ))}
    </ul>
  )
}
