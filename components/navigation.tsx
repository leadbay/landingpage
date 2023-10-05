"use client"

import React, { useState } from "react"
import { BurgerIcon } from "@/components"
import { cn } from "@/lib/utils"

const links = [
  {
    label: "Manifesto",
    url: "#",
  },
  {
    label: "Newsletter",
    url: "#",
  },
  {
    label: "Podcast",
    url: "#",
  },
  {
    label: "Playlist",
    url: "#",
  },
]

const cta = [
  {
    label: "Join the factory",
    variant: "secondary",
    url: "#",
  },
]

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className='text-white'>
      <nav className='flex flex-col xl:flex-row justify-between'>
        <ul className='gap-4 xl:gap-10 xl:flex hidden'>
          {links.map((link) => (
            <li key={link.url}>
              <a className={"hover:text-gray-700 no-underline"} href={link.url}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <ul>
          {cta.map((link) => (
            <li key={link.url}>
              <a
                className={
                  "hover:text-gray-700 no-underline border border-white px-4 py-2 rounded-md"
                }
                href={link.url}
              >
                {link.label}
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
          <div className='z-10 bg-black text-white w-screen h-screen absolute top-0 left-0'>
            <ul className='flex flex-col justify-center text-6xl h-full gap-8 p-12 max-w-sm m-auto'>
              {links.map((link) => (
                <li key={link.url}>
                  <a
                    className={"hover:text-gray-300 no-underline"}
                    href={link.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              {cta.map((link) => (
                <li key={link.url}>
                  <a
                    className={
                      "hover:text-gray-300 no-underline rounded-md whitespace-nowrap"
                    }
                    href={link.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </nav>
    </div>
  )
}

export default Navigation
