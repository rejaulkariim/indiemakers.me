import Hero from '@/components/design/hero/Hero';
import ProductList from '@/components/design/products/ProductList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

export default async function Home() {
  return (
    <>
      <Hero />
      <ProductList />
    </>
  );
}
