import { PlusIcon } from "lucide-react"

import { Badge } from "@/registry/winlab/ui/badge"
import { Button } from "@/registry/winlab/ui/button"
import { Input } from "@/registry/winlab/ui/input"
import { Label } from "@/registry/winlab/ui/label"
import { Skeleton } from "@/registry/winlab/ui/skeleton"
import { Textarea } from "@/registry/winlab/ui/textarea"

const swatches = [
  { name: "primary", className: "bg-primary text-primary-foreground" },
  { name: "secondary", className: "bg-secondary text-secondary-foreground" },
  { name: "muted", className: "bg-muted text-muted-foreground" },
  { name: "destructive", className: "bg-destructive/10 text-destructive" },
  { name: "success", className: "bg-success/10 text-success" },
  { name: "warning", className: "bg-warning/10 text-warning" },
]

export default function Page() {
  return (
    <main className="mx-auto flex min-h-svh max-w-2xl flex-col gap-10 px-6 py-16">
      <header className="flex flex-col gap-2">
        <h1 className="text-title font-medium">WinLab UI</h1>
        <p className="text-muted-foreground">
          The WinLab design system, distributed as a shadcn registry.
        </p>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="font-semibold">Start a project</h2>
        <pre className="overflow-x-auto rounded-lg bg-muted p-4 font-mono text-body">
          npx shadcn@latest init https://ui.winlab.tw/r/base.json
        </pre>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="font-semibold">Colors</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {swatches.map((swatch) => (
            <div
              key={swatch.name}
              className={`flex h-20 items-end rounded-lg p-3 text-body ${swatch.className}`}
            >
              {swatch.name}
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="font-semibold">Buttons</h2>
        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button size="icon" variant="outline" aria-label="Add">
            <PlusIcon />
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="font-semibold">Badges</h2>
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="success">Approved</Badge>
          <Badge variant="warning">Pending</Badge>
          <Badge variant="destructive">Rejected</Badge>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="font-semibold">Form</h2>
        <div className="flex flex-col gap-6 rounded-lg border border-border p-6">
          <div className="flex flex-col gap-2">
            <Label htmlFor="item">Item</Label>
            <div className="flex gap-3">
              <Input id="item" placeholder="Taxi, stationery" />
              <Button>Add</Button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="note">Note</Label>
            <Textarea
              id="note"
              placeholder="Anything the approver should know"
            />
            <p className="text-muted-foreground">
              Shown to the approver with the receipt.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="font-semibold">Loading</h2>
        <div className="flex flex-col gap-2">
          <Skeleton className="h-6 w-1/2" />
          <Skeleton className="h-10 w-full" />
        </div>
      </section>

      <footer className="text-body text-muted-foreground">
        Press <kbd className="font-mono">d</kbd> to toggle dark mode.
      </footer>
    </main>
  )
}
