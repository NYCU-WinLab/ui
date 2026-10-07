// All 12 color tokens, grouped by job. Each swatch is the token's own fill;
// the token name is read off the class.
const groups = [
  {
    name: "背景與文字",
    tokens: [
      { use: "頁面底色", swatch: "bg-background" },
      { use: "主要文字", swatch: "bg-foreground" },
    ],
  },
  {
    name: "主色",
    tokens: [
      { use: "主要動作、選取", swatch: "bg-primary" },
      {
        use: "主色上的文字",
        swatch: "bg-primary-foreground",
      },
    ],
  },
  {
    name: "中性",
    tokens: [
      { use: "中性底色、hover", swatch: "bg-muted" },
      {
        use: "次要文字、說明",
        swatch: "bg-muted-foreground",
      },
    ],
  },
  {
    name: "線條",
    tokens: [
      { use: "分隔線、浮層框線", swatch: "bg-border" },
      { use: "輸入框框線", swatch: "bg-input" },
      { use: "聚焦框", swatch: "bg-ring" },
    ],
  },
  {
    name: "狀態",
    tokens: [
      { use: "錯誤、刪除", swatch: "bg-destructive" },
      { use: "成功、已核准", swatch: "bg-success" },
      { use: "警告、待處理", swatch: "bg-warning" },
    ],
  },
]

export function Demo() {
  return (
    <div className="flex w-full flex-col gap-8">
      {groups.map((group) => (
        <div key={group.name} className="flex flex-col gap-2">
          <h3 className="font-semibold">{group.name}</h3>
          <ul className="flex flex-col">
            {group.tokens.map((t) => {
              const token = t.swatch.replace("bg-", "")
              return (
                <li
                  key={token}
                  className="flex items-center gap-4 border-b border-border py-3"
                >
                  <span
                    aria-hidden
                    className={`size-6 shrink-0 rounded-full ring-1 ring-border ${t.swatch}`}
                  />
                  <span className="font-mono">{token}</span>
                  <span className="ml-auto text-muted-foreground">{t.use}</span>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </div>
  )
}
