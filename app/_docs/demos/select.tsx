"use client"

import { Label } from "@/registry/winlab/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/winlab/ui/select"

const categories = [
  { value: "travel", label: "交通" },
  { value: "meals", label: "餐費" },
  { value: "equipment", label: "設備" },
]

export function Demo() {
  return (
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
  )
}
