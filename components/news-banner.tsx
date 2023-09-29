import React from "react"

const NewsBanner = () => {
  return (
    <div className='z-20 flex shrink-0 h-12 bg-black text-white justify-center items-center'>
      <p>
        🤘 Leadbay 2.0 is live!{" "}
        <a href='#' className='underline hover:text-gray-200'>
          Get it here
        </a>
      </p>
    </div>
  )
}

export default NewsBanner
