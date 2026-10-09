"use client"

import * as React from "react"

import { Button } from "@/registry/winlab/ui/button"
import { NumberTicker } from "@/registry/winlab/ui/number-ticker"

export function Demo() {
  const [value, setValue] = React.useState(128)
  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-title font-medium">
        NT$ <NumberTicker value={value} />
      </p>
      <div className="flex gap-3">
        <Button
          variant="outline"
          onClick={() => setValue((v) => Math.max(0, v - 35))}
        >
          減一個便當
        </Button>
        <Button onClick={() => setValue((v) => v + 35)}>加一個便當</Button>
      </div>
    </div>
  )
}
