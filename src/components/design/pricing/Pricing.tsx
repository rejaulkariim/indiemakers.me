import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import SectionHeader from '@/components/shared/SectionHeader';
import { stripePlan } from '@/config/stripe';

const Pricing = () => {
  return (
    <section className="section-padding" id="pricing">
      <MaxWidthWrapper>
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            headerInfo={{
              title: 'Pricing',
              subtitle: 'Save hours of repetitive work.',
              description:
                'Avoid spending hours on coding and focus on what matters.',
            }}
          />

          <div className="mt-10 relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
            {stripePlan.plans.map((plan, index) => (
              <div key={index} className="relative w-full max-w-lg">
                {plan.isFeatured && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <span
                      className={`text-xs border-0 rounded-full px-2  py-1 bg-primary text-teal-50`}
                    >
                      MOST POPULAR
                    </span>
                  </div>
                )}

                {plan.isFeatured && (
                  <div
                    className={`absolute -inset-[1px] rounded-full bg-accent z-10`}
                  />
                )}

                <div className="bg-card relative border flex flex-col h-full gap-5 lg:gap-8 z-10 p-8 rounded-2xl shadow-sm">
                  <div className="flex justify-between items-center gap-4">
                    <div>
                      <p className="p-regular">{plan.name}</p>
                      {plan.description && (
                        <p className="p-regular">{plan.description}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {plan.priceAnchor && (
                      <div className="flex flex-col justify-end mb-[4px] text-lg ">
                        <p className="relative">
                          <span className="absolute bg-base-content h-[1.5px] inset-x-0 top-[53%]"></span>
                          <span className="line-through h5-bold text-gray-300">
                            ${plan.priceAnchor}
                          </span>
                        </p>
                      </div>
                    )}
                    <h2 className={`h1-bold text-primary`}>${plan.price}</h2>
                    <div className="flex flex-col justify-end mb-[4px]">
                      <h4 className="h5-bold">USD</h4>
                    </div>
                  </div>
                  {plan.features && (
                    <ul className="space-y-2.5 leading-relaxed flex-1">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className={`w-[18px] h-[18px] shrink-0 ${
                              feature.disabled ? 'text-muted' : 'text-primary'
                            }`}
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clipRule="evenodd"
                            />
                          </svg>

                          <p
                            className={`paragraph${
                              feature.disabled ? 'text-muted' : 'parargaph'
                            }, `}
                          >
                            {feature.name}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Pricing;
