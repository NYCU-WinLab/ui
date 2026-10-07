// Every page of the site documents one item. Order here is the order on the
// home page.
export type Doc = {
  group: "基礎" | "版面" | "區塊" | "元件"
  slug: string
  title: string
  description: string
  /** Registry item to install, if the page is about one. */
  item?: string
}

export const docs: Doc[] = [
  {
    group: "基礎",
    slug: "colors",
    title: "色彩",
    description: "12 個色票：主色群青、中性灰與 3 種狀態色。",
  },
  {
    group: "版面",
    slug: "app-shell",
    title: "四角版面",
    description:
      "每個 WinLab app 的四個角，預設是麵包屑、導覽、使用者與版本、版權，也可以換成別的內容。",
    item: "app-shell",
  },
  {
    group: "區塊",
    slug: "confirm-dialog",
    title: "確認對話框",
    description: "執行前先確認，執行中鎖住按鈕，完成才關閉。",
    item: "confirm-dialog",
  },
  {
    group: "區塊",
    slug: "form-dialog",
    title: "表單對話框",
    description: "短表單叫出在頁面上方，送出中鎖住欄位，完成才關閉。",
    item: "form-dialog",
  },
  {
    group: "區塊",
    slug: "empty-state",
    title: "空狀態",
    description: "清單沒有資料或搜尋沒有結果時，統一的一句話與下一步。",
    item: "empty-state",
  },
  {
    group: "區塊",
    slug: "page-header",
    title: "頁首",
    description: "頁面標題、一句說明，與這頁的動作按鈕。",
    item: "page-header",
  },
  {
    group: "元件",
    slug: "button",
    title: "按鈕",
    description: "4 種變體，文字與圖示按鈕都是 40px 高。",
    item: "button",
  },
  {
    group: "元件",
    slug: "badge",
    title: "徽章",
    description: "狀態標籤，含成功、警告、錯誤 3 種狀態色。",
    item: "badge",
  },
  {
    group: "元件",
    slug: "input",
    title: "輸入框",
    description: "單行輸入，跟按鈕同高，可並排。",
    item: "input",
  },
  {
    group: "元件",
    slug: "textarea",
    title: "多行輸入框",
    description: "隨內容長高的多行輸入。",
    item: "textarea",
  },
  {
    group: "元件",
    slug: "label",
    title: "欄位名稱",
    description: "表單欄位的名稱，點了會聚焦對應的欄位。",
    item: "label",
  },
  {
    group: "元件",
    slug: "select",
    title: "下拉選單",
    description: "從固定選項中選一個。",
    item: "select",
  },
  {
    group: "元件",
    slug: "combobox",
    title: "下拉搜尋選單",
    description: "選項很多時可以搜尋，單選或多選都行。",
    item: "combobox",
  },
  {
    group: "元件",
    slug: "checkbox",
    title: "勾選框",
    description: "圓形勾選框，可以多選。",
    item: "checkbox",
  },
  {
    group: "元件",
    slug: "switch",
    title: "開關",
    description: "立即生效的開或關。",
    item: "switch",
  },
  {
    group: "元件",
    slug: "table",
    title: "表格",
    description: "資料列表，數字欄靠右對齊。",
    item: "table",
  },
  {
    group: "元件",
    slug: "dialog",
    title: "對話框",
    description: "短表單或細節，叫出在頁面上方。",
    item: "dialog",
  },
  {
    group: "元件",
    slug: "alert-dialog",
    title: "警示對話框",
    description: "確認對話框的底層元件：標題、說明、取消與一個動作。",
    item: "alert-dialog",
  },
  {
    group: "元件",
    slug: "popover",
    title: "浮動面板",
    description: "錨定在按鈕旁的小面板。",
    item: "popover",
  },
  {
    group: "元件",
    slug: "command",
    title: "指令清單",
    description: "可搜尋的清單，下拉搜尋選單的內容。",
    item: "command",
  },
  {
    group: "元件",
    slug: "dropdown-menu",
    title: "動作選單",
    description: "一列動作，可以分組和放子選單。",
    item: "dropdown-menu",
  },
  {
    group: "元件",
    slug: "tabs",
    title: "分頁",
    description: "同一頁內切換幾個區塊。",
    item: "tabs",
  },
  {
    group: "元件",
    slug: "avatar",
    title: "頭像",
    description: "成員頭像，沒有圖時顯示名字的第一個字。",
    item: "avatar",
  },
  {
    group: "元件",
    slug: "tooltip",
    title: "提示",
    description: "滑過圖示時補充說明。",
    item: "tooltip",
  },
  {
    group: "元件",
    slug: "separator",
    title: "分隔線",
    description: "水平或垂直的細線。",
    item: "separator",
  },
  {
    group: "元件",
    slug: "collapsible",
    title: "摺疊區塊",
    description: "可以展開和收合的內容。",
    item: "collapsible",
  },
  {
    group: "元件",
    slug: "skeleton",
    title: "載入骨架",
    description: "資料載入前的佔位形狀。",
    item: "skeleton",
  },
  {
    group: "元件",
    slug: "sonner",
    title: "通知",
    description: "從角落跳出、幾秒後消失的通知。",
    item: "sonner",
  },
]

export const groups = ["基礎", "版面", "區塊", "元件"] as const
