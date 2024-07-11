import { getAllProducts } from '@/server/modules/product/product.action'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getAllProducts()

  const urls = products.map((product: any) => ({
    url: `${process.env.NEXT_PUBLIC_SERVER_URL}/product/${product.slug}`,
    lastModified: new Date(product.createdAt).toISOString(),
    changeFrequency: 'daily',
    priority: 0.8
  }))

  // Add additional static pages if needed
  urls.push({
    url: `${process.env.NEXT_PUBLIC_SERVER_URL}/`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily',
    priority: 1.0
  })

  return urls
}
