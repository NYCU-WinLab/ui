import { Button } from "@/registry/winlab/ui/button"
import { Input } from "@/registry/winlab/ui/input"
import { Label } from "@/registry/winlab/ui/label"

export function Demo() {
  return (
    <div className="flex w-full flex-col gap-2">
      <Label htmlFor="item">項目</Label>
      <div className="flex gap-3">
        <Input id="item" placeholder="例如：計程車、文具" />
        <Button>新增</Button>
      </div>
    </div>
  )
}
