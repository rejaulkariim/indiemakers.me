import CommentForm from '@/components/form/CommentForm';
import AllComments from '@/components/shared/AllComments';
import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import Metric from '@/components/shared/Metric';
import ParseHTML from '@/components/shared/ParseHTML';
import RenderTag from '@/components/shared/RenderTag';
import RightSidebar from '@/components/shared/RightSidebar';
import SocialShareButton from '@/components/shared/SocialShareButton';
import Votes from '@/components/shared/Votes';
import { buttonVariants } from '@/components/ui/button';
import { getProductBySlug } from '@/lib/actions/product.action';
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
    slug: string;
  };
}
export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const result = await getProductBySlug({ slug: params.slug });

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

  console.log(mongoUser, 'MongoUser');

  const result = await getProductBySlug({ slug: params.slug });

  return (
    <section className="section-padding">
      <MaxWidthWrapper>
        <div className="flex flex-col md:grid grid-cols-12 gap-10">
          {/* Left sidebar */}
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
                hasSaved={mongoUser?.saved.includes(result._id.toString())}
              />
            </div>

            <div className="flex justify-between items-center my-10">
              {/* Social Sharing link */}
              <div className="border h-10 w-10 flex justify-center items-center rounded-lg hover:bg-accent transition-all duration-300">
                <SocialShareButton
                  slug={result.slug}
                  name={result.name}
                  title={result.title}
                />
              </div>
              <div>
                <Link
                  href={`${result.website}?ref=indiemakers`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: 'default', size: 'sm' })
                  )}
                >
                  Visit Website
                </Link>
              </div>
            </div>

            {/* Content */}
            <div className="mt-10">
              <ParseHTML data={result.description} />
            </div>

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

            <AllComments
              productId={result._id}
              userId={mongoUser?._id}
              totalComments={result.comments.length}
            />

            {/* Comment  Form*/}
            <CommentForm
              product={result.name}
              productId={JSON.stringify(result._id)}
              authorId={JSON.stringify(mongoUser?._id)}
            />
          </div>

          {/* RIght sidebar */}
          <div className="col-span-3">
            <RightSidebar />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ProductDetailsPage;
