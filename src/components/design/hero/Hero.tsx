import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper'
import { products } from '@/constants'
import Image from 'next/image'
import LocalSearchbar from '../search/LocalSearchbar'

const Hero = async () => {
  return (
    <section className='section-padding'>
      <MaxWidthWrapper>
        <div className='mx-auto max-w-3xl text-center'>
          <h1 className='mt-2 text-3xl font-bold text-primary sm:text-4xl'>
            Find The Best AI Tools & Apps
          </h1>
          <p>
            The most complete AI tools database. Discover 18092+ AI tools for
            all your needs. Updated daily. Simply type in a function like
            'music' or 'design'.
          </p>
        </div>

        <LocalSearchbar
          route='/'
          iconPosition='right'
          imgSrc='/assets/icons/search.svg'
          placeholder='Search for products...'
          otherClasses='mt-4 max-w-xl mx-auto rounded-2xl'
        />

        <div className='mt-20 grid grid-cols-2 gap-4 md:grid-cols-4'>
          {products.map(product => (
            <div key={product.name} className='rounded-2xl border p-2'>
              <Image
                src={product.thumbnail}
                height={300}
                width={300}
                alt='image'
                className='rounded-xl'
              />
              <h3>{product.name}</h3>
              <p>{product.title}</p>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Hero
