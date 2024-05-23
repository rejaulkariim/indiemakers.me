import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms',
  description:
    'By using our services, you agree to the following terms and conditions. Please read them carefully.',
};

const TermsPage = () => {
  return (
    <main className="section-padding">
      <section className="max-w-2xl mx-auto px-4">
        <Link href="/">
          <Button variant="outline" size="sm">
            Back
          </Button>
        </Link>

        <Image
          src="/assets/images/terms.png"
          height={200}
          width={700}
          alt="terms"
          className="rounded-xl object-cover mt-4 h-32"
        />

        <div className="flex justify-between items-center my-4">
          <p className="text-xs uppercase font-bold">
            {siteConfig.name} Terms and Conditions
          </p>
          <p className="text-xs font-bold">Updated: 2024-05-21</p>
        </div>

        <h1 className="sm:text-xl font-bold">
          By using our services, you agree to the following terms and
          conditions. Please read them carefully.
        </h1>

        <div>
          <div className="mt-4">
            <h3 className="font-bold">01. Acceptance of Terms</h3>
            <p className="paragraph">
              By accessing and using our services, you accept and agree to be
              bound by the terms and provisions of this agreement. In addition,
              when using these services, you shall be subject to any posted
              guidelines or rules applicable to such services.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="font-bold">02. Use of the Site</h3>
            <p className="paragraph">
              You agree to use the site for lawful purposes only. You must not
              use the site in any way that causes, or may cause, damage to the
              site or impairment of the availability or accessibility of the
              site.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="font-bold">03. Intellectual Property</h3>
            <p className="paragraph">
              All content included on the site, such as text, graphics, logos,
              images, and software, is the property of Indie Makers or its
              content suppliers and is protected by international copyright
              laws.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="font-bold">04. Limitation of Liability</h3>
            <p className="paragraph">
              Indie Makers will not be liable for any indirect, incidental, or
              consequential damages arising out of the use or inability to use
              our services, even if we have been advised of the possibility of
              such damages.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="font-bold">05. Governing Law</h3>
            <p className="paragraph">
              These terms and conditions are governed by and construed in
              accordance with the laws of the jurisdiction in which Indie Makers
              operates, and you irrevocably submit to the exclusive jurisdiction
              of the courts in that State or location.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="font-bold">06. Changes to Terms</h3>
            <p className="paragraph">
              We reserve the right to make changes to these terms and conditions
              at any time. Any changes will be posted on this page, and we may
              notify you via email about significant changes.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="font-bold">07. Contact Information</h3>
            <p className="paragraph">
              If you have any questions about these Terms and Conditions,
              contact us at indiemakers.me@gmail.com. For other inquiries, visit
              our Contact Us page. Your use of Indie Makers implies consent to
              these Terms and Conditions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsPage;
