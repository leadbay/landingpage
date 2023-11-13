"use client"

import { Container } from "@/components"
import { basement, reenie } from "@/fonts"
import { cn, encode } from "@/lib/utils"
import { motion } from "framer-motion"
import JSConfetti from "js-confetti"
import localforage from "localforage"
import { ChangeEvent, useState } from "react"
import { toast } from "react-toastify"

const Hero = ({ className, ...props }: { className?: string }) => {
  const [state, setState] = useState<{ email: string }>({ email: "" })

  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()

      const savedEmails = await localforage.getItem<string[]>("email")

      if (savedEmails?.includes(state.email)) {
        toast(`${state.email} is already on the waiting list 🤘🏽`, {
          theme: "colored",
          autoClose: 8000,
        })

        return
      }

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "waitinglist", ...state }),
      })

      if (savedEmails !== null)
        await localforage.setItem("email", [...savedEmails, state.email])

      toast("Welcome hustler, we'll get back to you shortly ✅", {
        theme: "colored",
        autoClose: 8000,
      })

      const jsConfetti = new JSConfetti()

      jsConfetti.addConfetti()
    } catch (error) {
      console.log(error)

      toast.error("Something went wrong!, please try again.")
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setState({ email: event.target.value })

  return (
    <Container
      className={cn(
        className,
        "flex shrink-0 grow flex-col justify-center gap-2 text-center",
        "h-[calc(100dvh-36px)] mt-[36px]"
      )}
      {...props}
    >
      <header className='max-w-[1000px] mx-auto'>
        <motion.h3
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          initial={{ opacity: 0, transform: "translateY(10px)" }}
          className={cn("leading-loose text-xl text-gray")}
        >
          Let's 🤘🏽 your{" "}
          <span
            className={cn(
              reenie.className,
              "uppercase font-black text-5xl  leading-none"
            )}
          >
            sales
          </span>{" "}
          with Leadbay
        </motion.h3>

        <motion.h1
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          initial={{ opacity: 0, transform: "translateY(10px)" }}
          className={cn(
            basement.className,
            "text-[2.4rem] leading-tight sm:text-[36px] my-8"
          )}
        >
          Your B2B leads today. Predictive,
          <br /> configurable, powerful.
        </motion.h1>

        <motion.h2
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
          initial={{ opacity: 0, transform: "translateY(10px)" }}
          className='mb-8 md:mb-12 text-xl text-gray-600'
        >
          The AI that supports B2B sales reps to set the ideal Customer Profile,
          <br className='hidden md:block' /> supply leads at the right time, and
          predict revenue growth.
        </motion.h2>

        <form
          name='waitinglist'
          method='POST'
          data-netlify='true'
          onSubmit={handleSubmitForm}
          className='flex justify-center itms-center gap-2 max-w-[450px] m-auto'
        >
          <input
            onChange={handleChange}
            type='email'
            name='email'
            id='email'
            required
            placeholder='marc@salesforce.com'
            className='flex-1 text-lg rounded-md border-2 border-gray-300 px-3 py-2 focus:outline-gray-500'
          />

          <button
            type='submit'
            className='text-lg rounded-md border-2 border-black bg-black px-3 md:px-6 py-2 text-white hover:border-gray-700 hover:bg-gray-700'
          >
            request access
          </button>

          <p className='hidden'>
            <label>
              Don’t fill this out if you’re human: <input name='bot-field' />
            </label>
          </p>
        </form>
      </header>
    </Container>
  )
}

export default Hero
