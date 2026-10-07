"use client"

import {
  FormDialog,
  FormField,
} from "@/registry/winlab/blocks/form-dialog/form-dialog"
import { Button } from "@/registry/winlab/ui/button"
import { Input } from "@/registry/winlab/ui/input"
import { Textarea } from "@/registry/winlab/ui/textarea"

const wait = () => new Promise<void>((resolve) => setTimeout(resolve, 1000))

export function Demo() {
  return (
    <FormDialog
      trigger={<Button>新增支出</Button>}
      title="新增支出"
      submitLabel="新增"
      onSubmit={wait}
    >
      <FormField label="項目" required>
        <Input name="item" />
      </FormField>
      <FormField label="金額" required>
        <Input name="amount" type="number" inputMode="numeric" />
      </FormField>
      <FormField label="備註（簽核人看得到）">
        <Textarea name="note" />
      </FormField>
    </FormDialog>
  )
}
