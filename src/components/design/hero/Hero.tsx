import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper'
import LocalSearchbar from '../search/LocalSearchbar'

const Hero = async () => {
  return (
    <section className='py-10 md:py-20'>
      <MaxWidthWrapper>
        <div className='mx-auto max-w-4xl space-y-3.5'>
          <h1 className='text-3xl font-bold md:text-5xl'>
            Find The Best <br />
            <span className='text-primary'>New Products in Tech.</span>
          </h1>
          <p className='max-w-prose text-sm md:text-lg'>
            Explore a vast collection of{' '}
            <span className='font-bold'>AI Tools</span> and{' '}
            <span className='font-bold'>Tech Products</span> to enhance your
            workflow and unlock new possibilities.
          </p>

          <LocalSearchbar
            route='/'
            iconPosition='right'
            imgSrc='/assets/icons/search.svg'
            placeholder='Search for products...'
            otherClasses='mt-6 max-w-2xl rounded-full'
          />
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Hero
