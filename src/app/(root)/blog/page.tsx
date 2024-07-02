import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'

import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper'
import { formatDate } from '@/utils/utils'

export const metadata = {
  title: 'Blog'
}

export default async function BlogPage() {
  const posts = allPosts
    .filter(post => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <section className='section-padding'>
      <MaxWidthWrapper>
        <div className='space-y-2'>
          <h1 className='text-3xl font-bold md:text-4xl'>Blogs</h1>
          <p className='max-w-prose text-lg text-muted-foreground'>
            We share in-depth reviews and essential information about every
            product listed on our platform, ensuring you have all the details
            you need to make informed decisions.
          </p>
        </div>
        {posts?.length ? (
          <div className='my-10 grid grid-cols-1 gap-10 md:grid-cols-3'>
            {posts.map((post, index) => (
              <article
                key={post._id}
                className='group relative flex flex-col space-y-2'
              >
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={804}
                    height={452}
                    className='h-56 rounded-xl border bg-muted transition-colors'
                    priority={index <= 1}
                  />
                )}
                <h3 className='text-xl font-bold'>{post.title}</h3>
                {post.description && (
                  <p className='text-muted-foreground'>
                    {post.description.slice(0, 100)}...
                  </p>
                )}
                {post.date && (
                  <p className='paragraph text-xs font-bold'>
                    {formatDate(post.date)}
                  </p>
                )}
                <Link href={post.slug} className='absolute inset-0'>
                  <span className='sr-only'>View Article</span>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p>No posts published.</p>
        )}
      </MaxWidthWrapper>
    </section>
  )
}
