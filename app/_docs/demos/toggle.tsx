"use client"

import {
  CaptionsIcon,
  HandIcon,
  MicIcon,
  MicOffIcon,
  VideoIcon,
  VideoOffIcon,
} from "lucide-react"

import { Toggle } from "@/registry/winlab/ui/toggle"

export function Demo() {
  return (
    <div className="flex items-center gap-3">
      <Toggle
        variant="alert"
        defaultPressed
        aria-label="麥克風"
        offIcon={<MicOffIcon />}
      >
        <MicIcon />
      </Toggle>
      <Toggle variant="alert" aria-label="鏡頭" offIcon={<VideoOffIcon />}>
        <VideoIcon />
      </Toggle>
      <Toggle defaultPressed aria-label="字幕">
        <CaptionsIcon />
      </Toggle>
      <Toggle aria-label="舉手">
        <HandIcon />
      </Toggle>
    </div>
  )
}
