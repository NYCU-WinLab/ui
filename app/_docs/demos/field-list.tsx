import {
  FieldList,
  FieldRow,
} from "@/registry/winlab/blocks/field-list/field-list"
import { Badge } from "@/registry/winlab/ui/badge"

export function Demo() {
  return (
    <div className="w-full max-w-md">
      <FieldList>
        <FieldRow label="狀態">
          <Badge variant="warning">審核中</Badge>
        </FieldRow>
        <FieldRow label="項目">文具</FieldRow>
        <FieldRow label="金額">
          <span className="tabular-nums">NT$ 1,280</span>
        </FieldRow>
        <FieldRow label="上傳時間">2026-10-07 14:30</FieldRow>
      </FieldList>
    </div>
  )
}
