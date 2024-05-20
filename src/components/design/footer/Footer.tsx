'use client';

import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { cn } from '@/utils/utils';
import Link from 'next/link';

const Footer = () => {
  const footerLink = [
    {
      title: 'Privacy',
      route: '/privacy',
    },
  ];
  return (
    <footer className="flex-grow-0">
      <div className="border-t">
        <div className="max-w-screen-xl mx-auto px-4 md:px-10 py-4 md:flex md:items-center md:justify-between">
          <div className="flex items-center gap-10">
            <p className="font-bold text-lg">{siteConfig.name}</p>
            {footerLink.map((item) => (
              <Link key={item.title} href={item.route}>
                {item.title}
              </Link>
            ))}
          </div>

          <div className="mt-1">
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
