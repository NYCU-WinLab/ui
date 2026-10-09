"use client"

import { AvatarStack } from "@/registry/winlab/blocks/avatar-stack/avatar-stack"
import { Countdown } from "@/registry/winlab/blocks/countdown/countdown"
import {
  Focus,
  FocusHighlight,
  FocusLabel,
  FocusMeta,
  FocusTitle,
} from "@/registry/winlab/blocks/focus/focus"
import { PageHeader } from "@/registry/winlab/blocks/page-header/page-header"

const askers = [
  { id: "1", name: "博士生" },
  { id: "2", name: "碩士生" },
  { id: "3", name: "專題生" },
]

// Three days and a bit from whenever the page is opened.
const next = new Date(Date.now() + (3 * 1440 + 19 * 60 + 37) * 60 * 1000)

export function Demo() {
  return (
    <div className="flex w-full max-w-2xl flex-col gap-12 text-left">
      <PageHeader title="實驗室會議" />
      <Focus>
        <FocusLabel>下一場</FocusLabel>
        <FocusTitle>
          <FocusHighlight>
            <Countdown to={next} />
          </FocusHighlight>{" "}
          後，碩士生報告
        </FocusTitle>
        <p>Efficient Memory Management for LLM Serving (SOSP&apos;23)</p>
        <FocusMeta>
          <AvatarStack people={askers} />
          <span>提問</span>
          <span>EC 411　15:30</span>
        </FocusMeta>
      </Focus>
    </div>
  )
}
