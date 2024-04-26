import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="section-padding">
      <MaxWidthWrapper>
        <div className="text-center space-y-4 border py-20 rounded-2xl bg-accent relative">
          {/* Gradient color */}
          <div className="footer-gradient z-0" />
          <h2 className="h2-bold">Ready to get started?</h2>
          <p className="max-w-xl mx-auto p-regular">
            Sign up now and unleash the power of our SaaS boilerplate. Sign up
            now and unleash the power of our SaaS boilerplate.
          </p>
          <Button className="button" asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default CTA;
