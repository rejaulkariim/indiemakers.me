import SubmitProductForm from '@/components/form/SubmitProductForm';
import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

const SubmitProductPage = async () => {
  const { userId } = auth();

  if (!userId) redirect('/sign-in');

  const mongoUser = await getUserById(userId);

  console.log(mongoUser);

  return (
    <section>
      <MaxWidthWrapper className="max-w-3xl">
        <h1 className="font-bold">Submit product</h1>

        <div className="my-10">
          <SubmitProductForm mongoUserId={JSON.stringify(mongoUser._id)}/>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default SubmitProductPage;
