import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/utils/utils';
import Link from 'next/link';

const HowItWorksPage = () => {
  return (
    <section className="bg-primary-50 bg-dotted-pattern bg-contain section-padding relative">
      {/* Gradient color */}
      <div className="hero-gradient z-0" />
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h2 className="text-2xl sm:text-5xl font-bold text-foreground">
            Discover and Showcase Your Products to the World
          </h2>

          <p className="mt-6 text-lg max-w-2xl text-muted-foreground">
            Discover groundbreaking products from fellow innovators and showcase
            your own to a global audience. It&apos;s time to share your
            brilliance with the world.
          </p>

          <div className="flex gap-4 mt-6">
            <Link href="/" className={cn(buttonVariants())}>
              Browse All Products &rarr;
            </Link>
            <Link
              href="/user/dashboard/submit"
              className={cn(buttonVariants({ variant: 'outline' }))}
            >
              Submit a Product &rarr;
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HowItWorksPage;
