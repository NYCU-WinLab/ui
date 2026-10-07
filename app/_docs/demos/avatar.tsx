"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/winlab/ui/avatar"

export function Demo() {
  return (
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarImage src="/icon.svg" alt="" />
        <AvatarFallback>W</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className="font-medium">WinLab</span>
        <span className="text-muted-foreground">NYCU</span>
      </div>
    </div>
  )
}
