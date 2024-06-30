import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper'
import LocalSearchbar from '../search/LocalSearchbar'

const Hero = async () => {
  return (
    <section className='pt-10'>
      <MaxWidthWrapper>
        <div className='mx-auto max-w-4xl space-y-2 text-center'>
          <h1 className='text-3xl font-bold text-primary sm:text-4xl'>
            Find The Best New Products in Tech.
          </h1>
          <p className='mx-auto max-w-xl text-sm md:text-lg'>
            Discover AI tools for all your needs, updated daily. Simply type in
            a function such as Music or Design.
          </p>
        </div>

        <LocalSearchbar
          route='/'
          iconPosition='right'
          imgSrc='/assets/icons/search.svg'
          placeholder='Search for products...'
          otherClasses='mt-6 max-w-xl mx-auto rounded-2xl'
        />
      </MaxWidthWrapper>
    </section>
  )
}

export default Hero
