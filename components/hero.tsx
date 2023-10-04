"use client"
import formData from "form-data"
import Mailgun from "mailgun.js"

import { basement, reenie } from "@/fonts"
import { cn } from "@/lib/utils"
import { Container } from "@/components"
import { motion } from "framer-motion"

const Hero = ({ className, ...props }: { className?: string }) => {
  return (
    <Container
      className={cn(
        className,
        "flex shrink-0 grow flex-col justify-center gap-2 text-center text-white"
      )}
      {...props}
    >
      <h1
        className={cn(
          basement.className,
          "text-[35px] uppercase leading-tight sm:text-[56px]"
        )}
      >
        The Sales Champions' Factory
      </h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.7,
          type: "spring",
          stiffness: 100,
        }}
      >
        <h2 className='mb-6 text-xl leading-loose sm:text-2xl'>
          Become a EURO-US sales champion and empower the next generation of B2B
          sales reps.
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
            className='rounded-md border-2 bg-black border-gray-300 px-3 py-2 focus:outline-gray-500'
          />
          <button
            type='submit'
            className='rounded-md border-2 border-white bg-white px-6 py-2 text-black hover:border-gray-700 hover:bg-gray-700'
          >
            Join the factory
          </button>
        </form>
      </motion.div>
    </Container>
  )
}

export default Hero
