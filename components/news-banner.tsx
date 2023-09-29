import React from "react"

const NewsBanner = () => {
  return (
    <div className='z-20 flex shrink-0 h-12 gap-2 bg-black text-white justify-center items-center'>
      <p>🤘 Leadbay 2.0 is live!</p>
      <a
        href='https://ludogranger.substack.com/p/leadbay-manifesto'
        className='underline hover:text-gray-200'
      >
        Read our manisfesto here
      </a>
    </div>
  )
}

export default NewsBanner
