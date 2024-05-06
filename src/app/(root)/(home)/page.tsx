import Hero from '@/components/design/hero/Hero';
import ProductList from '@/components/design/products/ProductList';
import { getProducts } from '@/lib/actions/product.action';
import { SearchParamProps } from '@/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

export default async function Home({ searchParams }: SearchParamProps) {
  const result = await getProducts({
    searchQuery: searchParams.q,
    filter: searchParams.filter,
  });

  return (
    <>
      <Hero />
      <ProductList result={result} />
    </>
  );
}
