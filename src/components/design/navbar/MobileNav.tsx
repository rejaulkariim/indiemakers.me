import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/utils/utils'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

const MobileNav = () => {
  return (
    <nav className='flex md:hidden items-center justify-between'>
      <SignedIn>
        <UserButton />
      </SignedIn>

      <SignedOut>
        <Link
          href='/auth/sign-in'
          className={cn(buttonVariants({ size: 'sm' }))}
        >
          Login
        </Link>
      </SignedOut>
    </nav>
  )
}

export default MobileNav
