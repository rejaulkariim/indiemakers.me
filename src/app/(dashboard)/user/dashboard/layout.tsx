import DashboardSidebarNav from '@/components/design/navbar/DashboardSidebarNav';
import { Icons } from '@/components/shared/Icons';
import { ModeToggle } from '@/components/theme/ModeToggle';
import { buttonVariants } from '@/components/ui/button';
import { dashboardConfig } from '@/config/dashboard';
import { siteConfig } from '@/config/site';
import { cn } from '@/utils/utils';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <main className="md:grid grid-cols-6">
      {/* DASHBOARD SIDEBAR NAVIGATION */}
      <div className="hidden md:block col-span-1 min-h-screen border-r">
        <div className="sticky top-0">
          <DashboardSidebarNav items={dashboardConfig.sidebarNav} />
        </div>
      </div>

      {/* DASHBOARD MAIN LAYOUT */}
      <div className="col-span-5">
        {/* DASHBOARD NAVBAR */}
        <header className="sticky top-0 w-full z-40 border-b bg-background overflow-hidden px-4 md:px-10 flex h-16 items-center justify-between">
          <div className="">
            <Link href="/" className="flex md:hidden items-center space-x-2">
              <Icons.logo className="h-8 w-8" />
              <span className="hidden md:flex text-sm font-semibold">
                {siteConfig.name}
              </span>
            </Link>
          </div>

          <div className="flex gap-3 items-center">
            <ModeToggle />
            <SignedIn>
              <div className="flex items-center gap-4">
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
        </header>

        <main className="wrapper">{children}</main>
      </div>
    </main>
  );
}
