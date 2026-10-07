import { PlusIcon } from "lucide-react"

import { Button } from "@/registry/winlab/ui/button"

export function Demo() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button size="icon" variant="outline" aria-label="新增">
        <PlusIcon />
      </Button>
    </div>
  )
}
