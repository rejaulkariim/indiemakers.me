import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

import MobileNav from '@/components/design/navbar/MobileNav';
import NavItems from '@/components/design/navbar/NavItems';
import { Icons } from '@/components/shared/Icons';
import { ModeToggle } from '@/components/theme/ModeToggle';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Max width wrapper for responsive layout */}
      <MaxWidthWrapper className="flex items-center justify-between h-14">
        {/* Branding */}
        <Link href="/" className="text-xl font-bold flex items-center gap-2">
          <Icons.logo className="h-6 w-6 text-foreground " />
          <p className="text-base font-bold text-foreground">
            {siteConfig.name}
          </p>
        </Link>

        {/* Navigation items */}
        <nav>
          <NavItems />
        </nav>

        {/* Mode toggle (dark/light mode) and user authentication */}
        <div className="flex justify-end items-center gap-4">
          <ModeToggle />
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

          {/* Sign-in button */}
          <div className="hidden md:block">
            <SignedOut>
              <Button className="text-white">
                <Link href="/sign-in">Login</Link>
              </Button>
            </SignedOut>
          </div>

          {/* Mobile navigation */}
          <MobileNav />
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
