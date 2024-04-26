import {
  footerCompanyLinks,
  footerDocsLinks,
  footerLegalLinks,
  footerResourcesLinks,
} from '@/constants';
import Link from 'next/link';
import { Icons } from '../../shared/Icons';
import MaxWidthWrapper from '../../shared/MaxWidthWrapper';

const Footer = () => {
  return (
    <footer className="border-t md:pt-20 relative">
      {/* Gradient color */}
      <div className="footer-gradient z-0" />
      {/* Use max width wrapper container */}
      <MaxWidthWrapper>
        <div className="py-20 lg:py-20">
          <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
            <div className=" w-1/2 lg:w-1/4">
              <div>
                <Link href="/" className="flex items-center gap-2">
                  <Icons.logo className="size-5 text-cyan-500" />{' '}
                  <p className="font-semibold">App Brews</p>
                </Link>

                <p className="mb-10 mt-5 text-sm text-muted-foreground">
                  The Complete Next.js SaaS boilerplate template.⚡
                </p>
              </div>
              {/* Contact information */}
              <div>
                <p className="mb-1.5 uppercase">contact</p>
                <Link
                  href="#"
                  className="text-itemtitle font-medium text-muted-foreground"
                >
                  appbrews@gmail.com
                </Link>
              </div>
            </div>

            <div className="flex w-full flex-col gap-8 md:flex-row md:justify-between md:gap-0 lg:w-2/3 xl:w-7/12">
              {/* Documentation section */}
              <div>
                <h4 className="mb-4 font-medium">Documentation</h4>
                <ul>
                  {footerDocsLinks.map((item) => (
                    <li key={item.label} className="mb-3">
                      <Link
                        href={item.route}
                        className="text-sm text-muted-foreground hover:text-foreground transition-all"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Resources section */}
              <div>
                <h4 className="mb-4 font-medium">Resources</h4>
                <ul>
                  {footerResourcesLinks.map((item) => (
                    <li key={item.label} className="mb-3">
                      <Link
                        href={item.route}
                        className="text-sm text-muted-foreground hover:text-foreground transition-all"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Company section */}
              <div>
                <h4 className="mb-4 font-medium">Company</h4>
                <ul>
                  {footerCompanyLinks.map((item) => (
                    <li key={item.label} className="mb-3">
                      <Link
                        href={item.route}
                        className="text-sm text-muted-foreground hover:text-foreground transition-all"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Legal section */}
              <div>
                <h4 className="mb-4 font-medium">Legal</h4>
                <ul>
                  {footerLegalLinks.map((item) => (
                    <li key={item.label} className="mb-3">
                      <Link
                        href={item.route}
                        className="text-sm text-muted-foreground hover:text-foreground transition-all"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer copyright and social icons */}
        <div className="flex flex-col gap-3 md:flex-row md:justify-between items-center my-6">
          <div>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Supercharge. All rights reserved
            </p>
          </div>

          <div>
            <ul className="flex items-center gap-3">
              <li className="p-1.5 rounded-full bg-accent">
                <Link href="#" aria-label="social icon">
                  <Icons.google className="h-6 w-6" />
                </Link>
              </li>
              <li className="p-1.5 rounded-full bg-accent">
                <Link href="#" aria-label="social icon">
                  <Icons.facebook className="h-6 w-6" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
