import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: '0bnpr7m2',
  dataset: 'production',
  apiVersion: '2026-03-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)
export const urlFor = (source: SanityImageSource) => builder.image(source)

export interface Post {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  mainImage?: {
    asset: { _ref: string }
    alt?: string
  }
  author?: string
  publishedAt?: string
  category?: string
  body?: any[]
  tags?: string[]
}

export async function getPosts(): Promise<Post[]> {
  return client.fetch(
    `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      author,
      publishedAt,
      category
    }`
  )
}

export async function getPost(slug: string): Promise<Post | null> {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      author,
      publishedAt,
      category,
      body,
      tags
    }`,
    { slug }
  )
}
