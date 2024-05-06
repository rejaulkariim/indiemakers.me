import HomeFilters from '@/components/shared/HomeFilters';
import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import { Badge } from '@/components/ui/badge';
import LocalSearchbar from '../search/LocalSearchbar';

const Hero = async () => {
  return (
    <>
      <section className="section-padding">
        <MaxWidthWrapper>
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-2">
              <Badge variant="outline" className="text-muted-foreground">
                Indie makers is now live!
              </Badge>

              <h1 className="font-bold mt-2 text-xl sm:text-3xl">
                Explore Startups and Tech Products
              </h1>
              <p className="paragraph sm:max-w-xl mx-auto">
                Discover the excitement of innovative products build just for
                you.
              </p>
            </div>

            <div className="mt-6 flex justify-between gap-5 max-sm:flex-col sm:items-center">
              <LocalSearchbar
                route="/"
                iconPosition="right"
                imgSrc="/assets/icons/search.svg"
                placeholder="Search for products..."
                otherClasses="flex-1"
              />

              {/* <Filter
                filters={HomePageFilters}
                otherClasses="min-h-[56px] sm:min-w-[170px]"
                containerClasses="hidden max-md:flex"
              /> */}
            </div>
            <div className="mt-6">
              <HomeFilters />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default Hero;
