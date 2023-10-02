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
        "flex shrink-0 grow flex-col justify-center gap-2 text-center"
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
            "text-[35px] uppercase leading-tight sm:text-[56px]"
          )}
        >
          Let&apos;s rock your{" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.3 }}
            className={cn(
              reenie.className,
              "text-[61px] uppercase sm:text-[84px]"
            )}
          >
            sales!
          </motion.span>
        </h1>
        <h2 className='mb-6 text-xl leading-loose sm:text-2xl'>
          AI-lead supply and behavioral targeting for B2B sales.
        </h2>
        {displayRequestForm ? (
          <form
            className='flex justify-center gap-2'
            name='waitinglist'
            method='POST'
            data-netlify='true'
          >
            <input type='hidden' name='form-name' value='Waitinglist' />
            <input
              type='email'
              name='email-address'
              id='waitinglist-email-address'
              autoComplete='email'
              required
              placeholder='Enter your email...'
              className='rounded-md border-2 border-gray-300 px-3 py-2 focus:outline-gray-500'
            />
            <button
              type='submit'
              className='rounded-md border-2 border-black bg-black px-6 py-2 text-white hover:border-gray-700 hover:bg-gray-700'
            >
              Submit
            </button>
          </form>
        ) : (
          <button
            onClick={handleRequestClick}
            className='rounded-md border-2 border-black bg-black px-6 py-2 text-white hover:animate-wiggle hover:border-gray-700 hover:bg-gray-700'
          >
            Request Access
          </button>
        )}
      </motion.div>
    </Container>
  )
}

export default Hero
