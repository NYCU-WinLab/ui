import { PlusIcon } from "lucide-react"

import { ComboboxDemo } from "@/app/_components/combobox-demo"

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
  { value: "travel", label: "Travel" },
  { value: "meals", label: "Meals" },
  { value: "equipment", label: "Equipment" },
]

const receipts = [
  { date: "11/03", item: "Taxi to Zhubei", amount: "285" },
  { date: "11/05", item: "Lunch boxes, 12", amount: "1,320" },
  { date: "11/07", item: "HDMI adapter", amount: "459" },
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
          The WinLab design system, distributed as a shadcn registry.
        </p>
      </header>

      <section className="flex flex-col gap-6">
        <h2 className="font-semibold">Start a project</h2>
        <pre className="overflow-x-auto rounded-control bg-muted p-4 font-mono text-body">
          npx shadcn@latest init https://ui.winlab.tw/r/base.json
        </pre>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="font-semibold">Colors</h2>
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
        <h2 className="font-semibold">Buttons</h2>
        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button size="icon" variant="outline" aria-label="Add">
            <PlusIcon />
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="font-semibold">Badges</h2>
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="muted">Muted</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="success">Approved</Badge>
          <Badge variant="warning">Pending</Badge>
          <Badge variant="destructive">Rejected</Badge>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="font-semibold">Form</h2>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Label htmlFor="item">Item</Label>
            <div className="flex gap-3">
              <Input id="item" placeholder="Taxi, stationery" />
              <Button>Add</Button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label>Category</Label>
            <Select items={categories}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose a category" />
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
            <Label>Attendee</Label>
            <ComboboxDemo />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="note">Note</Label>
            <Textarea
              id="note"
              placeholder="Anything the approver should know"
            />
            <p className="text-muted-foreground">
              Shown to the approver with the receipt.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="font-semibold">Table</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Item</TableHead>
              <TableHead className="text-right">Amount</TableHead>
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
        <h2 className="font-semibold">Dialogs</h2>
        <div className="flex flex-wrap gap-3">
          <Dialog>
            <DialogTrigger render={<Button variant="outline" />}>
              Add item
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add item</DialogTitle>
                <DialogDescription>
                  The approver sees this with the receipt.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-2">
                <Label htmlFor="dialog-item">Item</Label>
                <Input id="dialog-item" placeholder="Taxi, stationery" />
              </div>
              <DialogFooter>
                <DialogClose render={<Button variant="outline" />}>
                  Cancel
                </DialogClose>
                <Button>Add</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <AlertDialog>
            <AlertDialogTrigger render={<Button variant="destructive" />}>
              Delete
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete this receipt?</AlertDialogTitle>
                <AlertDialogDescription>
                  The approver will no longer see it. This cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction variant="destructive">
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="font-semibold">Loading</h2>
        <div className="flex flex-col gap-2">
          <Skeleton className="h-6 w-1/2" />
          <Skeleton className="h-10 w-full" />
        </div>
      </section>

      <footer className="text-body text-muted-foreground">
        Press <kbd className="font-mono">d</kbd> to toggle dark mode.
      </footer>
    </main>
  )
}
