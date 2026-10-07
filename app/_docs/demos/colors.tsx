const swatches = [
  { name: "primary", className: "bg-primary text-primary-foreground" },
  { name: "muted", className: "bg-muted text-muted-foreground" },
  { name: "destructive", className: "bg-destructive/10 text-destructive" },
  { name: "success", className: "bg-success/10 text-success" },
  { name: "warning", className: "bg-warning/10 text-warning" },
]

export function Demo() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
      {swatches.map((swatch) => (
        <div
          key={swatch.name}
          className={`flex h-20 items-end rounded-control p-3 ${swatch.className}`}
        >
          {swatch.name}
        </div>
      ))}
    </div>
  )
}
