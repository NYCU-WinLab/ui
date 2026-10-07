"use client"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/winlab/ui/tabs"

export function Demo() {
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
