import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import SectionHeader from '@/components/shared/SectionHeader';
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
        <SectionHeader
          title={
            <span>
              Newest <span className="font-bold">Technology</span> Trends
            </span>
          }
          subtitle="Essential Tips and Tricks for Indie Makers' Latest Releases"
        />

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
                <h2 className="text-lg font-bold">
                  {post.title.slice(0, 40)}...
                </h2>
                {post.description && (
                  <p className="paragraph">
                    {post.description.slice(0, 100)}...
                  </p>
                )}
                {post.date && (
                  <p className="paragraph text-xs font-bold">
                    {formatDate(post.date)}
                  </p>
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
