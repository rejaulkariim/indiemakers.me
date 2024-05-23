'use client';

import { Icons } from '@/components/shared/Icons';
import { siteConfig } from '@/config/site';
import { PRODUCT_CATEGORIES } from '@/constants';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const MobileNav = () => {
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
          <Icons.logo className="h-6 w-6" />
          <h1 className="font-bold">{siteConfig.name}</h1>
        </Link>

        <button type="button" onClick={() => setIsOpen(true)}>
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    );

  return (
    <div>
      <div className="relative z-40 lg:hidden">
        <div className="fixed inset-0 bg-accent/50 bg-opacity-25" />
      </div>

      <div className="fixed overflow-y-scroll overscroll-y-none inset-0 z-40 flex">
        <div className="w-4/5">
          <div className="relative flex w-full max-w-sm flex-col overflow-y-auto bg-background pb-12 shadow-xl">
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-foreground"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-2">
              <ul>
                {PRODUCT_CATEGORIES.map((category) => (
                  <li
                    key={category.label}
                    className="space-y-2 px-4 pb-8 pt-10"
                  >
                    <div className="border-b">
                      <div className="-mb-px flex">
                        <p className="border-transparent text-foreground flex-1 whitespace-nowrap border-b-2 py-4 text-base font-medium">
                          {category.label}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative text-sm">
                          <Link
                            href={item.href}
                            className="mt-6 block font-medium text-muted-foreground"
                          >
                            {item.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
