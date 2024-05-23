import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy',
  description:
    ' When you use our services, you’re trusting us with your information.',
};

const PrivacyPage = () => {
  return (
    <main className="section-padding">
      <section className="max-w-2xl mx-auto px-4">
        <Link href="/">
          <Button variant="outline" size="sm">
            Back
          </Button>
        </Link>

        <Image
          src="/assets/images/privacy.png"
          height={200}
          width={700}
          alt="privacy"
          className="rounded-xl object-cover mt-4 h-32"
        />

        <div className="flex justify-between items-center my-4">
          <p className="text-xs uppercase font-bold">
            {siteConfig.name} Privacy Policy
          </p>
          <p className="text-xs font-bold">Updated: 2024-05-21</p>
        </div>

        <h1 className="sm:text-xl font-bold">
          When you use our services, you’re trusting us with your information.
          We understand this is a big responsibility and work hard to protect
          your information and put you in control.
        </h1>

        <div>
          <div className="mt-4">
            <h3 className="font-bold">01. Purpose of Data Collection</h3>
            <p className="paragraph">
              We use your personal data solely for processing orders, order
              confirmations, customer support, and order status updates.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="font-bold">02. Data Sharing</h3>
            <p className="paragraph">
              We do not share your personal data with any third parties, except
              as required for order processing (e.g. sharing your information
              with payment processors). We do not sell, trade, or rent your
              personal information to others.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="font-bold">03. Children&apos;s Privacy</h3>
            <p className="paragraph">
              Indie Makers is not for children under 13. We don&apos;t collect
              personal information from kids. If you&apos;re a parent or
              guardian and believe your child has given us personal information,
              please contact us at the email indiemakers.me@gmail.com.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="font-bold">04. Updates to the Privacy Policy</h3>
            <p className="paragraph">
              We reserve the right to update this Privacy Policy periodically to
              reflect changes in our practices or for operational, legal, or
              regulatory reasons. Any updates will be posted on this page, and
              we may notify you via email about significant changes.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="font-bold">05. Contact Information</h3>
            <p className="paragraph">
              If you have any questions about our Privacy Policy, contact us at
              indiemakers.me@gmail.com. For other inquiries, visit our Contact
              Us page. Your use of Indie Makers implies consent to this Privacy
              Policy.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPage;
