import { Terminal, TerminalText } from "@/registry/winlab/ui/terminal"
import {
  Done,
  InputBox,
  McpCall,
  Prompt,
  Reply,
  Welcome,
} from "@/registry/winlab/blocks/claude-code/claude-code"

export function Demo() {
  return (
    <Terminal title="~/demo — claude" className="w-full">
      <Welcome />
      <Prompt>幫我開一台機器，叫 sandbox</Prompt>
      <McpCall server="plugin:infrastructure:carrel" done />
      <Reply
        lines={[
          <>
            sandbox 開好了：<TerminalText bold>Debian 13 minimal</TerminalText>
            ，1 vCPU、1 GiB RAM、10 GiB 硬碟。
          </>,
          <TerminalText key="ssh" tone="select">
            ssh sandbox.alice
          </TerminalText>,
        ]}
      />
      <Done verb="Baked" seconds={34} time="10:18 PM" />
      <InputBox />
    </Terminal>
  )
}
