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
      <head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
      </head>
      <body
        className={cn(
          hanken.className,
          "md:text-lg w-full h-full bg-background-grid bg-right-top bg-no-repeat	"
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
