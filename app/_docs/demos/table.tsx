import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/winlab/ui/table"

const receipts = [
  { date: "11/03", item: "計程車到竹北", amount: "285" },
  { date: "11/05", item: "便當 12 份", amount: "1,320" },
  { date: "11/07", item: "HDMI 轉接頭", amount: "459" },
]

export function Demo() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>日期</TableHead>
          <TableHead>項目</TableHead>
          <TableHead className="text-right">金額</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {receipts.map((receipt) => (
          <TableRow key={receipt.item}>
            <TableCell className="text-muted-foreground tabular-nums">
              {receipt.date}
            </TableCell>
            <TableCell>{receipt.item}</TableCell>
            <TableCell className="text-right tabular-nums">
              NT$ {receipt.amount}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
