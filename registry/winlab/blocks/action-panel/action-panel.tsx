"use client"

import * as React from "react"
import { cn } from "cn"

type ActionPanelProps = {
  /** The verb: "開門". */
  label: string
  /** Shown while onAction runs; defaults to the verb + "中…". */
  pendingLabel?: string
  /** Shown for a moment after it worked: "已開門". */
  doneLabel: string
  /** How long doneLabel stays before the button is ready again. */
  resetAfter?: number
  icon?: React.ReactNode
  /** Why it cannot be pressed now, said under the button: "門禁離線". */
  disabledReason?: string
  /** Resolve when it worked; throw to go back to ready (report the error
   * yourself, in a toast). */
  onAction: () => Promise<void>
}

// A page whose whole job is one action, such as opening the lab door: one
// large round button in app-shell's spotlight layout. It locks while the
// action runs, turns success for a moment when it worked, then is ready
// again.
function ActionPanel({
  label,
  pendingLabel = `${label}中…`,
  doneLabel,
  resetAfter = 3000,
  icon,
  disabledReason,
  onAction,
}: ActionPanelProps) {
  const [phase, setPhase] = React.useState<"ready" | "pending" | "done">(
    "ready"
  )

  React.useEffect(() => {
    if (phase !== "done") return
    const id = setTimeout(() => setPhase("ready"), resetAfter)
    return () => clearTimeout(id)
  }, [phase, resetAfter])

  async function act() {
    setPhase("pending")
    try {
      await onAction()
      setPhase("done")
    } catch (error) {
      console.error(error)
      setPhase("ready")
    }
  }

  return (
    <div data-slot="action-panel" className="flex flex-col items-center gap-6">
      <button
        type="button"
        disabled={Boolean(disabledReason) || phase !== "ready"}
        onClick={act}
        aria-live="polite"
        data-phase={phase}
        className={cn(
          "flex size-48 flex-col items-center justify-center gap-3 rounded-full bg-primary font-medium text-primary-foreground transition duration-state outline-none select-none hover:bg-primary/90 focus-visible:ring-3 focus-visible:ring-primary/50 active:scale-95 disabled:pointer-events-none data-[phase=done]:bg-success data-[phase=pending]:opacity-70 motion-reduce:active:scale-100 [&_svg]:size-12",
          disabledReason && "bg-muted text-muted-foreground"
        )}
      >
        {icon}
        {/* text-title on its own element: cn would drop it next to a text color */}
        <span className="text-title">
          {phase === "pending"
            ? pendingLabel
            : phase === "done"
              ? doneLabel
              : label}
        </span>
      </button>
      {disabledReason && (
        <p className="text-muted-foreground">{disabledReason}</p>
      )}
    </div>
  )
}

export { ActionPanel }
