import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper'
import LocalSearchbar from '../search/LocalSearchbar'

const Hero = async () => {
  return (
    <section className='section-padding flex items-center justify-center'>
      <MaxWidthWrapper>
        <div className='mx-auto max-w-5xl text-center'>
          <div className='space-y-3'>
            <h1 className='text-balance text-5xl font-extrabold uppercase !leading-tight tracking-tight text-foreground md:text-5xl'>
              Pitch Your Startup, <br />
              Connect With Entrepreneurs
            </h1>
            <p className='paragraph'>
              Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
              Competitions.
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
