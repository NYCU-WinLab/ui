"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/registry/winlab/ui/chart"

const data = [
  { month: "5 月", income: 12000, expense: 8400 },
  { month: "6 月", income: 6000, expense: 9100 },
  { month: "7 月", income: 15000, expense: 11800 },
  { month: "8 月", income: 3000, expense: 5200 },
  { month: "9 月", income: 9000, expense: 7600 },
]

const config = {
  income: { label: "收入", color: "success" },
  expense: { label: "支出", color: "destructive" },
} satisfies ChartConfig

const ntd = (value: number) => `NT$ ${value.toLocaleString("en-US")}`

export function Demo() {
  return (
    <ChartContainer config={config} className="h-64 w-full">
      <BarChart data={data} barGap={2}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <YAxis
          tickLine={false}
          axisLine={false}
          width={56}
          tickFormatter={(value: number) => `${value / 1000}k`}
        />
        <ChartTooltip
          content={<ChartTooltipContent formatValue={(value) => ntd(value)} />}
        />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar
          dataKey="income"
          fill="var(--color-income)"
          radius={[4, 4, 0, 0]}
        />
        <Bar
          dataKey="expense"
          fill="var(--color-expense)"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ChartContainer>
  )
}
