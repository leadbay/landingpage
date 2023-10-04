import { Container, Logo, NewsBanner, Navigation } from "@/components"
import Link from "next/link"

const Header = () => {
  return (
    <div className='absolute w-screen'>
      <NewsBanner />
      <Container>
        <div className='flex items-center justify-between px-9 py-6'>
          <Link href='/'>
            <Logo className=' h-12' />
          </Link>
          <Navigation />
        </div>
      </Container>
    </div>
  )
}

export default Header
