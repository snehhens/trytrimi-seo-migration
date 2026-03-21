import { blogPosts } from "@/data/blogPosts";
import { SITE_URL, toAbsoluteUrl } from "./site";

type ChangeFreq = "daily" | "weekly" | "monthly" | "yearly";

interface SitemapEntry {
  loc: string;
  lastmod: string;
  changefreq: ChangeFreq;
  priority: number;
}

interface ImageSitemapEntry {
  pageUrl: string;
  imageUrl: string;
  title: string;
}

const STATIC_ROUTE_DEFAULT_LASTMOD = "2026-03-21";

const INDEXABLE_STATIC_ROUTES: Array<Omit<SitemapEntry, "loc" | "lastmod"> & { path: string; lastmod?: string }> = [
  { path: "/", changefreq: "daily", priority: 1.0 },
  { path: "/about", changefreq: "monthly", priority: 0.7 },
  { path: "/contact", changefreq: "monthly", priority: 0.6 },
  { path: "/faq", changefreq: "monthly", priority: 0.7 },
  { path: "/how-it-works", changefreq: "weekly", priority: 0.85 },
  { path: "/important-safety-information", changefreq: "monthly", priority: 0.65 },
  { path: "/treatments", changefreq: "weekly", priority: 0.95 },
  { path: "/treatments/semaglutide", changefreq: "weekly", priority: 0.95 },
  { path: "/treatments/tirzepatide", changefreq: "weekly", priority: 0.95 },
  { path: "/semaglutide-guide", changefreq: "weekly", priority: 0.9 },
  { path: "/tirzepatide-guide", changefreq: "weekly", priority: 0.9 },
  { path: "/cost-guide", changefreq: "weekly", priority: 0.85 },
  { path: "/getting-started-hub", changefreq: "weekly", priority: 0.85 },
  { path: "/comparisons-hub", changefreq: "weekly", priority: 0.85 },
  { path: "/side-effects-hub", changefreq: "weekly", priority: 0.85 },
  { path: "/results-hub", changefreq: "weekly", priority: 0.85 },
  { path: "/dosage-hub", changefreq: "weekly", priority: 0.8 },
  { path: "/health-conditions-hub", changefreq: "weekly", priority: 0.8 },
  { path: "/lifestyle-hub", changefreq: "weekly", priority: 0.8 },
  { path: "/supply-access-hub", changefreq: "weekly", priority: 0.8 },
  { path: "/safety-monitoring-hub", changefreq: "weekly", priority: 0.75 },
  { path: "/insurance-access", changefreq: "monthly", priority: 0.7 },
  { path: "/blog", changefreq: "daily", priority: 0.85 },
  { path: "/blog/category/semaglutide", changefreq: "weekly", priority: 0.7 },
  { path: "/blog/category/tirzepatide", changefreq: "weekly", priority: 0.7 },
  { path: "/compare", changefreq: "monthly", priority: 0.75 },
  { path: "/calculators", changefreq: "monthly", priority: 0.7 },
  { path: "/faq-hub", changefreq: "monthly", priority: 0.65 },
  { path: "/resources", changefreq: "monthly", priority: 0.6 },
  { path: "/partnerships", changefreq: "monthly", priority: 0.5 },
  { path: "/affiliate", changefreq: "monthly", priority: 0.45 },
];

const ROBOTS_DISALLOWS = [
  "/api/",
  "/auth",
  "/background-remover",
  "/migration-tracker",
  "/seo-dashboard",
];

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function dedupeEntries(entries: SitemapEntry[]): SitemapEntry[] {
  return Array.from(new Map(entries.map((entry) => [entry.loc, entry])).values());
}

export function getSitemapEntries(): SitemapEntry[] {
  const staticEntries = INDEXABLE_STATIC_ROUTES.map((route) => ({
    loc: toAbsoluteUrl(route.path),
    lastmod: route.lastmod ?? STATIC_ROUTE_DEFAULT_LASTMOD,
    changefreq: route.changefreq,
    priority: route.priority,
  }));

  const blogEntries = blogPosts.map((post) => ({
    loc: toAbsoluteUrl(post.path),
    lastmod: post.modifiedDate ?? post.date,
    changefreq: "monthly" as const,
    priority: 0.75,
  }));

  return dedupeEntries([...staticEntries, ...blogEntries]).sort((a, b) => {
    if (a.loc === SITE_URL) {
      return -1;
    }

    if (b.loc === SITE_URL) {
      return 1;
    }

    return a.loc.localeCompare(b.loc);
  });
}

export function getImageSitemapEntries(): ImageSitemapEntry[] {
  return [
    {
      pageUrl: SITE_URL,
      imageUrl: `${SITE_URL}/logo.png`,
      title: "Trimi Health Logo",
    },
    {
      pageUrl: SITE_URL,
      imageUrl: `${SITE_URL}/favicon.png`,
      title: "Trimi Health Favicon",
    },
  ];
}

export function getLatestSitemapLastmod(): string {
  return getSitemapEntries().reduce(
    (latest, entry) => (entry.lastmod > latest ? entry.lastmod : latest),
    STATIC_ROUTE_DEFAULT_LASTMOD,
  );
}

export function buildSitemapXml(entries = getSitemapEntries()): string {
  const body = entries
    .map(
      (entry) => `  <url>
    <loc>${escapeXml(entry.loc)}</loc>
    <lastmod>${escapeXml(entry.lastmod)}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(2)}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>`;
}

export function buildImageSitemapXml(entries = getImageSitemapEntries()): string {
  const body = entries
    .map(
      (entry) => `  <url>
    <loc>${escapeXml(entry.pageUrl)}</loc>
    <image:image xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
      <image:loc>${escapeXml(entry.imageUrl)}</image:loc>
      <image:title>${escapeXml(entry.title)}</image:title>
    </image:image>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>`;
}

export function buildSitemapIndexXml(): string {
  const lastmod = getLatestSitemapLastmod();

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITE_URL}/sitemap.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${SITE_URL}/image-sitemap.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
</sitemapindex>`;
}

export function buildRobotsTxt(): string {
  const lines = [
    "# Trimi Health robots.txt",
    "# Generated from the current Next.js route inventory",
    "User-agent: *",
    "Allow: /",
    ...ROBOTS_DISALLOWS.map((path) => `Disallow: ${path}`),
    "",
    `Sitemap: ${SITE_URL}/sitemap-index.xml`,
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    `Sitemap: ${SITE_URL}/image-sitemap.xml`,
  ];

  return `${lines.join("\n")}\n`;
}
