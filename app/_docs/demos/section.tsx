import { Section } from "@/registry/winlab/blocks/section/section"
import { Button } from "@/registry/winlab/ui/button"
import { Progress } from "@/registry/winlab/ui/progress"

export function Demo() {
  return (
    <div className="flex w-full max-w-2xl flex-col gap-12 text-left">
      <Section
        title="外部 API 額度"
        actions={<Button variant="outline">調整</Button>}
      >
        <p className="text-title font-medium tabular-nums">US$ 31.58</p>
        <Progress value={37} aria-label="已用額度" />
        <p className="text-muted-foreground tabular-nums">
          已用 US$ 18.42 / 50，11 月 1 日重置
        </p>
      </Section>
      <Section title="自架模型用量">
        <p className="text-muted-foreground">本月 3,902 次請求，不計費。</p>
      </Section>
    </div>
  )
}
