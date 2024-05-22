import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import LocalSearchbar from '../search/LocalSearchbar';

const Hero = async () => {
  return (
    <section className="section-padding ">
      <MaxWidthWrapper className="max-w-3xl text-center">
        <div>
          <h1 className="text-3xl sm:text-4xl mt-2">
            Explore The Best{' '}
            <span className="font-extrabold">New Products </span> In Tech.
          </h1>
        </div>

        <LocalSearchbar
          route="/"
          iconPosition="right"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for products..."
          otherClasses="mt-4 max-w-xl mx-auto"
        />
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
