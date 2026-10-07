"use client"

import * as React from "react"

import {
  MemberCombobox,
  type Member,
} from "@/registry/winlab/blocks/member-combobox/member-combobox"
import { Label } from "@/registry/winlab/ui/label"

const members: Member[] = [
  { id: "1", name: "實驗室助理", email: "assistant@winlab.tw" },
  { id: "2", name: "系統管理員", email: "admin@winlab.tw" },
  { id: "3", name: "會計", email: "accounting@winlab.tw" },
  { id: "4", name: "門禁管理", email: "door@winlab.tw" },
]

export function Demo() {
  const [signer, setSigner] = React.useState<string | null>(null)
  const [attendees, setAttendees] = React.useState<string[]>([])

  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <div className="flex flex-col gap-2">
        <Label htmlFor="signer">簽核人</Label>
        <MemberCombobox
          id="signer"
          members={members}
          value={signer}
          onValueChange={setSigner}
          className="w-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="attendees">與會者</Label>
        <MemberCombobox
          id="attendees"
          multiple
          members={members}
          value={attendees}
          onValueChange={setAttendees}
          className="w-full"
        />
      </div>
    </div>
  )
}
