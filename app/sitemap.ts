import type { MetadataRoute } from 'next';
import { projects } from '@/content/projects';
import { articles } from '@/content/articles';

const base = 'https://wasif-portfolio.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ['', '/projects', '/writing', '/about', '/cv', '/contact', '/links'].map(
    (p) => ({
      url: `${base}${p}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: p === '' ? 1 : 0.8,
    }),
  );
  const projectPages = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
  const articlePages = articles.map((a) => ({
    url: `${base}/writing/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));
  return [...pages, ...projectPages, ...articlePages];
}
