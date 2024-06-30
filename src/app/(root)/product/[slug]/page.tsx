import CommentForm from '@/components/form/CommentForm'
import AllComments from '@/components/shared/AllComments'
import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper'
import Metric from '@/components/shared/Metric'
import ParseHTML from '@/components/shared/ParseHTML'
import RenderTag from '@/components/shared/RenderTag'
import RightSidebar from '@/components/shared/RightSidebar'
import SocialShareButton from '@/components/shared/SocialShareButton'
import Votes from '@/components/shared/Votes'
import { buttonVariants } from '@/components/ui/button'
import { getProductBySlug } from '@/server/modules/product/product.action'
import { getUserById } from '@/server/modules/user/user.actions'
import {
  absoluteUrl,
  cn,
  formatAndDivideNumber,
  getTimestamp
} from '@/utils/utils'
import { auth } from '@clerk/nextjs/server'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

interface Params {
  slug: string
  clerkId: string
}

interface PostPageProps {
  params: {
    slug: string
  }
}

// Generate dynamic metadata for each product submitted
export async function generateMetadata({
  params
}: PostPageProps): Promise<Metadata> {
  const product = await getProductBySlug({ slug: params.slug })

  if (!product) {
    return {}
  }

  const url = process.env.NEXT_PUBLIC_SERVER_URL

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set('heading', product.title)
  ogUrl.searchParams.set('type', 'Startup')
  ogUrl.searchParams.set('mode', 'dark')

  return {
    title: product.title,
    description: product.description,
    // authors: post.authors.map((author) => ({
    //   name: author,
    // })),
    openGraph: {
      title: product.title,
      description: product.description,
      type: 'website',
      url: absoluteUrl(product.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: product.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: product.title,
      description: product.description,
      images: [ogUrl.toString()]
    }
  }
}

const ProductDetailsPage = async ({ params, searchParams }: any) => {
  const { userId } = auth()

  const mongoUser = await getUserById({ userId })

  const product = await getProductBySlug({ slug: params.slug })

  // Check if the current user has upvoted the product
  const hasUpvoted: boolean = product.upvotes.some((upvote: any) =>
    upvote._id.equals(mongoUser._id)
  )

  return (
    <section className='section-padding'>
      <MaxWidthWrapper>
        <div className='flex grid-cols-12 flex-col gap-10 md:grid'>
          {/* Left sidebar */}
          <div className='col-span-9'>
            <div className='flex flex-col-reverse gap-4 md:flex-row md:items-center md:justify-between'>
              <div className='flex items-center gap-4'>
                <Image
                  src={product.image}
                  height={100}
                  width={100}
                  alt='tools'
                  priority
                  className='aspect-square h-12 w-12 rounded-md border object-contain'
                />
                <div className='space-y-1'>
                  <h1 className='font-bold'>{product.name}</h1>
                  <p className='paragraph'>{product.title}</p>

                  <div className='flex flex-wrap gap-4'>
                    <Metric
                      imgUrl='/assets/icons/clock.svg'
                      alt='clock icon'
                      value={`${getTimestamp(product.createdAt)}`}
                      title='created'
                      textStyles='text-xs paragraph'
                    />

                    <Metric
                      imgUrl='/assets/icons/eye.svg'
                      alt='eye'
                      value={formatAndDivideNumber(product.views)}
                      title='Views'
                      textStyles='text-xs paragraph'
                    />
                  </div>
                </div>
              </div>

              <Votes
                type='Product'
                itemId={JSON.stringify(product._id)}
                userId={JSON.stringify(mongoUser?._id)}
                upvotes={product.upvotes.length}
                hasupVoted={hasUpvoted}
                downvotes={product.downvotes.length}
                hasdownVoted={product.downvotes.includes(mongoUser?._id)}
                hasSaved={mongoUser?.saved.includes(product._id.toString())}
              />
            </div>

            <div className='my-10 flex items-center justify-between'>
              {/* Social Sharing link */}
              <div className='flex h-10 w-10 items-center justify-center rounded-lg border transition-all duration-300 hover:bg-accent'>
                <SocialShareButton
                  slug={product.slug}
                  name={product.name}
                  title={product.title}
                />
              </div>
              <div>
                <Link
                  href={`${product.website}?ref=indiemakers`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={cn(buttonVariants({ variant: 'outline' }))}
                >
                  Visit Website
                </Link>
              </div>
            </div>

            {/* Content */}
            <div className='mt-10'>
              <ParseHTML data={product.description} />
            </div>

            <div className='mt-8 flex flex-wrap gap-2'>
              {product.tags.map((tag: any) => (
                <RenderTag
                  key={tag._id}
                  _id={tag._id}
                  name={tag.name}
                  showCount={false}
                />
              ))}
            </div>

            {/* Show if the upvotes is available  */}
            {product.upvotes.length > 0 && (
              <div className='mt-8 space-y-2'>
                <p className='text-sm'>Contributors</p>
                <div className='flex flex-wrap gap-2'>
                  {product.upvotes.map((vote: any) => (
                    <div key={vote._id}>
                      <Image
                        src={vote.photo}
                        height={100}
                        width={100}
                        alt={vote?.username}
                        className='aspect-square h-7 w-7 rounded-full border'
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <AllComments
              productId={product._id}
              userId={mongoUser?._id}
              totalComments={product.comments.length}
            />

            {/* Comment  Form*/}
            <CommentForm
              product={product.name}
              productId={JSON.stringify(product._id)}
              authorId={JSON.stringify(mongoUser?._id)}
            />
          </div>

          {/* RIght sidebar */}
          <div className='col-span-3'>
            <RightSidebar />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default ProductDetailsPage
