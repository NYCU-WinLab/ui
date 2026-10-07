import { Input } from "@/registry/winlab/ui/input"
import { Label } from "@/registry/winlab/ui/label"

export function Demo() {
  return (
    <div className="flex w-full flex-col gap-2">
      <Label htmlFor="amount">金額</Label>
      <Input id="amount" inputMode="numeric" placeholder="NT$" />
    </div>
  )
}
