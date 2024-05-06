'use client';

import { Icons } from '@/components/shared/Icons';
import { SidebarNavItem } from '@/types';
import { cn } from '@/utils/utils';
import { SignedIn, UserButton } from '@clerk/nextjs';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface DashboardNavProps {
  items: SidebarNavItem[];
}

const MobileNav = ({ items }: DashboardNavProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathname = usePathname();

  // whenever we click an item in the menu and navigate away, we want to close the menu
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // when we click the path we are currently on, we still want the mobile menu to close,
  // however we cant rely on the pathname for it because that won't change (we're already there)
  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      setIsOpen(false);
    }
  };

  // remove second scrollbar when mobile menu is open
  useEffect(() => {
    if (isOpen) document.body.classList.add('overflow-hidden');
    else document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  if (!isOpen)
    return (
      <div className="flex justify-between items-center w-full lg:hidden">
        <Link href="/" className="flex items-center gap-2">
          <Icons.logo className="h-8 w-8" />
        </Link>

        <div className="flex flex-row-reverse gap-4 items-center">
          <button type="button" onClick={() => setIsOpen(true)}>
            <Menu className="h-8 w-8" aria-hidden="true" />
          </button>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    );

  return (
    <div>
      <div className="relative z-40 lg:hidde min-h-screen">
        <div className="fixed inset-0 bg-accent/50 bg-opacity-25" />
      </div>

      <div className="fixed overflow-y-scroll overscroll-y-none inset-0 z-40 flex">
        <div className="w-4/5">
          <div className="relative flex w-full max-w-sm flex-col overflow-y-auto bg-background pb-12 shadow-xl">
            <div className="flex px-2 justify-between items-center pt-4">
              <Link href="/" className="flex items-center gap-2">
                <Icons.logo className="h-8 w-8" />
                <h1 className="font-bold">App Brews</h1>
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-foreground"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-8 min-h-screen px-4">
              <div className="grid items-start gap-4">
                {items.map((item, index) => {
                  // const Icon = Icons[item.icon || 'arrowRight'];
                  return (
                    item.href && (
                      <Link key={index} href={item.disabled ? '/' : item.href}>
                        <span
                          className={cn(
                            'group flex items-center rounded-md px-4 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                            pathname === item.href
                              ? 'bg-accent'
                              : 'transparent',
                            item.disabled && 'cursor-not-allowed opacity-80'
                          )}
                        >
                          {/* <Icon className="mr-2 h-4 w-4 text-muted-foreground" /> */}
                          <span className="text-sm text-muted-foreground">
                            {item.title}
                          </span>
                        </span>
                      </Link>
                    )
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
