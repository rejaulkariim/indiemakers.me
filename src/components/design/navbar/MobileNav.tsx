'use client';

import { Icons } from '@/components/shared/Icons';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

import { siteConfig } from '@/config/site';
import { headerLinks } from '@/constants';
import { SignedOut } from '@clerk/nextjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          {/* <Icons.menu className="h-8 w-8" /> */}
        </SheetTrigger>
        <SheetContent
          className="flex flex-col gap-6 bg-background md:hidden"
          side="left"
        >
          {/* Branding */}
          <div>
            <Link
              href="/"
              className="text-xl font-bold flex items-center gap-2"
            >
              <Icons.logo className="h-8 w-8 text-muted-foreground " />
              <p className="text-base font-bold text-muted-foreground">
                {siteConfig.name}
              </p>
            </Link>
          </div>

          <Separator className="border" />

          {/* Mobile navitems */}
          <div className="flex flex-col items-start gap-5 text-muted-foreground">
            {headerLinks.map((link) => {
              const isActive = pathname === link.route;
              return (
                <SheetClose key={link.label} asChild>
                  <Link
                    href={link.route}
                    className={`flex-center text-sm sm:text-base whitespace-normal ${
                      isActive ? 'text-foreground' : 'text-muted-foreground'
                    }`}
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              );
            })}
          </div>

          <SignedOut>
            <Button asChild className="text-white">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
