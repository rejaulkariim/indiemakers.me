import Link from 'next/link';

import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  return (
    <section className="section-padding">
      <MaxWidthWrapper>
        <div className="md:max-w-3xl md:mx-auto">
          <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
            <h1 className="font-bold">All Products</h1>

            <Link
              href="/user/dashboard/submit"
              className="flex justify-end max-sm:w-full"
            >
              <Button>New Product</Button>
            </Link>
          </div>

          <div className="mb-12 mt-11 flex flex-wrap items-center justify-between gap-5">
            <Skeleton className="h-14 flex-1" />
            <div className="hidden max-md:block">
              <Skeleton className="h-14 w-28" />
            </div>
          </div>

          <div className="my-10 hidden flex-wrap gap-6 md:flex">
            <Skeleton className="h-9 w-40" />
            <Skeleton className="h-9 w-40" />
            <Skeleton className="h-9 w-40" />
            <Skeleton className="h-9 w-40" />
          </div>

          <div className="flex flex-col gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <Skeleton key={item} className="h-48 w-full rounded-xl" />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Loading;
