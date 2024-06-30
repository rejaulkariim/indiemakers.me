import { auth } from '@clerk/nextjs/server'
import Image from 'next/image'

import Checkout from '@/components/checkout/Checkout'
import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper'
import SectionHeader from '@/components/shared/SectionHeader'
import { plans } from '@/constants'
import { getUserById } from '@/server/modules/user/user.actions'
import { SignedIn } from '@clerk/nextjs'

const Credits = async ({ searchParams }: any) => {
  const { userId: clerkId } = auth()

  let mongoUser: { _id: string }

  if (clerkId) {
    mongoUser = await getUserById({ userId: clerkId })
  }

  return (
    <section className='section-padding'>
      <MaxWidthWrapper className='max-w-3xl'>
        <SectionHeader
          title={
            <span>
              Get <span className='font-bold'>Credits</span> to Publish Your
              Products
            </span>
          }
          subtitle='Easily top up your credits to keep publishing.'
        />

        <ul className='mt-6 grid grid-cols-1 gap-10 rounded-xl md:grid-cols-2'>
          {plans.map(plan => (
            <li key={plan.name} className='rounded-xl border p-8'>
              <div className='flex flex-col items-center justify-center gap-3'>
                <Image src={plan.icon} alt='check' width={50} height={50} />
                <p className='paragraph font-bold'>{plan.name}</p>
                <p className='text-2xl font-bold'>${plan.price}</p>
                <p className='text-muted-foreground'>{plan.credits} Credits</p>
              </div>

              {/* Inclusions */}
              <ul className='flex flex-col gap-5 py-9'>
                {plan.inclusions.map(inclusion => (
                  <li
                    key={plan.name + inclusion.label}
                    className='flex items-center gap-4'
                  >
                    <Image
                      src={`/assets/icons/${
                        inclusion.isIncluded ? 'check.svg' : 'cross.svg'
                      }`}
                      alt='check'
                      width={24}
                      height={24}
                    />
                    <p className='text-muted-foreground'>{inclusion.label}</p>
                  </li>
                ))}
              </ul>

              <SignedIn>
                <Checkout
                  plan={plan.name}
                  amount={plan.price}
                  credits={plan.credits}
                  buyerId={mongoUser?._id}
                />
              </SignedIn>
            </li>
          ))}
        </ul>
      </MaxWidthWrapper>
    </section>
  )
}

export default Credits
