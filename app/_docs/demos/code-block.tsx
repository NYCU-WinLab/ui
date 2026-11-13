import { CodeBlock } from "@/registry/winlab/ui/code-block"

const token = `curl https://portal.winlab.tw/api/developers/oauth/token \\
  -u <client id>:<secret> \\
  -d grant_type=authorization_code \\
  -d code=<code> \\
  -d redirect_uri=<uri> \\
  -d code_verifier=<verifier>`

export function Demo() {
  return (
    <div className="flex w-full flex-col gap-4">
      <CodeBlock title="用 code 換 token" code={token} />
      <CodeBlock code="npx shadcn@latest add @winlab/code-block" />
    </div>
  )
}
