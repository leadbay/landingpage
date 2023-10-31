import { ReactNode } from "react"

export interface LaoutProps {
  children: ReactNode
}

export default function Laout(props: LaoutProps) {
  const { children } = props

  return (
    <article className='w-[600px] mt-[186px] mx-auto mb-10'>{children}</article>
  )
}
