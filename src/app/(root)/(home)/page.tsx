import Hero from '@/components/design/hero/Hero';
import Newsletter from '@/components/design/newsletter/Newsletter';
import ProductList from '@/components/design/products/ProductList';
import { getProducts } from '@/lib/actions/product.action';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

export default async function Home({ searchParams }: any) {
  const result = await getProducts({
    searchQuery: searchParams.q,
    filter: searchParams.filter,
  });

  return (
    <>
      <Hero />
      <ProductList result={result} />
      <Newsletter />
    </>
  );
}
