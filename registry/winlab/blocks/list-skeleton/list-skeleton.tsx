import { Skeleton } from "@/registry/winlab/ui/skeleton"
import { TableCell, TableRow } from "@/registry/winlab/ui/table"

// Show these only while a list has nothing to show yet (first load), not
// while it refetches: data on screen stays on screen.

// Rows the shape of a list: a title line over a shorter detail line, split
// by the same dividers as the real rows.
function ListSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div data-slot="list-skeleton" aria-busy className="flex flex-col">
      {Array.from({ length: rows }, (_, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 border-b border-border py-4"
        >
          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-6 w-1/2" />
        </div>
      ))}
    </div>
  )
}

// Table body rows while a table loads; columns is the header's count.
function TableSkeleton({
  rows = 5,
  columns,
}: {
  rows?: number
  columns: number
}) {
  return Array.from({ length: rows }, (_, row) => (
    <TableRow key={row} aria-busy className="hover:bg-transparent">
      {Array.from({ length: columns }, (_, column) => (
        <TableCell key={column}>
          <Skeleton className="h-6 w-full" />
        </TableCell>
      ))}
    </TableRow>
  ))
}

export { ListSkeleton, TableSkeleton }
