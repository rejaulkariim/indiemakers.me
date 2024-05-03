import { auth } from '@clerk/nextjs/server';
import Image from 'next/image';

import Checkout from '@/components/checkout/Checkout';
import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import { plans } from '@/constants';
import { getUserById } from '@/lib/actions/user.actions';
import { SignedIn } from '@clerk/nextjs';

const Credits = async () => {
  const { userId }: { userId: string | null } = auth();

  if (!userId) {
    return new Response('Unauthorized', { status: 401 });
  }

  const user = await getUserById(userId);

  return (
    <section className="section-padding">
      <MaxWidthWrapper>
        <ul className="grid grid-cols-1 md:grid-cols-3 border rounded-xl">
          {plans.map((plan) => (
            <li key={plan.name} className="p-8 border-r">
              <div className="flex flex-col justify-center items-center gap-3">
                <Image src={plan.icon} alt="check" width={50} height={50} />
                <p className="paragraph font-bold">{plan.name}</p>
                <p className="font-bold">${plan.price}</p>
                <p className="text-muted-foreground">{plan.credits} Credits</p>
              </div>

              {/* Inclusions */}
              <ul className="flex flex-col gap-5 py-9">
                {plan.inclusions.map((inclusion) => (
                  <li
                    key={plan.name + inclusion.label}
                    className="flex items-center gap-4"
                  >
                    <Image
                      src={`/assets/icons/${
                        inclusion.isIncluded ? 'check.svg' : 'cross.svg'
                      }`}
                      alt="check"
                      width={24}
                      height={24}
                    />
                    <p className="text-muted-foreground">{inclusion.label}</p>
                  </li>
                ))}
              </ul>

              <SignedIn>
                <Checkout
                  plan={plan.name}
                  amount={plan.price}
                  credits={plan.credits}
                  buyerId={user?._id}
                />
              </SignedIn>
            </li>
          ))}
        </ul>
      </MaxWidthWrapper>
    </section>
  );
};

export default Credits;
