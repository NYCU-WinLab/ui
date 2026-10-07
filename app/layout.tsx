import type { Metadata } from "next"
import {
  Inter,
  JetBrains_Mono,
  Noto_Sans_JP,
  Noto_Sans_TC,
} from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

// Same fonts and variables as the registry's font items; the stack order
// (Inter, then Noto Sans JP, then Noto Sans TC) lives in globals.css.
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
})
const notoSansTc = Noto_Sans_TC({
  subsets: ["latin"],
  variable: "--font-noto-sans-tc",
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "WinLab UI",
  description: "WinLab 設計系統，以 shadcn registry 發佈。",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="zh-TW"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        inter.variable,
        notoSansJp.variable,
        notoSansTc.variable,
        jetbrainsMono.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
