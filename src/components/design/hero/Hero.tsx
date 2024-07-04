import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper'
import LocalSearchbar from '../search/LocalSearchbar'

const Hero = async () => {
  return (
    <section className='py-10 md:py-20'>
      <MaxWidthWrapper>
        <div className='mx-auto max-w-4xl space-y-3.5 text-center'>
          <h1 className='text-3xl font-extrabold md:text-4xl'>
            Find The Best <br />
            <span className='text-primary'>New Products in Tech.</span>
          </h1>
          <p className='mx-auto max-w-2xl'>
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
            otherClasses='mt-6 max-w-xl mx-auto rounded-full'
          />
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Hero
