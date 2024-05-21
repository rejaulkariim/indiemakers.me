import NewsletterForm from '@/components/form/NewsletterForm';
import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';

const Newsletter = () => {
  return (
    <section className="section-padding">
      <MaxWidthWrapper>
        <div className="overflow-hidden rounded-xl py-10 px-4 border bg-card">
          <div className="text-center relative max-w-xl mx-auto">
            <div className="space-y-2 mb-4">
              <h1 className="text-2xl sm:text-3xl">
                <span className="font-bold">Trending</span> Product Newsletter
              </h1>
              <p className="paragraph">
                Get updates on weekly trending product to your mailbox{' '}
                <span className="font-bold">(English only)</span>
              </p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Newsletter;
