import { blogPosts } from "@/data/blogPosts";
import { getBlogPostBySlug, getRelatedBlogPosts } from "@/lib/blog/discovery";

// Smart internal linking system for SEO
export interface InternalLink {
  text: string;
  url: string;
  relevance: number;
  description?: string;
  kind?: "article" | "hub" | "page";
}

// Core pages that should be linked from everywhere
export const corePages = [
  { text: "Complete Semaglutide Guide", url: "/semaglutide-guide", keywords: ["semaglutide guide", "semaglutide hub", "semaglutide resources"] },
  { text: "Complete Tirzepatide Guide", url: "/tirzepatide-guide", keywords: ["tirzepatide guide", "tirzepatide hub", "tirzepatide resources"] },
  { text: "How It Works", url: "/how-it-works", keywords: ["process", "steps", "getting started", "how to"] },
  { text: "Semaglutide Treatment", url: "/treatments/semaglutide", keywords: ["semaglutide treatment", "buy semaglutide", "get semaglutide"] },
  { text: "Tirzepatide Treatment", url: "/treatments/tirzepatide", keywords: ["tirzepatide treatment", "buy tirzepatide", "get tirzepatide"] },
  { text: "Compare Treatments", url: "/compare", keywords: ["compare", "difference", "vs", "versus"] },
  
  { text: "FAQ", url: "/faq-hub", keywords: ["questions", "faq", "help", "answers"] },
];

// Category hub pages - HIGH PRIORITY for topic clustering
export const categoryHubs = [
  { text: "Complete Semaglutide Guide", url: "/semaglutide-guide", keywords: ["semaglutide", "ozempic", "wegovy", "weight loss medication"] },
  { text: "Complete Tirzepatide Guide", url: "/tirzepatide-guide", keywords: ["tirzepatide", "mounjaro", "zepbound", "glp-1 medication"] },
  { text: "Blog", url: "/blog", keywords: ["articles", "learn", "information"] },
];

// Find relevant internal links based on page content
export function getRelevantLinks(pageKeywords: string[], currentPath: string): InternalLink[] {
  const allPages = [...corePages, ...categoryHubs];
  const links: InternalLink[] = [];

  allPages.forEach(page => {
    // Don't link to current page
    if (page.url === currentPath) return;

    // Calculate relevance score
    let relevance = 0;
    pageKeywords.forEach(keyword => {
      page.keywords.forEach(pageKeyword => {
        if (keyword.toLowerCase().includes(pageKeyword.toLowerCase()) ||
            pageKeyword.toLowerCase().includes(keyword.toLowerCase())) {
          relevance += 1;
        }
      });
    });

    if (relevance > 0) {
      links.push({
        text: page.text,
        url: page.url,
        relevance,
        kind: page.url === "/blog" ? "hub" : "page"
      });
    }
  });

  const currentSlug = currentPath.startsWith("/blog/") ? currentPath.split("/").filter(Boolean).pop() || "" : "";
  const currentPost = currentSlug ? getBlogPostBySlug(currentSlug) : undefined;

  if (currentPost) {
    const relatedPosts = getRelatedBlogPosts(currentPost, 3);

    relatedPosts.forEach((post, index) => {
      links.push({
        text: post.title,
        url: post.path,
        relevance: 10 - index,
        description: `${post.category} • ${post.readTime}`,
        kind: "article",
      });
    });

    const hubPage = getHubPageForBlogArticle(currentPath);
    if (hubPage) {
      links.push({
        text: `${hubPage.name} Hub`,
        url: hubPage.url,
        relevance: 9,
        description: "Jump to the broader topic cluster",
        kind: "hub",
      });
    }
  }

  // Sort by relevance and return top 5
  return Array.from(
    links.reduce((deduped, link) => {
      const existing = deduped.get(link.url);
      if (!existing || existing.relevance < link.relevance) {
        deduped.set(link.url, link);
      }
      return deduped;
    }, new Map<string, InternalLink>()),
  )
    .map(([, link]) => link)
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, 6);
}

// Automatically insert contextual links in content
export function addContextualLinks(content: string, currentPath: string): string {
  let processedContent = content;
  const usedPositions = new Set<number>();

  corePages.forEach(page => {
    if (page.url === currentPath) return;

    page.keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      const matches = [...processedContent.matchAll(regex)];

      // Only link first occurrence to avoid over-optimization
      if (matches.length > 0 && !usedPositions.has(matches[0].index!)) {
        const match = matches[0];
        const replacement = `<a href="${page.url}" class="text-primary hover:underline font-medium">${match[0]}</a>`;
        processedContent = processedContent.replace(match[0], replacement);
        usedPositions.add(match.index!);
      }
    });
  });

  return processedContent;
}

