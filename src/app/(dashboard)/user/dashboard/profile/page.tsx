import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs/server';

import Image from 'next/image';

const Profile = async ({ searchParams }: any) => {
  const { userId: clerkId } = auth();

  let mongoUser;

  if (clerkId) {
    mongoUser = await getUserById({ userId: clerkId });
  }

  return (
    <section>
      <MaxWidthWrapper>
        <div className="max-w-3xl mx-auto flex flex-col-reverse items-start justify-between sm:flex-row">
          <div className="flex flex-col items-start gap-4 lg:flex-row">
            <Image
              src={mongoUser?.photo}
              alt="profile picture"
              width={100}
              height={100}
              className="rounded-full object-cover"
            />

            <div className="mt-3">
              <h2 className="font-bold capitalize">
                {mongoUser.firstName} {mongoUser.lastName}
              </h2>
              <p className="paragraph-regular text-dark200_light800">
                @{mongoUser.username}
              </p>

              {/* <div className="mt-5 flex flex-wrap items-center justify-start gap-5">
              {mongoUser.portfolioWebsite && (
                <ProfileLink
                  imgUrl="/assets/icons/link.svg"
                  href={mongoUser.portfolioWebsite}
                  title="Portfolio"
                />
              )}

              {mongoUser.user.location && (
                <ProfileLink
                  imgUrl="/assets/icons/location.svg"
                  title={mongoUser.user.location}
                />
              )}

              <ProfileLink
                imgUrl="/assets/icons/calendar.svg"
                title={getJoinedDate(mongoUser.user.joinedAt)}
              />
            </div> */}

              {/* {mongoUser.user.bio && (
              <p className="paragraph-regular text-dark400_light800 mt-8">
                {mongoUser.user.bio}
              </p>
            )} */}
            </div>
          </div>

          {/* <div className="flex justify-end max-sm:mb-5 max-sm:w-full sm:mt-3">
            <SignedIn>
              {clerkId === mongoUser.clerkId && (
                <Link href="/profile/edit">
                  <Button>Edit Profile</Button>
                </Link>
              )}
            </SignedIn>
          </div> */}
        </div>

        <div className="border max-w-3xl mx-auto rounded-xl p-4 mt-10">
          <h1 className="font-bold">CREDITS AVAILABLE</h1>
          <div className="mt-4 flex items-center gap-4">
            <Image
              src="/assets/icons/coins.svg"
              alt="coins"
              width={50}
              height={50}
              className="size-9 md:size-12"
            />
            <h2 className="font-bold text-4xl">{mongoUser.creditBalance}</h2>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* <Stats
        reputation={123}
        totalQuestions={111}
        totalAnswers={651}
        badges={123}
      /> */}

      {/* 
      <div className="mt-10 flex gap-10">
        <Tabs defaultValue="top-posts" className="flex-1">
          <TabsList className="background-light800_dark400 min-h-[42px] p-1">
            <TabsTrigger value="top-posts" className="tab">
              Top Posts
            </TabsTrigger>
            <TabsTrigger value="answers" className="tab">
              Answers
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="top-posts"
            className="mt-5 flex w-full flex-col gap-6"
          >
            <QuestionTab
              searchParams={searchParams}
              userId={userInfo.user._id}
              clerkId={clerkId}
            />
          </TabsContent>
          <TabsContent value="answers" className="flex w-full flex-col gap-6">
            <AnswersTab
              searchParams={searchParams}
              userId={userInfo.user._id}
              clerkId={clerkId}
            />
          </TabsContent>
        </Tabs>
      </div> */}
    </section>
  );
};

export default Profile;
