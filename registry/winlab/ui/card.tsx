import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cn } from "@/registry/winlab/lib/utils"

// One of a grid of equal things a member acts on one at a time, such as the
// ports of a switch. The only frame on layer 1: a border and control corners,
// no fill and no shadow. The current card (aria-current) gets the foreground
// border. Render it as the link or menu trigger that opens the thing.
function Card({
  className,
  render,
  ...props
}: useRender.ComponentProps<"div">) {
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        className: cn(
          "block min-w-0 overflow-hidden rounded-control border border-border p-3 text-left text-body transition-colors duration-state outline-none hover:border-muted-foreground focus-visible:border-foreground aria-[current]:border-foreground",
          className
        ),
      },
      props
    ),
    render,
    state: { slot: "card" },
  })
}

export { Card }
