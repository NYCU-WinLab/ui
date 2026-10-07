"use client"

import { DoorOpenIcon } from "lucide-react"

import { ActionPanel } from "@/registry/winlab/blocks/action-panel/action-panel"

const wait = () => new Promise<void>((resolve) => setTimeout(resolve, 1000))

export function Demo() {
  return (
    <ActionPanel
      label="開門"
      doneLabel="已開門"
      icon={<DoorOpenIcon />}
      onAction={wait}
    />
  )
}
