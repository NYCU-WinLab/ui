"use client"

import * as React from "react"

import {
  EmptyState,
  TableEmpty,
} from "@/registry/winlab/blocks/empty-state/empty-state"
import { Button } from "@/registry/winlab/ui/button"
import { Input } from "@/registry/winlab/ui/input"
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/winlab/ui/table"

export function Demo() {
  const [query, setQuery] = React.useState("")

  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Input
        aria-label="搜尋收據"
        placeholder="輸入文字看找不到的樣子"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <EmptyState
        noun="收據"
        query={query}
        onClearQuery={() => setQuery("")}
        action={<Button>上傳收據</Button>}
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>日期</TableHead>
            <TableHead>項目</TableHead>
            <TableHead className="text-right">金額</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableEmpty noun="支出" query={query} colSpan={3} />
        </TableBody>
      </Table>
    </div>
  )
}
