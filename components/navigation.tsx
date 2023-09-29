"use client"

import React, { useState } from "react"
import { BurgerIcon } from "@/components"

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <nav className='flex flex-col xl:flex-row gap-10 items-center'>
        <ul className='gap-4 xl:gap-10 xl:flex hidden'>
          {/* <li>Research</li> */}
          <li>
            <a
              className='hover:text-gray-700'
              href='https://ludogranger.substack.com/p/leadbay-manifesto'
            >
              Community
            </a>
          </li>
          <li>
            <a
              className='group hover:text-gray-700 relative'
              href='https://changeable-tick-30e.notion.site/Leadbay-Career-230e5838c5c54c329163b00156440707?pvs=4'
            >
              Career
              <span className='absolute -top-1 -right-6 rounded-full bg-black h-5 w-5 p-0.5 text-center text-white text-xs group-hover:bg-gray-700'>
                3
              </span>
            </a>
          </li>
        </ul>
      </nav>
      <nav className='flex flex-col sm:flex-row gap-10 items-center'>
        <div className='gap-4 xl:gap-10 xl:flex hidden'>
          <a
            href='https://leadbay.app/login'
            className='hover:text-gray-700 py-0.5 px-4 bg-white border-2 border-black hover:border-gray-700 rounded-md'
          >
            Login
          </a>
        </div>
        <button className='z-20' onClick={handleMenuClick}>
          <BurgerIcon className='xl:hidden block' />
        </button>
        {menuOpen ? (
          <div className='z-10 bg-white w-screen h-screen absolute top-0 left-0'>
            <ul className='flex flex-col justify-center text-6xl h-full gap-8 p-12 max-w-sm m-auto'>
              <li>
                <a
                  className='hover:text-gray-700'
                  href='https://ludogranger.substack.com/p/leadbay-manifesto'
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  className='hover:text-gray-700 relative'
                  href='https://ludogranger.substack.com/p/leadbay-manifesto'
                >
                  Career
                  <span className='absolute top-2 -right-9 rounded-full bg-black h-8 w-8 p-1 text-center text-white text-base group-hover:bg-gray-700 font-bold'>
                    3
                  </span>
                </a>
              </li>
              <li>
                <a
                  className='hover:text-gray-700'
                  href='https://leadbay.app/login'
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  className='hover:text-gray-700'
                  href='https://leadbay.app/register'
                >
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        ) : null}
      </nav>
    </>
  )
}

export default Navigation
