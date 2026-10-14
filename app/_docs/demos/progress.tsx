"use client"

import * as React from "react"

import { Button } from "@/registry/winlab/ui/button"
import { Progress } from "@/registry/winlab/ui/progress"

export function Demo() {
  const [used, setUsed] = React.useState(12)
  const budget = 50
  return (
    <div className="flex w-full flex-col gap-3">
      <p className="text-body tabular-nums">
        已用 US$ {used} / {budget}
      </p>
      <Progress
        value={(Math.min(used, budget) / budget) * 100}
        aria-label="已用額度"
      />
      <div className="flex gap-3">
        <Button variant="outline" onClick={() => setUsed(0)}>
          重置
        </Button>
        <Button onClick={() => setUsed((v) => Math.min(budget, v + 8))}>
          用 US$ 8
        </Button>
      </div>
    </div>
  )
}
