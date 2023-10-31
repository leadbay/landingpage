"use client"

import { BurgerIcon } from "@/components"
import { cn } from "@/lib/utils"
import { useState } from "react"

const links = [
   {
     label: "Research",
     url: "/",
   },
  {
    label: "Community",
    url: "https://ludogranger.substack.com/p/leadbay-manifesto",
  },
  {
    label: "Career",
    url: "https://changeable-tick-30e.notion.site/Leadbay-Career-0b3a4b7743cd4eeb9865f18ee16cddab?pvs=4",
    badge: "3",
  },
]

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <nav className='flex flex-col xl:flex-row gap-10 items-center'>
        <ul className='gap-4 xl:gap-10 xl:flex hidden'>
          {links.map((link) => (
            <li key={link.url}>
              <a
                className={cn("hover:text-gray-700", link.badge && "relative")}
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'
              >
                {link.label}
                {link.badge ? (
                  <span className='absolute -top-1 -right-6 rounded-full bg-black h-5 w-5 p-0.5 text-center text-white text-xs group-hover:bg-gray-700'>
                    {link.badge}
                  </span>
                ) : null}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <nav className='flex flex-col sm:flex-row gap-10 items-center'>
        <div className='w-[240px] hidden sm:block' />

        <button className='z-20' onClick={handleMenuClick}>
          <BurgerIcon className='xl:hidden block' />
        </button>

        {menuOpen ? (
          <div className='z-10 bg-white w-screen h-screen absolute top-0 left-0'>
            <ul className='flex flex-col justify-center text-6xl h-full gap-8 p-12 max-w-sm m-auto'>
              {links.map((link) => (
                <li key={link.url}>
                  <a
                    className={cn(
                      "hover:text-gray-700",
                      link.badge && "relative"
                    )}
                    href={link.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {link.label}
                    {link.badge ? (
                      <span className='absolute top-2 -right-9 rounded-full bg-black h-8 w-8 p-1 text-center text-white text-base group-hover:bg-gray-700 font-bold'>
                        {link.badge}
                      </span>
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </nav>
    </>
  )
}

export default Navigation
