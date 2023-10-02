import React from "react"

const NewsBanner = () => {
  return (
    <div className='z-20 flex shrink-0 h-12 bg-black text-white justify-center items-center'>
      <p>
        🤘 Read our manisfesto{" "}
        <a
          href='https://ludogranger.substack.com/p/leadbay-manifesto'
          className='underline hover:text-gray-200'
        >
          here
        </a>
      </p>
    </div>
  )
}

export default NewsBanner
