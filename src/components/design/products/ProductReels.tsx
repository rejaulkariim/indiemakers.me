import ProductCard from '@/components/design/products/ProductCard'
import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper'
import NoResult from '@/components/shared/NoResult'

const ProductReels = async ({ result }: any) => {
  return (
    <section className='section-padding'>
      <MaxWidthWrapper className='max-w-screen-xl'>
        <h3 className='text-2xl font-bold md:text-3xl'>Explore</h3>
        {result.length > 0 ? (
          <div className='mt-4 flex flex-col items-center gap-10 md:mt-10'>
            <ul className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
              {result.map((product: any) => {
                return (
                  <li key={product._id} className='flex justify-center'>
                    <ProductCard
                      key={product._id}
                      name={product.name}
                      slug={product.slug}
                      title={product.title}
                      logo={product.logo}
                      tags={product.tags}
                      status={product.status}
                      upvotes={product.upvotes}
                      views={product.views}
                      comments={product.comments}
                    />
                  </li>
                )
              })}
            </ul>
          </div>
        ) : (
          <NoResult
            emptyTitle='No result found'
            emptyStateSubtext='Please try different search terms.'
          />
        )}
      </MaxWidthWrapper>
    </section>
  )
}

export default ProductReels
