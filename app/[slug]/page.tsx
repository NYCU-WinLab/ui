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
    <SiteShell
      page={{
        label: doc.title,
        href: `/${doc.slug}`,
        tip: doc.item ? `@winlab/${doc.item}` : doc.description,
      }}
      layout={doc.layout ?? "spotlight"}
    >
      <div className="flex w-full flex-col items-center gap-12">
        <header className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-title font-medium">{doc.title}</h1>
          <p className="text-muted-foreground">{doc.description}</p>
        </header>
        <div className="flex w-full justify-center">
          <Demo />
        </div>
        {doc.item && (
          <code className="font-mono text-muted-foreground">
            {`npx shadcn@latest add @winlab/${doc.item}`}
          </code>
        )}
      </div>
    </SiteShell>
  )
}
