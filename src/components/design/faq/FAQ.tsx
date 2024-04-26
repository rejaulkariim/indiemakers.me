import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import SectionHeader from '@/components/shared/SectionHeader';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  return (
    <section className="section-padding">
      <MaxWidthWrapper>
        <SectionHeader
          headerInfo={{
            title: 'FAQs',
            subtitle: 'Frequently Asked Questions',
            description:
              'Answers to commonly asked questions about our SaaS boilerplate.',
          }}
        />
        <div className="max-w-screen-sm mx-auto my-10">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is a SaaS boilerplate?</AccordionTrigger>
              <AccordionContent className="paragraph">
                A SaaS (Software as a Service) boilerplate is a pre-built
                framework or template designed to help developers kickstart the
                development process of a SaaS application. It includes essential
                features, architecture, and components needed for building
                scalable and secure SaaS products.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Why should I use a SaaS boilerplate?
              </AccordionTrigger>
              <AccordionContent className="paragraph">
                Using a SaaS boilerplate can significantly accelerate your
                development process by providing a solid foundation and
                eliminating the need to reinvent the wheel. It streamlines
                common tasks, such as user authentication, subscription
                management, and payment processing, allowing you to focus more
                on building unique features for your application.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Is the SaaS boilerplate customizable?
              </AccordionTrigger>
              <AccordionContent className="paragraph">
                Yes, our SaaS boilerplate is highly customizable to suit your
                specific requirements. You can easily extend, modify, or
                integrate additional functionalities according to your project
                needs. It provides flexibility while ensuring a robust and
                maintainable codebase.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                What technologies are used in the SaaS boilerplate?
              </AccordionTrigger>
              <AccordionContent className="paragraph">
                Our SaaS boilerplate is built using modern technologies and best
                practices commonly used in web development, including but not
                limited to Node.js, Express.js, React.js, MongoDB, and Stripe
                for payment processing. It&apos;s designed to be scalable,
                secure, and efficient.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Is technical support available for the SaaS boilerplate?
              </AccordionTrigger>
              <AccordionContent className="paragraph">
                Yes, we offer technical support for our SaaS boilerplate. Our
                team of experienced developers is ready to assist you with any
                questions, issues, or customizations you may encounter during
                the development process. You can reach out to us via email or
                our support portal for prompt assistance.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default FAQ;
