'use client';

import { Icons } from '@/components/shared/Icons';
import { Button } from '@/components/ui/button';
import { PRODUCT_CATEGORIES } from '@/constants';
import { cn } from '@/utils/utils';

import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

type Category = (typeof PRODUCT_CATEGORIES)[number];

interface NavItemProps {
  category: Category;
  handleOpen: () => void;
  setActiveIndex: (index: number | null) => void;
  isOpen: boolean;
  isAnyOpen: boolean;
}
const NavItem = ({
  isAnyOpen,
  category,
  handleOpen,
  isOpen,
  setActiveIndex,
}: NavItemProps) => {
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <Button
          className="gap-1.5"
          onClick={handleOpen}
          variant={isOpen ? 'secondary' : 'ghost'}
        >
          {category.label}

          <ChevronDown
            className={cn('h-4 w-4 transition-all text-muted-foreground', {
              '-rotate-180': isOpen,
            })}
          />
        </Button>
      </div>

      {isOpen ? (
        <div
          className={cn(
            'absolute w-[320px] top-full text-sm text-muted-foreground',
            {
              'animate-in fade-in-10 slide-in-from-top-5': !isAnyOpen,
            }
          )}
        >
          <div
            className="bg-background p-1 mt-2 rounded-lg border"
            aria-hidden="true"
          >
            {category.featured.map((item) => {
              const Icon = Icons[item.icon || 'arrowRight'];
              return (
                <div
                  key={item.name}
                  onClick={() => setActiveIndex(null)}
                  className="hover:bg-card p-2 rounded-xl group"
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-3.5 space-y-2 hover:bg-accent/70 rounded-xl p-2 transition-all duration-300"
                  >
                    <div className="p-2 rounded-lg bg-accent transition-all duration-300">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>

                    <div>
                      <p className="font-bold text-foreground">{item.name}</p>
                      <p className="text-sm">{item.title}</p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavItem;
