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
            {/* <FeedbackDialog /> */}
            {/* <span className="bg-gray-200 px-3 py-2 text-xs rounded-full">
              Beta
            </span> */}

            {/* <Link href="/user/dashboard">Dashboard</Link> */}
            {/* 
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                    size: 'icon',
                  })
                )}
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                    size: 'icon',
                  })
                )}
              >
                <Icons.twitter className="h-3 w-3 fill-current" />
                <span className="sr-only">Twitter</span>
            </Link>

            <ModeToggle /> */}

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

            <SignedIn>
              <div className="flex items-center gap-4">
                <Link
                  href="/user/dashboard"
                  className="text-sm text-muted-foreground"
                >
                  Dashboard
                </Link>
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
          </div>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
