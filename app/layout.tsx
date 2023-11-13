import type { Metadata } from "next"
import "./globals.css"

import { Header } from "@/components"
import { hanken } from "@/fonts"
import { cn } from "@/lib/utils"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const metadata: Metadata = {
  title: "Leadbay",
  description: "Leadbay empowers B2B sales reps with timely, contextual leads. Leadbay AI leverage internal and external datasets to support the the B2B sales reps to set their Ideal Customer Profile, supply their leads and predicct revenue growth.",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
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
          "md:text-lg w-full h-screen bg-background-grid bg-right-top bg-no-repeat",
          "flex flex-col justify-between min-h-screen"
        )}
      >
        <Header />

        <main className='flex-1 px-3 md:px-0'>{children}</main>

        {/* <Footer /> */}

        <ToastContainer />
      </body>
    </html>
  )
}
