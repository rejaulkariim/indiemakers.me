import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs/server';

import Image from 'next/image';

const Profile = async ({ searchParams }: any) => {
  const { userId }: { userId: string | null } = auth();

  if (!userId) {
    return new Response('Unauthorized', { status: 401 });
  }

  const user = await getUserById(userId);

  return (
    <section>
      <MaxWidthWrapper>
        <div className="border max-w-3xl mx-auto rounded-xl p-4">
          <h1 className="font-bold">CREDITS AVAILABLE</h1>
          <div className="mt-4 flex items-center gap-4">
            <Image
              src="/assets/icons/coins.svg"
              alt="coins"
              width={50}
              height={50}
              className="size-9 md:size-12"
            />
            <h2 className="h2-bold text-dark-600">{user.creditBalance}</h2>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Profile;
