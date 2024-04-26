import ContactForm from '@/components/form/ContactForm';
import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import SectionHeader from '@/components/shared/SectionHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
};

const ContactPage = () => {
  return (
    <section className="section-padding">
      <MaxWidthWrapper>
        <SectionHeader
          headerInfo={{
            subtitle: 'Get in touch',
            description:
              "Questions, issues, or comments? Contact us using the form below. We're here to help",
          }}
        />
        <ContactForm />
      </MaxWidthWrapper>
    </section>
  );
};

export default ContactPage;
