import ProductCard from '@/components/design/products/ProductCard'
import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper'
import NoResult from '@/components/shared/NoResult'

const ProductReels = async ({ result }: any) => {
  return (
    <section className='section-padding'>
      <MaxWidthWrapper>
        {result.length > 0 ? (
          <ul className='mt-4 flex flex-col items-center gap-10 md:mt-10'>
            {result.map((product: any) => {
              return (
                <li key={product._id} className='flex justify-center'>
                  <ProductCard
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
