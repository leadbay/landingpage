import { Container, Logo, Navigation, NewsBanner } from "@/components"
import Link from "next/link"

const Header = () => {
  return (
    <div className='absolute w-screen'>
      <NewsBanner />
      <Container>
        <div className='flex items-center justify-between px-2 md:px-9 py-6'>
          <Link href='/' className='xl:block hidden'>
            <Logo full className=' h-10' />
          </Link>
          <Link href='/' className='xl:hidden block'>
            <Logo className=' h-10' />
          </Link>
          <Navigation />
        </div>
      </Container>
    </div>
  )
}

export default Header
