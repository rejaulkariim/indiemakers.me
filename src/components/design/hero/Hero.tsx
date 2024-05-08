import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import { Badge } from '@/components/ui/badge';
import LocalSearchbar from '../search/LocalSearchbar';

const Hero = async () => {
  return (
    <>
      <section className="section-padding">
        <MaxWidthWrapper>
          <div className="max-w-3xl mx-auto">
            <div className="text-start">
              <Badge variant="outline" className="text-muted-foreground">
                Indie makers is now public!
              </Badge>

              <h1 className="font-bold mt-2">
                Explore Startups or Tech Products
              </h1>
              <p className="paragraph">
                Discover the excitement of innovative products build just for
                you.
              </p>
            </div>

            <div className="mt-4 flex justify-between gap-5 max-sm:flex-col sm:items-center">
              <LocalSearchbar
                route="/"
                iconPosition="right"
                imgSrc="/assets/icons/search.svg"
                placeholder="Search for products..."
                otherClasses="max-w-xl"
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default Hero;
