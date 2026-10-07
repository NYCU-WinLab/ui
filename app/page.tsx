import { PlusIcon } from "lucide-react"

import { ComboboxDemo } from "@/app/_components/combobox-demo"
import { MenuDemo } from "@/app/_components/menu-demo"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/registry/winlab/ui/alert-dialog"
import { Badge } from "@/registry/winlab/ui/badge"
import { Button } from "@/registry/winlab/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/winlab/ui/dialog"
import { Input } from "@/registry/winlab/ui/input"
import { Label } from "@/registry/winlab/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/winlab/ui/select"
import { Skeleton } from "@/registry/winlab/ui/skeleton"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/winlab/ui/table"
import { Textarea } from "@/registry/winlab/ui/textarea"

const categories = [
  { value: "travel", label: "交通" },
  { value: "meals", label: "餐費" },
  { value: "equipment", label: "設備" },
]

const receipts = [
  { date: "11/03", item: "計程車到竹北", amount: "285" },
  { date: "11/05", item: "便當 12 份", amount: "1,320" },
  { date: "11/07", item: "HDMI 轉接頭", amount: "459" },
]

const swatches = [
  { name: "primary", className: "bg-primary text-primary-foreground" },
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
          WinLab 設計系統，以 shadcn registry 發佈。
        </p>
      </header>

      <section className="flex flex-col gap-6">
        <h2 className="font-semibold">開始使用</h2>
        <pre className="overflow-x-auto rounded-control bg-muted p-4 font-mono text-body">
          npx shadcn@latest init https://ui.winlab.tw/r/base.json
        </pre>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="font-semibold">色彩</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {swatches.map((swatch) => (
            <div
              key={swatch.name}
              className={`flex h-20 items-end rounded-control p-3 text-body ${swatch.className}`}
            >
              {swatch.name}
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="font-semibold">按鈕</h2>
        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button size="icon" variant="outline" aria-label="新增">
            <PlusIcon />
          </Button>
          <MenuDemo />
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="font-semibold">徽章</h2>
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="muted">Muted</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="success">已核准</Badge>
          <Badge variant="warning">待簽核</Badge>
          <Badge variant="destructive">已退回</Badge>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="font-semibold">表單</h2>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Label htmlFor="item">項目</Label>
            <div className="flex gap-3">
              <Input id="item" placeholder="例如：計程車、文具" />
              <Button>新增</Button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label>類別</Label>
            <Select items={categories}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="選擇類別" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label>與會者</Label>
            <ComboboxDemo />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="note">備註</Label>
            <Textarea id="note" placeholder="想讓簽核人知道的事" />
            <p className="text-muted-foreground">簽核人會連同收據一起看到。</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="font-semibold">表格</h2>
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
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="font-semibold">對話框</h2>
        <div className="flex flex-wrap gap-3">
          <Dialog>
            <DialogTrigger render={<Button variant="outline" />}>
              新增項目
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>新增項目</DialogTitle>
                <DialogDescription>
                  簽核人會連同收據一起看到。
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-2">
                <Label htmlFor="dialog-item">項目</Label>
                <Input id="dialog-item" placeholder="例如：計程車、文具" />
              </div>
              <DialogFooter>
                <DialogClose render={<Button variant="outline" />}>
                  取消
                </DialogClose>
                <Button>新增</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <AlertDialog>
            <AlertDialogTrigger render={<Button variant="destructive" />}>
              刪除
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>刪除這張收據？</AlertDialogTitle>
                <AlertDialogDescription>
                  簽核人將看不到這張收據，刪除後無法復原。
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>取消</AlertDialogCancel>
                <AlertDialogAction variant="destructive">
                  刪除
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="font-semibold">載入中</h2>
        <div className="flex flex-col gap-2">
          <Skeleton className="h-6 w-1/2" />
          <Skeleton className="h-10 w-full" />
        </div>
      </section>

      <footer className="text-body text-muted-foreground">
        按 <kbd className="font-mono">d</kbd> 切換深色模式。
      </footer>
    </main>
  )
}
