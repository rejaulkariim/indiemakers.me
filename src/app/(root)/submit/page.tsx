import SubmitProductForm from '@/components/form/SubmitProductForm'
import { InsufficientCreditsModal } from '@/components/modal/InsufficientCreditsModal'
import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper'
import { getUserById } from '@/server/modules/user/user.actions'
import { auth } from '@clerk/nextjs/server'

const SubmitProductPage = async () => {
  const { userId }: { userId: string | null } = auth()

  const mongoUser = await getUserById({ userId })

  if (!mongoUser?.isRegistered) {
    return (
      <InsufficientCreditsModal mongoUserId={JSON.stringify(mongoUser?._id)} />
    )
  }

  return (
    <section className='section-padding'>
      <MaxWidthWrapper className='max-w-3xl'>
        <h1 className='font-bold'>Submit product</h1>

        <div className='my-10'>
          <SubmitProductForm
            mongoUserId={JSON.stringify(mongoUser?._id)}
            creditBalance={mongoUser?.creditBalance}
          />
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default SubmitProductPage
