import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://infonex.uz', lastModified: new Date() },
    { url: 'https://infonex.uz/projects', lastModified: new Date() },
  ]
}