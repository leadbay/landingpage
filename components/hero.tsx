"use client"

import { basement, reenie } from "@/fonts"
import { cn } from "@/lib/utils"
import { Container } from "@/components"
import { motion } from "framer-motion"

const Hero = ({ className, ...props }: { className?: string }) => {
  return (
    <Container
      className={cn(
        className,
        "flex shrink-0 grow flex-col justify-center gap-2 text-center"
      )}
      {...props}
    >
      <h1
        className={cn(
          basement.className,
          "text-[35px] uppercase leading-tight sm:text-[56px]"
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: -500 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, delay: 0.5 }}
          className='inline-block'
        >
          Let&apos;s
        </motion.div>{" "}
        <motion.span
          initial={{ opacity: 0, y: -500 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, delay: 1 }}
          className='inline-block'
        >
          rock
        </motion.span>{" "}
        <motion.span
          initial={{ opacity: 0, y: -500 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, delay: 1.5 }}
          className='inline-block'
        >
          your
        </motion.span>{" "}
        <motion.span
          initial={{ opacity: 0, y: -500 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, delay: 2 }}
          className={cn(
            reenie.className,
            "text-[61px] uppercase sm:text-[84px] inline-block"
          )}
        >
          sales!
        </motion.span>
      </h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 2.7,
          type: "spring",
          stiffness: 100,
        }}
      >
        <h2 className='mb-6 text-xl leading-loose sm:text-2xl'>
          AI-lead supply and behavioral targeting for B2B sales.
        </h2>
        <form
          className='flex justify-center gap-2'
          name='waitinglist'
          method='POST'
          data-netlify='true'
        >
          <input type='hidden' name='form-name' value='waitinglist' />
          <input
            type='email'
            name='email'
            id='email'
            required
            placeholder='Enter your email...'
            className='rounded-md border-2 border-gray-300 px-3 py-2 focus:outline-gray-500'
          />
          <button
            type='submit'
            className='rounded-md border-2 border-black bg-black px-6 py-2 text-white hover:border-gray-700 hover:bg-gray-700'
          >
            Request access
          </button>
        </form>
      </motion.div>
    </Container>
  )
}

export default Hero
