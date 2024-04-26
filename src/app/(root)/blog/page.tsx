import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import { formatDate } from '@/utils/utils';

export const metadata = {
  title: 'Blog',
};

export default async function BlogPage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return (
    <section className="section-padding">
      <MaxWidthWrapper>
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="inline-block font-heading text-xl tracking-tight sm:text-2xl">
              Blog
            </h1>
            <p className="paragraph">
              A blog built using Contentlayer. Posts are written in MDX.
            </p>
          </div>
        </div>

        {posts?.length ? (
          <div className="grid gap-10 sm:grid-cols-3 my-10">
            {posts.map((post, index) => (
              <article
                key={post._id}
                className="group relative flex flex-col space-y-2"
              >
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={804}
                    height={452}
                    className="h-56 rounded-xl border bg-muted transition-colors"
                    priority={index <= 1}
                  />
                )}
                <h2 className="text-lg font-semibold">
                  {post.title.slice(0, 40)}...
                </h2>
                {post.description && (
                  <p className="paragraph">
                    {post.description.slice(0, 90)}...
                  </p>
                )}
                {post.date && (
                  <p className="paragraph">{formatDate(post.date)}</p>
                )}
                <Link href={post.slug} className="absolute inset-0">
                  <span className="sr-only">View Article</span>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p>No posts published.</p>
        )}
      </MaxWidthWrapper>
    </section>
  );
}
