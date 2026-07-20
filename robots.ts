import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    // Replace with your actual domain once deployed
    sitemap: 'https://www.packattackremovalltd.com/sitemap.xml',
  }
}