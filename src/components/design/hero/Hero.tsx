import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const Hero = async () => {
  return (
    <>
      <section className="section-padding">
        <MaxWidthWrapper>
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <Badge variant="outline" className="text-muted-foreground">
              Indie Makers is Now Public!
            </Badge>

            <h1 className="text-3xl font-bold">
              Discover Startup & AI Product on the Earth
            </h1>
            <p>
              The most complete tools database. Discover useful tools for all
              your needs. Updated daily.
            </p>
            <Input placeholder="Search..." className="max-w-xl mx-auto" />
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default Hero;
