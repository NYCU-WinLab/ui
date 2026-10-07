import { Badge } from "@/registry/winlab/ui/badge"

export function Demo() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <Badge>Default</Badge>
      <Badge variant="muted">Muted</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="success">已核准</Badge>
      <Badge variant="warning">待簽核</Badge>
      <Badge variant="destructive">已退回</Badge>
    </div>
  )
}
