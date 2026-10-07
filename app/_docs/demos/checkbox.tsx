import { Checkbox } from "@/registry/winlab/ui/checkbox"
import { Label } from "@/registry/winlab/ui/label"

export function Demo() {
  return (
    <div className="flex flex-col gap-3">
      <Label>
        <Checkbox defaultChecked />
        記住我的選擇
      </Label>
      <Label>
        <Checkbox />
        同時寄通知給簽核人
      </Label>
    </div>
  )
}
