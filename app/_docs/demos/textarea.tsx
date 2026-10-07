import { Label } from "@/registry/winlab/ui/label"
import { Textarea } from "@/registry/winlab/ui/textarea"

export function Demo() {
  return (
    <div className="flex w-full flex-col gap-2">
      <Label htmlFor="note">備註</Label>
      <Textarea id="note" placeholder="想讓簽核人知道的事" />
    </div>
  )
}
