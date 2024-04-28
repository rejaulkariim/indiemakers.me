import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import { Button, buttonVariants } from '@/components/ui/button';
import { products } from '@/constants';
import { cn } from '@/utils/utils';
import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';

interface Params {
  slug: string;
}

const ToolsDetailsPage = ({ params }: { params: Params }) => {
  const { userId } = auth();
  if (!userId) redirect('/sign-in');
  const product = products.find((product) => product.slug === params.slug);

  return (
    <section>
      <MaxWidthWrapper>
        <div className="sm:grid sm:grid-cols-12 gap-6  mt-10">
          {/* Left */}
          <div className="col-span-9">
            <h1 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              Overview
            </h1>

            {/* <div className="space-y-4">
              {product?.overview.map((overview, i) => (
                <p key={i} className="paragraph">
                  {overview}
                </p>
              ))}
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-3 border p-2 rounded-xl mt-10">
              <div className="md:border-r p-4 w-64">
                <h1 className="text-xl font-bold text-foreground">
                  <span className="text-primary">Stunning</span> Features
                </h1>
                {/* <ul className="mt-4">
                  {product?.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 mt-2">
                      <Icons.add className="h-4 w-4 p-0.5 bg-primary rounded-xl text-white" />
                      {feature}
                    </li>
                  ))}
                </ul> */}
              </div>

              <div className="md:border-r p-4 w-64">
                <h1 className="text-xl font-bold text-foreground">
                  <span className="text-primary">Amazing</span> Benifits
                </h1>
                <ul>
                  {/* {product?.benifits?.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 mt-2">
                      <Icons.add className="h-4 w-4 p-0.5 bg-primary rounded-xl text-white" />
                      {feature}
                    </li>
                  ))} */}
                </ul>
              </div>

              <div className="p-4 w-64">
                <h1 className="text-xl font-bold text-foreground">
                  <span className="text-primary">Components</span> Included
                </h1>
                <ul>
                  {/* {product?.components?.map((component, i) => (
                    <li key={i} className="flex items-center gap-2 mt-2">
                      <Icons.add className="h-4 w-4 p-0.5 bg-primary rounded-xl text-white" />
                      {component}
                    </li>
                  ))} */}
                </ul>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="col-span-3 mt-6 md:mt-0 ">
            <div className="border p-4 rounded-xl mb-4 space-y-2">
              <div>
                <h1 className="text-base sm:text-lg font-bold text-foreground">
                  Product Type
                </h1>
                {/* <p>{product?.category}</p>{' '} */}
              </div>

              <div>
                <h1 className="text-base sm:text-lg font-bold text-foreground">
                  Category
                </h1>
                {/* <p>{product?.category}</p> */}
              </div>
              <div>
                <h1 className="text-base sm:text-lg font-bold text-foreground">
                  Price
                </h1>
                {/* <p>${product?.price}</p> */}
              </div>

              <Link
                href={''}
                className={cn(buttonVariants(), `w-full text-white`)}
              >
                {/* Buy Now ${product?.price} */}
              </Link>
              <Link
                href={''}
                className={cn(buttonVariants({ variant: 'outline' }), `w-full`)}
              >
                Live Demo
              </Link>
            </div>
            <div className="border p-4 rounded-xl space-y-2">
              <h1 className="text-xl text-foreground font-bold">Need help?</h1>
              <p className="text-sm text-muted-foreground">
                Need some help while using the Template or have any queries?
                We&aposre here to help!
              </p>

              <Button className="text-white">Contact</Button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ToolsDetailsPage;
