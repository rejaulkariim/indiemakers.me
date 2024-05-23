import { Mdx } from '@/components/design/mdx/MdxComponents';
import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import { buttonVariants } from '@/components/ui/button';
import '@/styles/mdx.css';
import { cn, formatDate } from '@/utils/utils';
import { allAuthors, allPosts } from 'contentlayer/generated';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams({ params }: PostPageProps) {
  const slug = params?.slug?.join('/');
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams({ params });

  if (!post) {
    return {};
  }

  // const url = process.env.NEXT_PUBLIC_SERVER_URL;

  // const ogUrl = new URL(`${url}/api/og`);
  // ogUrl.searchParams.set('heading', post.title);
  // ogUrl.searchParams.set('type', 'Blog Post');
  // ogUrl.searchParams.set('mode', 'dark');

  return {
    title: post.title,
    description: post.description,
    authors: post.authors.map((author) => ({
      name: author,
    })),
    // openGraph: {
    //   title: post.title,
    //   description: post.description,
    //   type: 'article',
    //   url: absoluteUrl(post.slug),
    //   images: [
    //     {
    //       url: ogUrl.toString(),
    //       width: 1200,
    //       height: 630,
    //       alt: post.title,
    //     },
    //   ],
    // },
    // twitter: {
    //   card: 'summary_large_image',
    //   title: post.title,
    //   description: post.description,
    //   images: [ogUrl.toString()],
    // },
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps['params'][]
> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split('/'),
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams({ params });

  if (!post) {
    notFound();
  }

  const authors = post.authors.map((author) =>
    allAuthors.find(({ slug }) => slug === `/authors/${author}`)
  );

  return (
    <section className="section-padding">
      <MaxWidthWrapper>
        <article className="mt-4 max-w-3xl mx-auto">
          <div>
            {post.date && (
              <time dateTime={post.date} className="block paragraph">
                Published on {formatDate(post.date)}
              </time>
            )}
            <h2 className="mt-2 inline-block text-xl sm:text-2xl font-bold">
              {post.title}
            </h2>
            {authors?.length ? (
              <div className="mt-2 flex space-x-4">
                {authors.map((author) =>
                  author ? (
                    <Link
                      key={author._id}
                      href={`https://twitter.com/${author.twitter}`}
                      className="flex items-center space-x-2 text-sm"
                    >
                      <Image
                        src={author.avatar}
                        alt={author.title}
                        width={42}
                        height={42}
                        className="rounded-full bg-white"
                      />
                      <div className="flex-1 text-left leading-tight">
                        <p className="font-medium">{author.title}</p>
                        <p className="paragraph">@{author.twitter}</p>
                      </div>
                    </Link>
                  ) : null
                )}
              </div>
            ) : null}
          </div>
          {post.image && (
            <Image
              src={post.image}
              alt={post.title}
              width={1080}
              height={405}
              className="object-contain my-8 rounded-md border bg-muted transition-colors"
              priority
            />
          )}
          <Mdx code={post.body.code} />
          <div className="my-8">
            <Link
              href="/blog"
              className={cn(buttonVariants({ variant: 'outline' }))}
            >
              {/* <Icons.chevronLeft className="mr-2 h-4 w-4" /> */}
              See all posts
            </Link>
          </div>
        </article>
      </MaxWidthWrapper>
    </section>
  );
}
