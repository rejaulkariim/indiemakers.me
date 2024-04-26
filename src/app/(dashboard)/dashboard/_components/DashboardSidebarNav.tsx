import { siteConfig } from '@/config/site';
import { cn } from '@/utils/utils';
import { SidebarNavItem } from '@/types';
import Link from 'next/link';

interface DashboardNavProps {
  items: SidebarNavItem[];
}

const DashboardSidebarNav = ({ items }: DashboardNavProps) => {
  return (
    <nav className="px-4">
      <div className="h-16 px-3 flex items-center">
        <Link href="/" className="hidden items-center space-x-2 md:flex">
          {/* <Icons.logo className="animate-pulse text-cyan-500" /> */}
          <span className="text-xl font-bold uppercase">{siteConfig.name}</span>
        </Link>
      </div>
      <div className="px-3 my-2">
        <p className="text-muted-foreground">Navigation</p>
      </div>
      <div className="grid items-start gap-2">
        {items.map((item, index) => {
          //   const Icon = Icons[item.icon || "arrowRight"];
          return (
            item.href && (
              <Link key={index} href={item.disabled ? '/' : item.href}>
                <span
                  className={cn(
                    'group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                    // path === item.href ? "bg-accent" : "transparent",
                    item.disabled && 'cursor-not-allowed opacity-80'
                  )}
                >
                  {/* <Icon className="mr-2 h-4 w-4" /> */}
                  <span>{item.title}</span>
                </span>
              </Link>
            )
          );
        })}
      </div>
    </nav>
  );
};

export default DashboardSidebarNav;
