// Utility to generate sitemap data for dynamic content
// This can be used by edge functions to create dynamic sitemaps

export interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export const generateSitemapXML = (urls: SitemapUrl[]): string => {
  const urlEntries = urls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
};

export const getStaticPages = (): SitemapUrl[] => {
  const baseUrl = 'https://trytrimi.com';
  const today = new Date().toISOString().split('T')[0];
  
  return [
    {
      loc: `${baseUrl}/`,
      lastmod: today,
      changefreq: 'daily',
      priority: 1.0
    },
    {
      loc: `${baseUrl}/treatments`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.95
    },
    {
      loc: `${baseUrl}/treatments/semaglutide`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.95
    },
    {
      loc: `${baseUrl}/treatments/tirzepatide`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.95
    },
    {
      loc: `${baseUrl}/semaglutide-guide`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.90
    },
    {
      loc: `${baseUrl}/tirzepatide-guide`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.90
    },
    {
      loc: `${baseUrl}/how-it-works`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.85
    },
    {
      loc: `${baseUrl}/reviews`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.85
    },
    {
      loc: `${baseUrl}/faq`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.80
    },
    {
      loc: `${baseUrl}/blog`,
      lastmod: today,
      changefreq: 'daily',
      priority: 0.80
    },
    {
      loc: `${baseUrl}/compare`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.85
    },
    {
      loc: `${baseUrl}/calculators`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.75
    }
  ];
};
