"use client"

import {
  HighlighterIcon,
  MessageSquareTextIcon,
  PenLineIcon,
} from "lucide-react"

import { Button } from "@/registry/winlab/ui/button"
import {
  Toolbar,
  ToolbarPanel,
  ToolbarPanelContent,
  ToolbarPanelTrigger,
} from "@/registry/winlab/ui/toolbar"

export function Demo() {
  return (
    <div className="flex h-80 items-end justify-center">
      <Toolbar aria-label="工具">
        <Button variant="default" size="icon" aria-label="螢光筆">
          <HighlighterIcon />
        </Button>
        <Button variant="ghost" size="icon" aria-label="原子筆">
          <PenLineIcon />
        </Button>
        <ToolbarPanel>
          <ToolbarPanelTrigger render={<Button variant="ghost" />}>
            <MessageSquareTextIcon />3
          </ToolbarPanelTrigger>
          <ToolbarPanelContent>
            {["第 1 頁，螢光筆", "第 2 頁，框選", "第 4 頁，原子筆"].map(
              (row) => (
                <Button key={row} variant="ghost" className="justify-start">
                  {row}
                </Button>
              )
            )}
          </ToolbarPanelContent>
        </ToolbarPanel>
      </Toolbar>
    </div>
  )
}
