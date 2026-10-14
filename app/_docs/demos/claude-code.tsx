"use client"

import * as React from "react"

import { Terminal } from "@/registry/winlab/ui/terminal"
import {
  ClaudeText,
  Done,
  InputBox,
  McpCall,
  Prompt,
  Reply,
  Spinner,
  Welcome,
  spinnerVerb,
} from "@/registry/winlab/blocks/claude-code/claude-code"
import {
  typedAt,
  typingDuration,
  typingSteps,
} from "@/registry/winlab/lib/typing"

const PROMPT = "幫我開一台機器，叫 sandbox"
const ZHUYIN = {
  幫: "ㄅㄤ",
  我: "ㄨㄛˇ",
  開: "ㄎㄞ",
  一: "ㄧ",
  台: "ㄊㄞˊ",
  機: "ㄐㄧ",
  器: "ㄑㄧˋ",
  叫: "ㄐㄧㄠˋ",
}
const STEPS = typingSteps(PROMPT, { zhuyin: ZHUYIN })
const TYPED = typingDuration(STEPS) + 600

// A turn on a loop: the prompt typed with zhuyin, then Claude working with
// a new verb each time.
function Working() {
  const [turn, setTurn] = React.useState({ verb: "Thinking", start: 0 })
  const [now, setNow] = React.useState(0)
  React.useEffect(() => {
    const id = setInterval(() => {
      const t = performance.now()
      setNow(t)
      setTurn((turn) =>
        turn.start === 0 || t - turn.start > TYPED + 6000
          ? { verb: spinnerVerb(), start: t }
          : turn
      )
    }, 50)
    return () => clearInterval(id)
  }, [])
  const ms = Math.max(0, now - turn.start)
  const typing = ms < TYPED
  const { text, composing } = typedAt(STEPS, ms)
  const elapsed = (ms - TYPED) / 1000
  return (
    <Terminal title="~/demo — claude" className="w-full">
      {typing ? (
        <InputBox value={text} composing={composing} />
      ) : (
        <>
          <Prompt>{PROMPT}</Prompt>
          <Spinner
            verb={turn.verb}
            seconds={Math.floor(elapsed) + 1}
            tokens={Math.floor(elapsed * 60)}
            thinking={Math.floor(elapsed)}
          />
          <InputBox busy />
        </>
      )}
    </Terminal>
  )
}

export function Demo() {
  return (
    <div className="flex w-full flex-col gap-6">
      <Terminal title="~/demo — claude" className="w-full">
        <Welcome />
        <Prompt>幫我開一台機器，叫 sandbox</Prompt>
        <McpCall server="plugin:infrastructure:carrel" done />
        <Reply
          lines={[
            <>
              sandbox 開好了：
              <ClaudeText bold>Debian 13 minimal</ClaudeText>
              ，1 vCPU、1 GiB RAM、10 GiB 硬碟。
            </>,
            <ClaudeText key="ssh" tone="permission">
              ssh sandbox.alice
            </ClaudeText>,
          ]}
        />
        <Done seed="demo" seconds={34} time="10:18 PM" />
        <InputBox />
      </Terminal>
      <Working />
    </div>
  )
}
