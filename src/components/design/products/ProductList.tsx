import ProductCard from '@/components/design/products/ProductCard';
import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';

const ProductList = async ({ result }: any) => {
  return (
    <section>
      <MaxWidthWrapper>
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {result.map((product: any) => (
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
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ProductList;
