import Link from "next/link"

import { docs, groups } from "@/app/_docs/docs"
import { SiteShell } from "@/app/_docs/site-shell"

export default function Page() {
  return (
    <SiteShell>
      <div className="flex flex-col gap-12">
        <header className="flex flex-col gap-2">
          <h1 className="text-title font-medium">WinLab UI</h1>
          <p className="text-muted-foreground">
            WinLab 設計系統，以 shadcn registry 發佈。
          </p>
        </header>

        <section className="flex flex-col gap-6">
          <h2 className="font-semibold">開始使用</h2>
          <pre className="overflow-x-auto rounded-control bg-muted p-4 font-mono">
            {[
              "npx create-next-app@latest my-app",
              "cd my-app",
              "npx shadcn@latest init https://ui.winlab.tw/r/base.json",
              "npx shadcn@latest add @winlab/button",
            ].join("\n")}
          </pre>
        </section>

        {groups.map((group) => (
          <section key={group} className="flex flex-col gap-6">
            <h2 className="font-semibold">{group}</h2>
            <ul className="flex flex-col">
              {docs
                .filter((doc) => doc.group === group)
                .map((doc) => (
                  <li key={doc.slug} className="border-b border-border">
                    <Link
                      href={`/${doc.slug}`}
                      className="flex flex-col gap-1 py-4 transition-colors duration-state hover:text-muted-foreground sm:flex-row sm:gap-6"
                    >
                      <span className="font-medium sm:w-40 sm:shrink-0">
                        {doc.title}
                      </span>
                      <span className="text-muted-foreground">
                        {doc.description}
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </div>
    </SiteShell>
  )
}
