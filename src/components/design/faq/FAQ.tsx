import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import SectionHeader from '@/components/shared/SectionHeader';

const FAQ = () => {
  return (
    <section className="section-padding">
      <MaxWidthWrapper>
        <SectionHeader
          title={
            <span>
              Frequently Asked <span className="text-primary">Question!</span>
            </span>
          }
          subtitle="Let's answer some of the most common questions you might have about our Membership offer. If you have any other questions, feel free to reach out to us."
        />

        <div className="max-w-2xl mx-auto mt-10">
          {/* <Accordion type="single" collapsible className="w-full">
            {frequentlyAskQuestions.map((item, i) => (
              <AccordionItem value={item.question} key={i}>
                <AccordionTrigger className="flex flex-start">
                  <h1 className="paragraph font-medium text-foreground">
                    {item.question}
                  </h1>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="paragraph">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion> */}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default FAQ;
