import ProductCard from '@/components/design/products/ProductCard';
import HomeFilters from '@/components/shared/HomeFilters';
import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import NoResult from '@/components/shared/NoResult';

const ProductList = async ({ result }: any) => {
  return (
    <section className="section-padding">
      <MaxWidthWrapper>
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {result.length > 0 && (
            <div className="px-4">
              <HomeFilters />
            </div>
          )}

          {result.length > 0 ? (
            result.map((product: any) => (
              <ProductCard
                key={product._id}
                name={product.name}
                slug={product.slug}
                title={product.title}
                image={product.image}
                tags={product.tags}
                status={product.status}
                upvotes={product.upvotes}
                views={product.views}
                comments={product.comments}
              />
            ))
          ) : (
            <NoResult
              title="No result found"
              description="Please try different search terms."
            />
          )}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ProductList;
