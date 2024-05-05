import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import Metric from '@/components/shared/Metric';
import ParseHTML from '@/components/shared/ParseHTML';
import SocialShareButton from '@/components/shared/SocialShareButton';
import Votes from '@/components/shared/Votes';
import { buttonVariants } from '@/components/ui/button';
import { getHotProduct, getProductBySlug } from '@/lib/actions/product.action';
import { getUserById } from '@/lib/actions/user.actions';
import {
  absoluteUrl,
  cn,
  formatAndDivideNumber,
  getTimestamp,
} from '@/utils/utils';
import { auth } from '@clerk/nextjs/server';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

interface Params {
  slug: string;
  clerkId: string;
}

interface PostPageProps {
  params: {
    slug: string[];
  };
}
export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const result = await getProductBySlug({ productSlug: params.slug });

  if (!result) {
    return {};
  }

  const url = process.env.NEXT_PUBLIC_SERVER_URL;

  const ogUrl = new URL(`${url}/api/og`);
  ogUrl.searchParams.set('heading', result.title);
  ogUrl.searchParams.set('type', 'Startup');
  ogUrl.searchParams.set('mode', 'dark');

  return {
    title: result.title,
    description: result.description,
    // authors: post.authors.map((author) => ({
    //   name: author,
    // })),
    openGraph: {
      title: result.title,
      description: result.description,
      type: 'website',
      url: absoluteUrl(result.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: result.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: result.title,
      description: result.description,
      images: [ogUrl.toString()],
    },
  };
}

const ProductDetailsPage = async ({ params, searchParams }: any) => {
  const { userId: clerkId } = auth();

  let mongoUser;

  if (clerkId) {
    mongoUser = await getUserById({ userId: clerkId });
  }
  const result = await getProductBySlug({ productSlug: params.slug });

  const hotProducts = await getHotProduct();

  return (
    <section className="section-padding">
      {/* <MaxWidthWrapper>
        <div className="flex-start w-full flex-col">
          <div className="flex w-full flex-col-reverse justify-between gap-5 sm:flex-row sm:items-center sm:gap-2">
            <Link
              href={`/profile`}
              className="flex items-center justify-start gap-1"
            >
              <Image
                src={result.author.picture}
                className="rounded-full"
                width={22}
                height={22}
                alt="profile"
              />
              <p className="paragraph-semibold text-dark300_light700">
                {result.author.name}
              </p>
            </Link>
            <div className="flex justify-end">
              <Votes
                type="Question"
                itemId={JSON.stringify(result._id)}
                userId={JSON.stringify('')}
                upvotes={result.upvotes.length}
                hasupVoted={result.upvotes.includes(30)}
                downvotes={result.downvotes.length}
                hasdownVoted={result.downvotes.includes(20)}
                hasSaved={mongoUser?.saved.includes(result._id)}
              />
            </div>
          </div>
          <h2 className="h2-semibold text-dark200_light900 mt-3.5 w-full text-left">
            {result.title}
          </h2>
        </div>

        <div className="mb-8 mt-5 flex flex-wrap gap-4">
          <Metric
            imgUrl="/assets/icons/clock.svg"
            alt="clock icon"
            value={` asked ${getTimestamp(result.createdAt)}`}
            title=" Asked"
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            imgUrl="/assets/icons/message.svg"
            alt="message"
            value={formatAndDivideNumber(result.answers.length)}
            title=" Answers"
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            imgUrl="/assets/icons/eye.svg"
            alt="eye"
            value={formatAndDivideNumber(result.views)}
            title=" Views"
            textStyles="small-medium text-dark400_light800"
          />
        </div>

        <ParseHTML data={result.description} />

        <div className="mt-8 flex flex-wrap gap-2">
          {result.tags.map((tag: any) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              showCount={false}
            />
          ))}
        </div>

        <AllAnswers 
        questionId={result._id}
        userId={mongoUser._id}
        totalAnswers={result.answers.length}
        page={searchParams?.page}
        filter={searchParams?.filter}
      />

        <Answer 
        question={result.content}
        questionId={JSON.stringify(result._id)}
        authorId={JSON.stringify(mongoUser._id)}
      />
      </MaxWidthWrapper> */}

      <MaxWidthWrapper>
        <div className="flex flex-col md:grid grid-cols-12 gap-6">
          <div className="col-span-9">
            <div className="flex flex-col-reverse gap-4 md:flex-row md:justify-between md:items-center">
              <div>
                <div className="flex items-center gap-4">
                  <Image
                    src={result.image}
                    height={100}
                    width={100}
                    alt="tools"
                    priority
                    className="aspect-square border p-0.5 object-contain rounded-md h-16 w-16"
                  />
                  <div className="space-y-1">
                    <h1 className="font-bold">{result.name}</h1>
                    <p className="paragraph">{result.title}</p>

                    <div className="flex flex-wrap gap-4">
                      <Metric
                        imgUrl="/assets/icons/clock.svg"
                        alt="clock icon"
                        value={`Joined ${getTimestamp(result.createdAt)}`}
                        title="Joined"
                        textStyles="text-xs paragraph"
                      />

                      <Metric
                        imgUrl="/assets/icons/eye.svg"
                        alt="eye"
                        value={formatAndDivideNumber(result.views)}
                        title="Views"
                        textStyles="text-xs paragraph"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Votes
                type="Product"
                itemId={JSON.stringify(result._id)}
                userId={JSON.stringify(mongoUser?._id)}
                upvotes={result.upvotes.length}
                hasupVoted={result.upvotes.includes(mongoUser?._id)}
                downvotes={result.downvotes.length}
                hasdownVoted={result.downvotes.includes(mongoUser?._id)}
                hasSaved={mongoUser?.saved.includes(result._id)}
              />
            </div>

            <div className="flex justify-between items-center my-10">
              {/* Social Sharing link */}
              <div>
                <SocialShareButton
                  slug={result.slug}
                  name={result.name}
                  title={result.title}
                />
              </div>
              <div>
                <Link
                  href={result.website}
                  target="_blank"
                  className={cn(buttonVariants({}))}
                >
                  Visit Website
                </Link>
              </div>
            </div>

            {/* Content */}
            <div className="mt-10">
              <ParseHTML data={result.description} />
            </div>
          </div>
          {/* RIght sidebar */}
          <div className="col-span-3">
            Recommended
            {hotProducts.map((product) => (
              <div key={product._id}>{product.name}</div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ProductDetailsPage;
