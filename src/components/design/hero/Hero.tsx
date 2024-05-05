import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import { Badge } from '@/components/ui/badge';

const Hero = async () => {
  return (
    <>
      <section className="section-padding">
        <MaxWidthWrapper>
          <div className="max-w-3xl mx-auto">
            <Badge variant="outline" className="text-muted-foreground">
              Beta
            </Badge>

            <h1 className="font-bold mt-2">
              Discover Startups, AI, and Tech Products
            </h1>
            <p className="paragraph">
              Dive into the latest tech breakthroughs and startup gems.
            </p>

            {/*TODO: impelement Search */}

            {/* <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
              <LocalSearchbar
                route="/"
                iconPosition="right"
                imgSrc="/assets/icons/search.svg"
                placeholder="Search for products..."
                otherClasses="flex-1"
              />

              <Filter
                filters={HomePageFilters}
                otherClasses="min-h-[56px] sm:min-w-[170px]"
                containerClasses="hidden max-md:flex"
              />
            </div> */}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default Hero;