// Hub page mappings for blog articles
export const blogHubMappings: Record<string, { url: string; name: string }> = {
  // Cost & Affordability
  'cost': { url: '/blog/cost-affordability-hub', name: 'Cost & Affordability' },
  'affordability': { url: '/blog/cost-affordability-hub', name: 'Cost & Affordability' },
  'insurance': { url: '/blog/cost-affordability-hub', name: 'Cost & Affordability' },
  'pricing': { url: '/blog/cost-affordability-hub', name: 'Cost & Affordability' },
  'affordable': { url: '/blog/cost-affordability-hub', name: 'Cost & Affordability' },
  'cash-pay': { url: '/blog/cost-affordability-hub', name: 'Cost & Affordability' },
  'employer-coverage': { url: '/blog/cost-affordability-hub', name: 'Cost & Affordability' },
  'international-pharmacy': { url: '/blog/cost-affordability-hub', name: 'Cost & Affordability' },
  'cheapest': { url: '/blog/cost-affordability-hub', name: 'Cost & Affordability' },
  'buy': { url: '/blog/cost-affordability-hub', name: 'Cost & Affordability' },
  'coverage': { url: '/blog/cost-affordability-hub', name: 'Cost & Affordability' },
  'appeal': { url: '/blog/cost-affordability-hub', name: 'Cost & Affordability' },
  
  // Getting Started
  'getting-started': { url: '/blog/getting-started-hub', name: 'Getting Started' },
  'quick-start': { url: '/blog/getting-started-hub', name: 'Getting Started' },
  'first-month': { url: '/blog/getting-started-hub', name: 'Getting Started' },
  'how-to-start': { url: '/blog/getting-started-hub', name: 'Getting Started' },
  'beginner': { url: '/blog/getting-started-hub', name: 'Getting Started' },
  'travel': { url: '/blog/getting-started-hub', name: 'Getting Started' },
  
  // Dosage & Administration
  'dosage': { url: '/blog/dosage-administration-hub', name: 'Dosage & Administration' },
  'dosing': { url: '/blog/dosage-administration-hub', name: 'Dosage & Administration' },
  'injection': { url: '/blog/dosage-administration-hub', name: 'Dosage & Administration' },
  'administration': { url: '/blog/dosage-administration-hub', name: 'Dosage & Administration' },
  'dose': { url: '/blog/dosage-administration-hub', name: 'Dosage & Administration' },
  'missed-dose': { url: '/blog/dosage-administration-hub', name: 'Dosage & Administration' },
  'injection-site': { url: '/blog/dosage-administration-hub', name: 'Dosage & Administration' },
  'escalation': { url: '/blog/dosage-administration-hub', name: 'Dosage & Administration' },
  
  // Comparisons
  'comparison': { url: '/blog/comparisons-hub', name: 'Comparisons' },
  'vs': { url: '/blog/comparisons-hub', name: 'Comparisons' },
  'versus': { url: '/blog/comparisons-hub', name: 'Comparisons' },
  'semaglutide-vs-tirzepatide': { url: '/blog/comparisons-hub', name: 'Comparisons' },
  'tirzepatide-vs-semaglutide': { url: '/blog/comparisons-hub', name: 'Comparisons' },
  'key-differences': { url: '/blog/comparisons-hub', name: 'Comparisons' },
  'difference': { url: '/blog/comparisons-hub', name: 'Comparisons' },
  'compare': { url: '/blog/comparisons-hub', name: 'Comparisons' },
  
  // Side Effects Management
  'side-effects': { url: '/blog/side-effects-management-hub', name: 'Side Effects Management' },
  'side-effect': { url: '/blog/side-effects-management-hub', name: 'Side Effects Management' },
  'managing': { url: '/blog/side-effects-management-hub', name: 'Side Effects Management' },
  'nausea': { url: '/blog/side-effects-management-hub', name: 'Side Effects Management' },
  'water-retention': { url: '/blog/side-effects-management-hub', name: 'Side Effects Management' },
  'doctor': { url: '/blog/side-effects-management-hub', name: 'Side Effects Management' },
  'safety': { url: '/blog/side-effects-management-hub', name: 'Side Effects Management' },
  
  // Health Conditions
  'diabetes': { url: '/blog/health-conditions-hub', name: 'Health Conditions' },
  'pcos': { url: '/blog/health-conditions-hub', name: 'Health Conditions' },
  'prediabetes': { url: '/blog/health-conditions-hub', name: 'Health Conditions' },
  'cardiovascular': { url: '/blog/health-conditions-hub', name: 'Health Conditions' },
  'heart-health': { url: '/blog/health-conditions-hub', name: 'Health Conditions' },
  'thyroid': { url: '/blog/health-conditions-hub', name: 'Health Conditions' },
  'blood-pressure': { url: '/blog/health-conditions-hub', name: 'Health Conditions' },
  'metabolic': { url: '/blog/health-conditions-hub', name: 'Health Conditions' },
  
  // Lifestyle Integration
  'diet': { url: '/blog/lifestyle-integration-hub', name: 'Lifestyle Integration' },
  'food': { url: '/blog/lifestyle-integration-hub', name: 'Lifestyle Integration' },
  'foods': { url: '/blog/lifestyle-integration-hub', name: 'Lifestyle Integration' },
  'exercise': { url: '/blog/lifestyle-integration-hub', name: 'Lifestyle Integration' },
  'workout': { url: '/blog/lifestyle-integration-hub', name: 'Lifestyle Integration' },
  'alcohol': { url: '/blog/lifestyle-integration-hub', name: 'Lifestyle Integration' },
  'social': { url: '/blog/lifestyle-integration-hub', name: 'Lifestyle Integration' },
  'routine': { url: '/blog/lifestyle-integration-hub', name: 'Lifestyle Integration' },
  'meal': { url: '/blog/lifestyle-integration-hub', name: 'Lifestyle Integration' },
  
  // Supply & Access
  'shortage': { url: '/blog/supply-access-hub', name: 'Supply & Access' },
  'supply': { url: '/blog/supply-access-hub', name: 'Supply & Access' },
  'compounded': { url: '/blog/supply-access-hub', name: 'Supply & Access' },
  'compounding': { url: '/blog/supply-access-hub', name: 'Supply & Access' },
  'generic': { url: '/blog/supply-access-hub', name: 'Supply & Access' },
  'pharmacy': { url: '/blog/supply-access-hub', name: 'Supply & Access' },
  'access': { url: '/blog/supply-access-hub', name: 'Supply & Access' },
  'availability': { url: '/blog/supply-access-hub', name: 'Supply & Access' },
  
  // Long-Term Outcomes
  'long-term': { url: '/blog/long-term-outcomes-hub', name: 'Long-Term Outcomes' },
  'outcomes': { url: '/blog/long-term-outcomes-hub', name: 'Long-Term Outcomes' },
  'maintaining': { url: '/blog/long-term-outcomes-hub', name: 'Long-Term Outcomes' },
  'maintenance': { url: '/blog/long-term-outcomes-hub', name: 'Long-Term Outcomes' },
  'sustainability': { url: '/blog/long-term-outcomes-hub', name: 'Long-Term Outcomes' },
  'expectations': { url: '/blog/long-term-outcomes-hub', name: 'Long-Term Outcomes' },
  'timeline': { url: '/blog/long-term-outcomes-hub', name: 'Long-Term Outcomes' },
  'results': { url: '/blog/long-term-outcomes-hub', name: 'Long-Term Outcomes' },
  'success': { url: '/blog/long-term-outcomes-hub', name: 'Long-Term Outcomes' },
  'lifestyle': { url: '/blog/long-term-outcomes-hub', name: 'Long-Term Outcomes' },
  'health-effects': { url: '/blog/long-term-outcomes-hub', name: 'Long-Term Outcomes' },
};

