'use client';

import { Icons } from '@/components/shared/Icons';
import { siteConfig } from '@/config/site';
import { SidebarNavItem } from '@/types';
import { cn } from '@/utils/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface DashboardNavProps {
  items: SidebarNavItem[];
}

const DashboardSidebarNav = ({ items }: DashboardNavProps) => {
  const path = usePathname();
  return (
    <div className="px-4 h-screen">
      <div className="h-16 px-3 flex items-center">
        <Link href="/" className="hidden items-center space-x-2 md:flex">
          <Icons.logo className="h-6 w-6" />
          <span className="text-lg font-bold">{siteConfig.name}</span>
        </Link>
      </div>

      <div className="px-3 my-2">
        <p className="text-base body-semibold text-muted-foreground">
          Navigation
        </p>
      </div>

      <div className="grid items-start gap-2">
        {items.map((item: any, index: number) => {
          const Icon = Icons[item.icon || 'arrowRight'];
          return (
            item.href && (
              <Link key={index} href={item.disabled ? '/' : item.href}>
                <span
                  className={cn(
                    'group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                    path === item.href ? 'bg-accent' : 'transparent',
                    item.disabled && 'cursor-not-allowed opacity-80'
                  )}
                >
                  <Icon className="mr-2 h-4 w-4 text-muted-foreground" />
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
  );
};

export default DashboardSidebarNav;
