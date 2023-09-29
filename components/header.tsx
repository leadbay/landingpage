"use client"

import { Container, Logo, NewsBanner, Navigation } from "@/components"
import { motion } from "framer-motion"
import Link from "next/link"

const Header = () => {
  return (
    <div className='absolute w-screen'>
      <NewsBanner />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.6 }}
        >
          <div className='flex items-center justify-between px-9 py-6'>
            <Link href='/' className='xl:block hidden'>
              <Logo full className=' h-12' />
            </Link>
            <Link href='/' className='xl:hidden block'>
              <Logo className=' h-11' />
            </Link>
            <Navigation />
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

export default Header
