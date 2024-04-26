import CTA from '@/components/design/cta/CTA';
import FAQ from '@/components/design/faq/FAQ';
import Feature from '@/components/design/features/Feature';
import Hero from '@/components/design/hero/Hero';
import Pricing from '@/components/design/pricing/Pricing';
import Testimonials from '@/components/design/testimonails/Testimonails';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <FAQ />
      <Pricing />
      <Testimonials />
      <CTA />
    </>
  );
}
