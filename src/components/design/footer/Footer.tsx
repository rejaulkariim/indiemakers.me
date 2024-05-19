'use client';

import { ModeToggle } from '@/components/theme/ModeToggle';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { cn } from '@/utils/utils';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex-grow-0">
      <div className="border-t">
        <div className="max-w-screen-xl mx-auto px-4 md:px-10 py-4 md:flex md:items-center md:justify-between">
          <div className="text-left">
            <p className="text-sm text-muted-foreground">
              Built by{' '}
              <Link
                href="https://twitter.com/rejaulkariim"
                target="_blank"
                className="underline"
              >
                Rejaul.
              </Link>{' '}
              The source code is available on{' '}
              <Link
                href={siteConfig.links.github}
                target="_blank"
                className="underline"
              >
                GitHub.
              </Link>{' '}
            </p>
          </div>

          <div className="mt-1 hidden">
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
                  {/* <Icons.gitHub className="h-4 w-4" /> */}
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
                  {/* <Icons.twitter className="h-3 w-3 fill-current" /> */}
                  <span className="sr-only">Twitter</span>
                </div>
              </Link>

              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
