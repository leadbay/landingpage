"use client"

import { useState } from "react"
import { BurgerIcon, Container, Logo } from "@/components"
import { motion } from "framer-motion"
import Link from "next/link"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <div className='z-20 flex shrink-0 h-16 bg-black text-white justify-center items-center'>
        <p>
          🤘 Leadbay 2.0 is live!{" "}
          <a href='#' className='underline hover:text-gray-200'>
            Get it here {menuOpen ? "open" : "closed"}
          </a>
        </p>
      </div>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className='flex items-center justify-between px-9 py-12'>
            <Link href='/' className='xl:block hidden'>
              <Logo full className=' h-12' />
            </Link>
            <Link href='/' className='xl:hidden block'>
              <Logo className=' h-11' />
            </Link>
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
                    className='hover:text-gray-700'
                    href='https://ludogranger.substack.com/p/leadbay-manifesto'
                  >
                    Career
                  </a>
                </li>
              </ul>
            </nav>
            <nav className='flex flex-col sm:flex-row gap-10 items-center'>
              <div className='gap-4 xl:gap-10 xl:flex hidden'>
                <a
                  href='https://leadbay.app/login'
                  className='hover:text-gray-700 py-3 px-8 bg-white border-2 border-black hover:border-gray-700 rounded-md'
                >
                  Login
                </a>
                <a
                  href='https://leadbay.app/register'
                  className='py-3 px-8 bg-black hover:bg-gray-700 text-white border-2 border-black hover:border-gray-700 rounded-md'
                >
                  Sign up
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
                        className='hover:text-gray-700'
                        href='https://ludogranger.substack.com/p/leadbay-manifesto'
                      >
                        Career
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
          </div>
        </motion.div>
      </Container>
    </>
  )
}

export default Header
