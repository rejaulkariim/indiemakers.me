'use client';

import { Icons } from '@/components/shared/Icons';
import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import { ModeToggle } from '@/components/theme/ModeToggle';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { cn } from '@/utils/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();
  const pathsToMinimize = ['/login', '/submit', '/business'];

  return (
    <footer className="bg-background flex-grow-0">
      <MaxWidthWrapper>
        <div>
          {pathsToMinimize.includes(pathname) ? null : (
            <div className="pb-8 pt-16">
              <div className="flex justify-center">
                <Icons.logo className="h-12 w-auto" />
              </div>
            </div>
          )}

          {pathsToMinimize.includes(pathname) ? null : (
            <div className="max-w-3xl mx-auto text-center border p-4 rounded-xl">
              <div className="">
                <h3 className="font-semibold text-foreground">
                  Want to list your product?
                </h3>
                <p className="paragraph">
                  List your product on our growing platform for lifetime
                  exposure.
                </p>
                <Link
                  href="/user/dashboard/submit"
                  className={cn(buttonVariants(), 'mt-4')}
                >
                  New Product
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className="py-10 md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>

          <div className="mt-4 flex items-center justify-center md:mt-0">
            <div className="flex space-x-2 items-center">
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
                </div>
              </Link>

              <ModeToggle />
              {/* <Link href="#" className="text-sm text-muted-foreground">
                Terms
              </Link>
              <Link href="#" className="text-sm text-muted-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground">
                Cookie Policy
              </Link> */}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
