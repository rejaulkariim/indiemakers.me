import Image from 'next/image';
import Link from 'next/link';
import MaxWidthWrapper from '../../shared/MaxWidthWrapper';
import { Button } from '../../ui/button';

const Hero = () => {
  return (
    <section className="bg-primary-50 h-screen bg-dotted-pattern bg-contain section-padding">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 relative">
          {/* Gradient color */}
          <div className="hero-gradient z-0" />
          <div className="flex flex-col justify-center gap-4 space-y-2">
            <p className="p-regular">
              App Brews - The Complete Next.js SaaS boilerplate template.⚡
            </p>
            <h1 className="h1-bold">Ship Startup Faster.</h1>
            <p className="paragraph">
              Launch your SaaS startup effortlessly with a complete package. It
              includes key features like Authentication, Database, Payment,
              Email, Blog, UI Components, and Business Pages.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-4">
              <Button asChild className="button w-full sm:w-fit" size="lg">
                <Link href="#events">Explore Now</Link>
              </Button>
              <Button asChild className="button w-full sm:w-fit" size="lg">
                <Link href="#features">See Features</Link>
              </Button>
            </div>
          </div>
          {/* Hero image */}
          <div>
            <Image
              src="/assets/images/hero-1.avif"
              alt="hero"
              width={1000}
              height={1000}
              className="max-h-[70vh] object-cover object-center rounded-lg"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
