import { ReactNode } from "react"

export interface LaoutProps {
  children: ReactNode
}

export default function Laout(props: LaoutProps) {
  const { children } = props

  return (
    <article className='max-w-[600px] mt-[186px] mx-auto mb-20 px-3 md:px-0 text-xl'>
      {children}
    </article>
  )
}
