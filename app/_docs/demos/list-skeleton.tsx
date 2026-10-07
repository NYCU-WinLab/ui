import {
  ListSkeleton,
  TableSkeleton,
} from "@/registry/winlab/blocks/list-skeleton/list-skeleton"
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/winlab/ui/table"

export function Demo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-12">
      <ListSkeleton rows={3} />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>日期</TableHead>
            <TableHead>項目</TableHead>
            <TableHead className="text-right">金額</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableSkeleton rows={3} columns={3} />
        </TableBody>
      </Table>
    </div>
  )
}
