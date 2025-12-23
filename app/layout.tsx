import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { GeistSans, GeistMono } from 'geist/font';


export const metadata: Metadata = {
  title: "Thu Hậu Handwriting - Tranh Thư Pháp Thủ Công",
  description:
    "Thu Hậu Handwriting - Dịch vụ tranh thư pháp, bao lì xì, thiệp cưới, và các sản phẩm handwriting tùy chỉnh. Viết thư pháp thủ công với tình yêu.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
