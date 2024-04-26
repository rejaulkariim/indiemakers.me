import FeatureCard from '@/components/design/features/FeatureCard';
import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import SectionHeader from '@/components/shared/SectionHeader';
import { features } from '@/constants';

const Feature = () => {
  return (
    <section id="features" className="section-padding">
      <MaxWidthWrapper>
        <SectionHeader
          headerInfo={{
            title: 'Features',
            subtitle: 'Power Your Web App',
            description:
              'Seamlessly manage authentication, streamline emails, handle databases, secure payments, and optimize for search engines.',
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full my-6 md:my-10">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Feature;
