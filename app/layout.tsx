import "./globals.css"
import type { Metadata } from "next"

import { hanken } from "@/fonts"
import { Header, Footer } from "@/components"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Leadbay",
  description: "🤘 Let's rock your sales!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='w-full h-full'>
      <body
        className={cn(
          hanken.className,
          "text-xl md:text-2xl w-full h-full bg-background-grid bg-right-top bg-no-repeat	"
        )}
      >
        <div className='min-h-full flex flex-col items-stretch'>
          <Header />
          {children}
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  )
}
