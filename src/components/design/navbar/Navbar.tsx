import { Icons } from '@/components/shared/Icons'
import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper'
import { buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { getUserById } from '@/server/modules/user/user.actions'
import { cn } from '@/utils/utils'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'
import MobileNav from './MobileNav'

const Navbar = async () => {
  const { userId }: { userId: string | null } = auth()
  const mongoUser = await getUserById({ userId })

  console.log(mongoUser)

  return (
    <>
      <nav className='sticky inset-x-0 top-0 z-50 w-full border-b bg-background'>
        <MaxWidthWrapper>
          <header className='flex h-16 items-center justify-between gap-10'>
            <div>
              <div className='flex items-center gap-10'>
                <Link href='/' className='flex items-center gap-1'>
                  <Icons.logo className='h-8 w-8 text-primary' />

                  <h1 className='text-base font-bold text-foreground'>
                    {siteConfig.name}
                  </h1>
                </Link>

                {/* <div className='z-50 hidden lg:ml-8 lg:block lg:self-stretch'>
                  <NavItems />
                </div> */}
              </div>
            </div>
            <MobileNav />

            <div className='hidden items-center gap-4 md:flex'>
              <Link
                href='/submit'
                className={cn(buttonVariants({ size: 'sm' }))}
              >
                New Product
              </Link>

              <SignedIn>
                <UserButton />
              </SignedIn>

              <SignedOut>
                <Link
                  href='/auth/sign-in'
                  className={cn(
                    buttonVariants({ variant: 'outline', size: 'sm' })
                  )}
                >
                  Login
                </Link>
              </SignedOut>
            </div>
          </header>
        </MaxWidthWrapper>
      </nav>
    </>
  )
}

export default Navbar
