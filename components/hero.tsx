"use client"

import { basement, reenie } from "@/fonts"
import { cn } from "@/lib/utils"
import { Container } from "@/components"
import { motion } from "framer-motion"
import { useState } from "react"

const Hero = () => {
  const [displayRequestForm, setdisplayRequestForm] = useState(false)

  const handleRequestClick = () => {
    setdisplayRequestForm(true)
  }
  return (
    <Container className='flex flex-col items-center text-center gap-2 justify-center shrink-0 grow'>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 100,
          delay: 0.5,
        }}
      >
        <h1
          className={cn(
            basement.className,
            "uppercase text-[35px] sm:text-[56px] leading-tight"
          )}
        >
          Let&apos;s rock your{" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 1 }}
            className={cn(
              reenie.className,
              "uppercase text-[61px] sm:text-[84px]"
            )}
          >
            sales!
          </motion.span>
        </h1>
        <h2 className='leading-loose mb-6'>
          AI-lead supply and behavioral targeting for B2B sales.
        </h2>
        {displayRequestForm ? (
          <form className='flex gap-2 justify-center'>
            <input
              type='email'
              required
              placeholder='Enter your email...'
              className='py-3 px-4 border-2 border-gray-300 rounded-md focus:outline-black'
            />
            <button
              type='submit'
              className='py-3 px-8 bg-black hover:bg-gray-700 text-white border-2 border-black hover:border-gray-700 rounded-md'
            >
              Submit
            </button>
          </form>
        ) : (
          <button
            onClick={handleRequestClick}
            className='py-3 px-8 bg-black hover:bg-gray-700 text-white border-2 border-black hover:border-gray-700 rounded-md'
          >
            Request Access
          </button>
        )}
      </motion.div>
    </Container>
  )
}

export default Hero

// import { motion } from "framer-motion"

// const variants = {
//   open: { opacity: 1, x: 0 },
//   closed: { opacity: 0, x: "-100%" },
// }

// export const MyComponent = () => {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <motion.nav
//       animate={isOpen ? "open" : "closed"}
//       variants={variants}
//     >
//       <Toggle onClick={() => setIsOpen(isOpen => !isOpen)} />
//       <Items />
//     </motion.nav>
//   )
// }
