import { allPosts } from 'contentlayer/generated'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = allPosts

  return [
    {
      url: `${process.env.NEXT_PUBLIC_SERVER_URL}`
    }
  ]
}
