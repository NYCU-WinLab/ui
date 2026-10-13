import {
  Terminal,
  TerminalLine,
  TerminalText,
} from "@/registry/winlab/ui/terminal"

export function Demo() {
  return (
    <Terminal title="~ — zsh" className="w-full">
      <TerminalLine>
        <TerminalText tone="success">~</TerminalText> ssh sandbox.alice
      </TerminalLine>
      <TerminalLine>
        <TerminalText tone="dim">
          Debian GNU/Linux 13，最後登入 10:18
        </TerminalText>
      </TerminalLine>
      <TerminalLine>
        alice@sandbox:~$ <TerminalText inverse> </TerminalText>
      </TerminalLine>
    </Terminal>
  )
}
