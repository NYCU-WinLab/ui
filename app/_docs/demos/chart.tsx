"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  type ChartConfig,
  ChartContainer,
  primaryShades,
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

// Parts of one total: tokens per day, stacked by model.
// Keys become CSS variable names, so they cannot hold "." (qwen3.8):
// key each series by position and keep the name in its label.
const models = ["qwen3.8", "claude-sonnet", "qwen-image", "mineru"].map(
  (label, j) => ({ key: `m${j}`, label })
)
const usage = ["10/10", "10/11", "10/12", "10/13", "10/14"].map((day, i) => ({
  day,
  ...Object.fromEntries(
    models.map((model, j) => [
      model.key,
      ((i * 7 + j * 5) % 9) * 9 + 40 - j * 8,
    ])
  ),
}))
const usageConfig = Object.fromEntries(
  models.map((model, j) => [
    model.key,
    { label: model.label, color: primaryShades[j] },
  ])
) satisfies ChartConfig

export function Demo() {
  return (
    <div className="flex w-full flex-col gap-12">
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
            content={
              <ChartTooltipContent formatValue={(value) => ntd(value)} />
            }
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
      <ChartContainer config={usageConfig} className="h-64 w-full">
        <BarChart data={usage}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="day" tickLine={false} axisLine={false} />
          <YAxis
            tickLine={false}
            axisLine={false}
            width={56}
            tickFormatter={(value: number) => `${value}k`}
          />
          <ChartTooltip
            content={
              <ChartTooltipContent
                formatValue={(value) => `${value}k tokens`}
              />
            }
          />
          <ChartLegend content={<ChartLegendContent />} />
          {models.map((model, j) => (
            <Bar
              key={model.key}
              dataKey={model.key}
              stackId="tokens"
              fill={`var(--color-${model.key})`}
              radius={j === models.length - 1 ? [4, 4, 0, 0] : 0}
            />
          ))}
        </BarChart>
      </ChartContainer>
    </div>
  )
}