// Determine hub page for a blog article
export function getHubPageForBlogArticle(pathname: string): { url: string; name: string } | null {
  const slug = pathname.split('/').pop() || '';
  
  // Check for exact or partial matches in the slug
  for (const [keyword, hub] of Object.entries(blogHubMappings)) {
    if (slug.includes(keyword)) {
      return hub;
    }
  }
  
  return null;
}

// Generate breadcrumb data for any page
export function generateBreadcrumbs(pathname: string): Array<{ name: string; url: string }> {
  const paths = pathname.split('/').filter(Boolean);
  const breadcrumbs = [{ name: 'Home', url: '/' }];

  // Special handling for blog articles
  if (paths[0] === 'blog' && paths.length > 1 && !pathname.includes('-hub')) {
    breadcrumbs.push({ name: 'Blog', url: '/blog' });
    
    // Try to find relevant hub page
    const hubPage = getHubPageForBlogArticle(pathname);
    if (hubPage) {
      breadcrumbs.push({ name: hubPage.name, url: hubPage.url });
    }
    
    // Add current article
    const articleSlug = paths[paths.length - 1];
    const articleName = articleSlug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    breadcrumbs.push({ name: articleName, url: pathname });
    return breadcrumbs;
  }

  // Standard breadcrumb generation for non-blog pages
  let currentPath = '';
  paths.forEach((segment, index) => {
    currentPath += `/${segment}`;
    
    // Format label
    let name = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    // Special cases
    if (segment === 'blog') name = 'Blog';
    if (segment === 'faq-hub') name = 'FAQ';
    if (segment === 'semaglutide-guide') name = 'Semaglutide Guide';
    if (segment === 'tirzepatide-guide') name = 'Tirzepatide Guide';

    breadcrumbs.push({ name, url: currentPath });
  });

  return breadcrumbs;
}

// Get related blog posts based on categories
export function getRelatedPosts(currentCategory: string, currentUrl: string, allPosts: any[]): any[] {
  const currentSlug = currentUrl.split("/").filter(Boolean).pop() || currentUrl;
  const currentPost = blogPosts.find(
    (post) => post.slug === currentSlug || post.path === currentUrl,
  );

  if (currentPost) {
    return getRelatedBlogPosts(currentPost, 4);
  }

  return allPosts
    .filter(post =>
      post.category === currentCategory &&
      post.slug !== currentSlug &&
      post.path !== currentUrl
    )
    .slice(0, 4);
}
