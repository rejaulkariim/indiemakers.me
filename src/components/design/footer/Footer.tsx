'use client';

import { Icons } from '@/components/shared/Icons';
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
    <>
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
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* <footer className="bg-background flex-grow-0">
        <MaxWidthWrapper>
          <div>
            {pathsToMinimize.includes(pathname) ? null : (
              <div className="pb-8 pt-16">
                <div className="flex justify-center">
                  <Icons.logo className="h-12 w-auto animate-pulse" />
                </div>
              </div>
            )}

            {pathsToMinimize.includes(pathname) ? null : (
              <div className="max-w-3xl mx-auto h-44 border p-6 rounded-xl space-y-2">
                <h1 className="font-bold">Stay up to date</h1>
                <p className="paragraph">
                  Get notified when new product are published. No spam.
                </p>

                <div className="flex items-center gap-2">
                  <Input
                    type="email"
                    placeholder="Email address"
                    className="flex-1 text-sm no-focus bg-transparent shadow-none outline-none"
                  />
                  <Button variant="outline">Join</Button>
                </div>
              </div>
            )}
          </div>
        </MaxWidthWrapper>
        <div className="border-t mt-4">
          <div className="max-w-screen-xl mx-auto px-4 md:px-10 py-4 md:flex md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} All Rights Reserved | made by{' '}
                <Link
                  href="https://twitter.com/rejaulkariim"
                  target="_blank"
                  className="underline"
                >
                  Rejaul
                </Link>
              </p>
            </div>

            <div className="flex items-center justify-center">
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
                <Link href="#" className="text-sm text-muted-foreground">
                  Terms
                </Link>
                <Link href="#" className="text-sm text-muted-foreground">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-sm text-muted-foreground">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </>
  );
};

export default Footer;
