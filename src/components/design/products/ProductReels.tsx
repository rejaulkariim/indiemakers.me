import ProductCard from '@/components/design/products/ProductCard'
import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper'
import NoResult from '@/components/shared/NoResult'

const ProductReels = async ({ result }: any) => {
  return (
    <section className='section-padding'>
      <MaxWidthWrapper className='max-w-5xl'>
        {result.length > 0 ? (
          <div className='flex flex-col items-center gap-10'>
            <ul className='grid w-full grid-cols-1 gap-4 md:grid-cols-2'>
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
