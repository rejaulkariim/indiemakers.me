import { Icons } from '@/components/shared/Icons';
import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { cn } from '@/utils/utils';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

const Navbar = async () => {
  return (
    <header className="bg-background h-14 flex justify-center items-center w-full fixed inset-0 z-40 border-b border-muted">
      <MaxWidthWrapper>
        <nav className="flex justify-between items-center w-full">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Icons.logo className="h-8 w-8" />
            <span className="hidden font-bold sm:inline-block">
              {siteConfig.name}
            </span>
          </Link>

          <div className="flex gap-3 items-center">
            <SignedIn>
              <div className="flex items-center gap-4">
                <Link
                  href="/user/dashboard/profile"
                  className={cn(
                    buttonVariants({ variant: 'ghost' }),
                    'text-muted-foreground'
                  )}
                >
                  Account
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
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
