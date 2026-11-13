import type { MetadataRoute } from 'next';

const base = 'https://wasifportfolio-phi.vercel.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${base}/sitemap.xml`,
  };
}
