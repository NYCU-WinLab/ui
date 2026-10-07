import { Button } from "@/components/ui/button"

const swatches = [
  { name: "primary", className: "bg-primary text-primary-foreground" },
  { name: "secondary", className: "bg-secondary text-secondary-foreground" },
  { name: "muted", className: "bg-muted text-muted-foreground" },
  { name: "destructive", className: "bg-destructive text-white" },
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
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
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
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </section>

      <footer className="text-body text-muted-foreground">
        Press <kbd className="font-mono">d</kbd> to toggle dark mode.
      </footer>
    </main>
  )
}
