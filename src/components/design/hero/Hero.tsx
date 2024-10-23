import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper'
import LocalSearchbar from '../search/LocalSearchbar'

const Hero = async () => {
  return (
    <section className='section-padding flex items-center justify-center'>
      <MaxWidthWrapper>
        <div className='mx-auto max-w-4xl text-center'>
          <div className='space-y-3'>
            <h1 className='text-balance text-5xl font-extrabold !leading-tight tracking-tight text-foreground md:text-6xl'>
              Discover and vote for the best{' '}
              <span className='bg-foreground px-2 text-background'>
                saas tools
              </span>
            </h1>
            <p className='paragraph mx-auto mt-6 max-w-xl text-foreground'>
              Explore a world of SaaS products. Search for tools, vote for your
              favorites, and help shape the future!
            </p>
          </div>

          <LocalSearchbar
            route='/'
            iconPosition='right'
            imgSrc='/assets/icons/search.svg'
            placeholder='Search for products...'
            otherClasses='mt-10 max-w-xl mx-auto rounded-xl'
          />
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Hero
