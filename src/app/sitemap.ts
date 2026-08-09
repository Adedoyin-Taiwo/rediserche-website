import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

const routes = ['/', '/about', '/platform', '/services', '/industries', '/grants-and-partnerships', '/participant-network', '/insights', '/contact', '/payments', '/privacy', '/terms'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/insights' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7
  }));
}
