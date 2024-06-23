import { Icons } from '@/components/shared/Icons';
import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import UserAccountNav from '@/components/shared/UserAccountNav';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { cn } from '@/utils/utils';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';
import LocalSearchbar from '../search/LocalSearchbar';
import MobileNav from './MobileNav';
import NavItems from './NavItems';

const Navbar = async () => {
  return (
    <nav className="sticky z-50 top-0 inset-x-0 w-full border-b bg-background">
      <MaxWidthWrapper>
        <header className="flex justify-between h-16 items-center gap-10">
          <MobileNav />

          <div className="hidden sm:block flex-1">
            <div className="flex items-center gap-10">
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
          </div>

          <div className="hidden sm:block flex-1">
            <div className="flex items-center justify-between gap-10">
              <LocalSearchbar
                route="/"
                iconPosition="right"
                imgSrc="/assets/icons/search.svg"
                placeholder="Search for products..."
                otherClasses="max-w-xl"
              />

              <SignedIn>
                <UserAccountNav />
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
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
