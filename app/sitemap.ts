import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.packattackremovalltd.com';

  // Standard Static Routes
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/contact',
    '/quote',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // List of all dynamic borough pages we generated for Local SEO
  const boroughs = [
    'westminster',
    'camden',
    'chelsea',
    'islington',
    'greenwich',
    'kensington',
    'hackney',
    'wandsworth',
    'lambeth',
    'southwark',
    'tower-hamlets',
  ];

  const dynamicRoutes = boroughs.map((borough) => ({
    url: `${baseUrl}/${borough}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
