import type { ComponentType } from "react"

import { Demo as Colors } from "@/app/_docs/demos/colors"
import { Demo as AppShell } from "@/app/_docs/demos/app-shell"
import { Demo as ConfirmDialog } from "@/app/_docs/demos/confirm-dialog"
import { Demo as FormDialogDemo } from "@/app/_docs/demos/form-dialog"
import { Demo as EmptyStateDemo } from "@/app/_docs/demos/empty-state"
import { Demo as PageHeaderDemo } from "@/app/_docs/demos/page-header"
import { Demo as ListSkeletonDemo } from "@/app/_docs/demos/list-skeleton"
import { Demo as MemberComboboxDemo } from "@/app/_docs/demos/member-combobox"
import { Demo as FieldListDemo } from "@/app/_docs/demos/field-list"
import { Demo as StatusPageDemo } from "@/app/_docs/demos/status-page"
import { Demo as DatePickerDemo } from "@/app/_docs/demos/date-picker"
import { Demo as Wide } from "@/app/_docs/demos/wide"
import { Demo as ActionPanelDemo } from "@/app/_docs/demos/action-panel"
import { Demo as FileUploadDemo } from "@/app/_docs/demos/file-upload"
import { Demo as Button } from "@/app/_docs/demos/button"
import { Demo as Badge } from "@/app/_docs/demos/badge"
import { Demo as Input } from "@/app/_docs/demos/input"
import { Demo as Textarea } from "@/app/_docs/demos/textarea"
import { Demo as Label } from "@/app/_docs/demos/label"
import { Demo as Select } from "@/app/_docs/demos/select"
import { Demo as Combobox } from "@/app/_docs/demos/combobox"
import { Demo as Calendar } from "@/app/_docs/demos/calendar"
import { Demo as Attachment } from "@/app/_docs/demos/attachment"
import { Demo as Checkbox } from "@/app/_docs/demos/checkbox"
import { Demo as Switch } from "@/app/_docs/demos/switch"
import { Demo as Table } from "@/app/_docs/demos/table"
import { Demo as Dialog } from "@/app/_docs/demos/dialog"
import { Demo as AlertDialog } from "@/app/_docs/demos/alert-dialog"
import { Demo as Popover } from "@/app/_docs/demos/popover"
import { Demo as Command } from "@/app/_docs/demos/command"
import { Demo as DropdownMenu } from "@/app/_docs/demos/dropdown-menu"
import { Demo as Tabs } from "@/app/_docs/demos/tabs"
import { Demo as Avatar } from "@/app/_docs/demos/avatar"
import { Demo as Tooltip } from "@/app/_docs/demos/tooltip"
import { Demo as Separator } from "@/app/_docs/demos/separator"
import { Demo as Collapsible } from "@/app/_docs/demos/collapsible"
import { Demo as Skeleton } from "@/app/_docs/demos/skeleton"
import { Demo as Sonner } from "@/app/_docs/demos/sonner"
import { Demo as FocusDemo } from "@/app/_docs/demos/focus"
import { Demo as AvatarStackDemo } from "@/app/_docs/demos/avatar-stack"
import { Demo as CountdownDemo } from "@/app/_docs/demos/countdown"
import { Demo as ExpandRowDemo } from "@/app/_docs/demos/expand-row"
import { Demo as Chart } from "@/app/_docs/demos/chart"
import { Demo as NumberTicker } from "@/app/_docs/demos/number-ticker"

export const demos: Record<string, ComponentType> = {
  colors: Colors,
  "app-shell": AppShell,
  wide: Wide,
  "confirm-dialog": ConfirmDialog,
  "form-dialog": FormDialogDemo,
  "empty-state": EmptyStateDemo,
  "page-header": PageHeaderDemo,
  "list-skeleton": ListSkeletonDemo,
  "member-combobox": MemberComboboxDemo,
  "field-list": FieldListDemo,
  "status-page": StatusPageDemo,
  "date-picker": DatePickerDemo,
  "action-panel": ActionPanelDemo,
  "file-upload": FileUploadDemo,
  button: Button,
  badge: Badge,
  input: Input,
  textarea: Textarea,
  label: Label,
  select: Select,
  combobox: Combobox,
  calendar: Calendar,
  attachment: Attachment,
  checkbox: Checkbox,
  switch: Switch,
  table: Table,
  dialog: Dialog,
  "alert-dialog": AlertDialog,
  popover: Popover,
  command: Command,
  "dropdown-menu": DropdownMenu,
  tabs: Tabs,
  avatar: Avatar,
  tooltip: Tooltip,
  separator: Separator,
  collapsible: Collapsible,
  skeleton: Skeleton,
  sonner: Sonner,
  focus: FocusDemo,
  "avatar-stack": AvatarStackDemo,
  countdown: CountdownDemo,
  "expand-row": ExpandRowDemo,
  "number-ticker": NumberTicker,
  chart: Chart,
}
