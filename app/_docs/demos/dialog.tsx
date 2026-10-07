"use client"

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

export function Demo() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        新增項目
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>新增項目</DialogTitle>
          <DialogDescription>簽核人會連同收據一起看到。</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <Label htmlFor="dialog-item">項目</Label>
          <Input id="dialog-item" placeholder="例如：計程車、文具" />
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>取消</DialogClose>
          <Button>新增</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
