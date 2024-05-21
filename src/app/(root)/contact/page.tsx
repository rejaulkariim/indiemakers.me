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
          title={
            <span>
              <span className="font-bold">Contact</span> With Us
            </span>
          }
          subtitle="If you face any problem with our service please use the form bellow to send us an email"
        />

        <ContactForm />
      </MaxWidthWrapper>
    </section>
  );
};

export default ContactPage;
