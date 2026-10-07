"use client"

import { ChevronDownIcon, CopyIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@/registry/winlab/ui/avatar"
import { Button } from "@/registry/winlab/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/winlab/ui/collapsible"
import { Separator } from "@/registry/winlab/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/winlab/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/winlab/ui/tooltip"

export function TabsDemo() {
  return (
    <Tabs defaultValue="summary">
      <TabsList>
        <TabsTrigger value="summary">概要</TabsTrigger>
        <TabsTrigger value="items">明細</TabsTrigger>
        <TabsTrigger value="history">紀錄</TabsTrigger>
      </TabsList>
      <TabsContent value="summary">本月 3 筆待簽核，共 NT$ 2,064。</TabsContent>
      <TabsContent value="items">計程車、便當、HDMI 轉接頭。</TabsContent>
      <TabsContent value="history">11/07 陳怡君送出申請。</TabsContent>
    </Tabs>
  )
}

export function PeopleDemo() {
  return (
    <TooltipProvider>
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>陳</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-medium">陳怡君</span>
            <span className="text-muted-foreground">碩一</span>
          </div>
          <Tooltip>
            <TooltipTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="複製信箱"
                  className="ml-auto"
                />
              }
            >
              <CopyIcon />
            </TooltipTrigger>
            <TooltipContent>複製信箱</TooltipContent>
          </Tooltip>
        </div>
        <Separator />
        <Collapsible className="flex flex-col gap-3">
          <CollapsibleTrigger
            render={
              <Button
                variant="ghost"
                className="w-fit px-0 hover:bg-transparent"
              />
            }
          >
            更多資訊
            <ChevronDownIcon />
          </CollapsibleTrigger>
          <CollapsibleContent className="text-muted-foreground">
            研究方向：毫米波通訊。座位：B09。
          </CollapsibleContent>
        </Collapsible>
      </div>
    </TooltipProvider>
  )
}
