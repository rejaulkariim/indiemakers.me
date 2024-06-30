import Hero from '@/components/design/hero/Hero'
import ProductReels from '@/components/design/products/ProductReels'
import { getProducts } from '@/server/modules/product/product.action'

export default async function Home({ searchParams }: any) {
  const result = await getProducts({
    searchQuery: searchParams.q,
    filter: searchParams.filter
  })

  return (
    <>
      <Hero />
      <ProductReels result={result} />
      {/* <Newsletter /> */}
    </>
  )
}
