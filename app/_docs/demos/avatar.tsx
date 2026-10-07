"use client"

import { Avatar, AvatarFallback } from "@/registry/winlab/ui/avatar"

export function Demo() {
  return (
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarFallback>陳</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className="font-medium">陳怡君</span>
        <span className="text-muted-foreground">碩一</span>
      </div>
    </div>
  )
}
