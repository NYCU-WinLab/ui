import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { demos } from "@/app/_docs/demos"
import { docs } from "@/app/_docs/docs"
import { SiteShell } from "@/app/_docs/site-shell"

export const dynamicParams = false

export function generateStaticParams() {
  return docs.map((doc) => ({ slug: doc.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const doc = docs.find((d) => d.slug === slug)
  return doc
    ? { title: `${doc.title} · WinLab UI`, description: doc.description }
    : {}
}

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const doc = docs.find((d) => d.slug === slug)
  const Demo = demos[slug]
  if (!doc || !Demo) notFound()

  return (
    <SiteShell page={{ label: doc.title, href: `/${doc.slug}` }}>
      <div className="flex flex-col gap-12">
        <header className="flex flex-col gap-2">
          <h1 className="text-title font-medium">{doc.title}</h1>
          <p className="text-muted-foreground">{doc.description}</p>
        </header>

        {doc.item && (
          <section className="flex flex-col gap-6">
            <h2 className="font-semibold">安裝</h2>
            <pre className="overflow-x-auto rounded-control bg-muted p-4 font-mono">
              {`npx shadcn@latest add @winlab/${doc.item}`}
            </pre>
          </section>
        )}

        <section className="flex flex-col gap-6">
          <h2 className="font-semibold">範例</h2>
          <Demo />
        </section>
      </div>
    </SiteShell>
  )
}
