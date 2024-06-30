import { getHotProduct } from '@/server/modules/product/product.action'
import Image from 'next/image'
import Link from 'next/link'

const RightSidebar = async () => {
  const hotProducts = await getHotProduct()

  return (
    <div className='top-24 mt-4 flex flex-col gap-2 sm:sticky'>
      <h4 className='font-bold'>Recommended</h4>
      {hotProducts.map(product => (
        <Link
          href={`/product/${product.slug}`}
          key={product._id}
          className='rounded-lg p-1.5 transition-all duration-300 hover:bg-accent'
        >
          <div className='flex items-center gap-x-2'>
            <Image
              src={product.image}
              alt={product.name}
              height={100}
              width={100}
              priority
              className='aspect-square h-8 w-8 rounded-md border object-contain'
            />
            <p className='font-semibold'>{product.name}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default RightSidebar
