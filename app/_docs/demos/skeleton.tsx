import { Skeleton } from "@/registry/winlab/ui/skeleton"

export function Demo() {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton className="h-6 w-1/2" />
      <Skeleton className="h-10 w-full" />
    </div>
  )
}
