'use client';

import { headerLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavItems = () => {
  const pathname = usePathname();
  return (
    <ul className="hidden sm:flex sm:flex-between sm:items-center w-full gap-5">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <li key={link.label}>
            <Link
              href={link.route}
              className={`flex-center text-sm sm:text-base whitespace-normal ${
                isActive ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
