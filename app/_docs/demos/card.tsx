import { Card } from "@/registry/winlab/ui/card"

const ports = [
  { port: 1, state: "400G", rx: "392.4 Gb/s" },
  { port: 2, state: "400G", rx: "0 b/s" },
  { port: 3, state: "未啟用", rx: "0 b/s" },
  { port: 4, state: "未啟用", rx: "0 b/s" },
]

export function Demo() {
  return (
    <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
      {ports.map((p) => (
        <Card
          key={p.port}
          render={<a href={`#${p.port}`} />}
          aria-current={p.port === 1 ? "true" : undefined}
        >
          <div className="font-medium">{p.port}</div>
          <div className="text-muted-foreground">{p.state}</div>
          <div className="mt-2 tabular-nums">↓ {p.rx}</div>
        </Card>
      ))}
    </div>
  )
}
