"use client"

import { basement, reenie } from "@/fonts"
import { cn } from "@/lib/utils"
import { Container } from "@/components"
import { motion } from "framer-motion"
import { useState } from "react"

const Hero = ({ className, ...props }: { className?: string }) => {
  const [displayRequestForm, setdisplayRequestForm] = useState(false)

  const handleRequestClick = () => {
    setdisplayRequestForm(true)
  }
  return (
    <Container
      className={cn(
        className,
        "flex flex-col text-center gap-2 shrink-0 grow justify-center"
      )}
      {...props}
    >
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.2,
          type: "spring",
          stiffness: 100,
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
            transition={{ duration: 0.1, delay: 0.3 }}
            className={cn(
              reenie.className,
              "uppercase text-[61px] sm:text-[84px]"
            )}
          >
            sales!
          </motion.span>
        </h1>
        <h2 className='leading-loose mb-6 text-xl sm:text-2xl'>
          AI-lead supply and behavioral targeting for B2B sales.
        </h2>
        {displayRequestForm ? (
          <form
            className='flex gap-2 justify-center'
            name='waitinglist'
            method='POST'
            data-netlify='true'
          >
            <input
              type='email'
              name='email'
              required
              placeholder='Enter your email...'
              className='py-2 px-3 border-2 border-gray-300 rounded-md focus:outline-gray-500'
            />
            <input type='hidden' name='form-name' value='waitinglist' />
            <button
              type='submit'
              className='py-2 px-6 bg-black hover:bg-gray-700 text-white border-2 border-black hover:border-gray-700 rounded-md'
            >
              Submit
            </button>
          </form>
        ) : (
          <button
            onClick={handleRequestClick}
            className='py-2 px-6 bg-black hover:bg-gray-700 text-white border-2 border-black hover:border-gray-700 rounded-md hover:animate-wiggle'
          >
            Request Access
          </button>
        )}
      </motion.div>
    </Container>
  )
}

export default Hero
