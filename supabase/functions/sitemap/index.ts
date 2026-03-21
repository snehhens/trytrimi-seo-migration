import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface SitemapData {
  baseUrl: string;
  staticPages: Array<{ path: string; priority: string; changefreq: string }>;
  blogPosts: Array<{ slug: string; date: string; path: string; lastmod?: string }>;
}

async function fetchSitemapData(): Promise<SitemapData> {
  try {
    const res = await fetch('https://trytrimi.com/sitemap-data.json?t=' + Date.now());
    if (!res.ok) throw new Error('Failed to fetch sitemap data');
    return await res.json();
  } catch (error) {
    console.error('Error fetching sitemap data:', error);
    // Fallback to minimal data
    return {
      baseUrl: 'https://trytrimi.com',
      staticPages: [{ path: '/', priority: '1.0', changefreq: 'daily' }],
      blogPosts: []
    };
  }
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data = await fetchSitemapData();
    const today = new Date().toISOString().split('T')[0];

    console.log(`Generating sitemap with ${data.staticPages.length} static pages and ${data.blogPosts.length} blog posts`);

    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" ';
    sitemap += 'xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

    // Build list and de-duplicate by absolute loc
    const urls: Array<{ loc: string; lastmod: string; changefreq: string; priority: string }> = [];

    // Add static pages
    for (const page of data.staticPages) {
      urls.push({
        loc: `${data.baseUrl}${page.path}`,
        lastmod: today,
        changefreq: page.changefreq,
        priority: page.priority,
      });
    }

    // Add blog posts
    for (const post of data.blogPosts) {
      urls.push({
        loc: `${data.baseUrl}${post.path}`,
        lastmod: post.lastmod || post.date,
        changefreq: 'monthly',
        priority: '0.75',
      });
    }

    const seen = new Set<string>();
    const unique = urls.filter(u => {
      if (seen.has(u.loc)) return false;
      seen.add(u.loc);
      return true;
    });

    for (const u of unique) {
      sitemap += '  <url>\n';
      sitemap += `    <loc>${u.loc}</loc>\n`;
      sitemap += `    <lastmod>${u.lastmod}</lastmod>\n`;
      sitemap += `    <changefreq>${u.changefreq}</changefreq>\n`;
      sitemap += `    <priority>${u.priority}</priority>\n`;
      sitemap += '  </url>\n';
    }

    sitemap += '</urlset>';

    console.log(`Sitemap generated successfully with ${unique.length} total unique URLs`);

    return new Response(sitemap, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'no-cache, must-revalidate',
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
