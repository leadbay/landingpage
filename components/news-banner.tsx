import React from "react"

const NewsBanner = () => {
  return (
    <div className='z-20 flex shrink-0 h-12 bg-white text-black justify-center items-center'>
      <p>
        🏭 The Sales Champions' Factory is live!{" "}
        <a
          href='https://ludogranger.substack.com/p/leadbay-manifesto'
          className='underline hover:text-gray-200'
        >
          Join us here
        </a>
      </p>
    </div>
  )
}

export default NewsBanner
