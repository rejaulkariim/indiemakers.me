import { Icons } from '@/components/shared/Icons';
import { ModeToggle } from '@/components/theme/ModeToggle';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { cn } from '@/utils/utils';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import MobileNav from './MobileNav';
import NavItems from './NavItems';

const Navbar = async () => {
  return (
    <>
      <div className="bg-background sticky z-50 top-0 inset-x-0 h-14">
        <header className="px-10 relative bg-background border-b border-muted/90">
          <div className="flex justify-between h-14 items-center">
            <MobileNav />

            <div className="hidden md:flex items-center ml-4 lg:ml-0">
              <Link href="/" className="flex items-center gap-1">
                <Icons.logo className="h-8 w-8 text-primary" />

                <h1 className="text-base font-bold text-foreground">
                  {siteConfig.name}
                </h1>
              </Link>

              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>
            </div>

            <div className="hidden sm:flex gap-3 items-center">
              <ModeToggle />
              <SignedIn>
                <div className="flex items-center gap-4">
                  <Link
                    href="/user/dashboard/profile"
                    className={cn(
                      buttonVariants({ variant: 'ghost' }),
                      'text-muted-foreground'
                    )}
                  >
                    Dashboard
                  </Link>
                  <UserButton afterSignOutUrl="/" />
                </div>
              </SignedIn>

              <SignedOut>
                <Link
                  href="/sign-in"
                  className={cn(
                    buttonVariants({ variant: 'secondary', size: 'sm' })
                  )}
                >
                  Login
                </Link>
              </SignedOut>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
