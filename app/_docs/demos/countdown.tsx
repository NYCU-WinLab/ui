import { Countdown } from "@/registry/winlab/blocks/countdown/countdown"

const soon = new Date(Date.now() + 42 * 60 * 1000)
const later = new Date(Date.now() + (2 * 1440 + 5 * 60) * 60 * 1000)

export function Demo() {
  return (
    <div className="flex flex-col items-center gap-4 text-title font-medium">
      <Countdown to={later} />
      <Countdown to={soon} />
    </div>
  )
}
