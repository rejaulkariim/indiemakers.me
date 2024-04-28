import SuggestProductModal from '@/components/modal/SuggestProductModal';
import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { products } from '@/constants';
import ProductCard from './ProductCard';

const ProductList = () => {
  const featuredProduct = products.filter(
    (product) => product.status === 'Featured'
  );
  const trendingProduct = products.filter(
    (product) => product.status === 'Trending'
  );
  const newProduct = products.filter((product) => product.status === 'New');

  return (
    <section>
      <MaxWidthWrapper>
        <Tabs defaultValue="all" className="md:max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <TabsList className="bg-transparent flex items-center gap-2">
              <TabsTrigger
                value="all"
                className="px-4 py-0.5 border rounded-full text-xs"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="featured"
                className="px-4 py-0.5 border rounded-full text-xs"
              >
                Featured
              </TabsTrigger>
              <TabsTrigger
                value="trending"
                className="px-4 py-0.5 border rounded-full text-xs"
              >
                Trending
              </TabsTrigger>
              <TabsTrigger
                value="new"
                className="px-4 py-0.5 border rounded-full text-xs"
              >
                Latest
              </TabsTrigger>
            </TabsList>
            <SuggestProductModal />
          </div>
          <TabsContent value="all">
            <div className="flex flex-col gap-8">
              {products.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="featured">
            <div className="flex flex-col gap-8">
              {featuredProduct.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="trending">
            <div className="flex flex-col gap-8">
              {trendingProduct.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="new">
            <div className="flex flex-col gap-4">
              {newProduct.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </MaxWidthWrapper>
    </section>
  );
};

export default ProductList;
