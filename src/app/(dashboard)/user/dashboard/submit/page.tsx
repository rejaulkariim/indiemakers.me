import SubmitProductForm from '@/components/form/SubmitProductForm';
import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs/server';

const SubmitProductPage = async () => {
  const { userId: clerkId } = auth();

  let mongoUser;

  if (clerkId) {
    mongoUser = await getUserById({ userId: clerkId });
  }

  return (
    <section>
      <MaxWidthWrapper className="max-w-3xl">
        <h1 className="font-bold">Submit product</h1>

        <div className="my-10">
          <SubmitProductForm
            mongoUserId={JSON.stringify(mongoUser._id)}
            creditBalance={mongoUser.creditBalance}
          />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default SubmitProductPage;
