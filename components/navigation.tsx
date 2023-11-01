"use client"

import { basement } from "@/fonts"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { IoClose, IoMenu } from "react-icons/io5"

const links = [
  {
    label: "Home",
    url: "/",
    external: false,
  },
  {
    label: "Research",
    url: "/research",
    external: false,
  },
  {
    label: "Community",
    url: "https://ludogranger.substack.com/p/leadbay-manifesto",
    external: true,
  },
  {
    label: "Career",
    url: "https://changeable-tick-30e.notion.site/Leadbay-Career-0b3a4b7743cd4eeb9865f18ee16cddab?pvs=4",
    badge: "3",
    external: true,
  },
]

const Navigation = () => {
  const pathname = usePathname()

  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      <nav className='flex flex-col xl:flex-row gap-10 items-center'>
        <ul className='gap-4 xl:gap-10 xl:flex hidden'>
          {links.slice(1, 4).map((link) => (
            <li key={link.url}>
              <Link
                onClick={handleMenuClick}
                className={cn("hover:text-gray-700", link.badge && "relative")}
                href={link.url}
                target={link.external ? "_blank" : "_self"}
                rel={link.external ? "noopener noreferrer" : ""}
              >
                {link.label}
                {link.badge ? (
                  <span className='absolute -top-1 -right-6 rounded-full bg-black h-5 w-5 p-0.5 text-center text-white text-xs group-hover:bg-gray-700'>
                    {link.badge}
                  </span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav className='flex flex-col sm:flex-row gap-10 items-center'>
        <div className='w-[240px] hidden sm:block' />

        <button className='z-20' onClick={handleMenuClick}>
          <motion.div
            key={JSON.stringify(menuOpen)}
            animate={{ transform: "rotate(0)" }}
            initial={{ transform: "rotate(-360deg)" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {menuOpen ? (
              <IoClose className='xl:hidden block text-4xl' />
            ) : (
              <IoMenu className='xl:hidden block text-4xl' />
            )}
          </motion.div>
        </button>

        {menuOpen ? (
          <motion.div
            className='z-10 bg-white/70 w-screen h-[calc(100vh-48px)] mt-[36px] absolute inset-0 backdrop-blur-xl'
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ul className='flex text-center flex-col justify-center text-5xl h-full gap-16 p-12 max-w-sm m-auto'>
              {links.map((link) => (
                <li key={link.url}>
                  <Link
                    className={cn(
                      basement.className,
                      "hover:text-gray-700",
                      link.badge && "relative"
                    )}
                    href={link.url}
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noopener noreferrer" : ""}
                  >
                    {link.label}
                    {link.badge ? (
                      <span className='absolute top-2 -right-9 rounded-full bg-black h-8 w-8 p-1 text-center text-white text-base group-hover:bg-gray-700 font-bold'>
                        {link.badge}
                      </span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </nav>
    </>
  )
}

export default Navigation
