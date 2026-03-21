/**
 * SEO Validation Utilities
 * Ensures all pages have proper canonical tags and SEO configuration
 */

// Pages that should NOT have canonical tags (noindex pages)
export const NOINDEX_PAGES = [
  '/privacy-policy',
  '/terms-of-service',
  '/refund-policy',
  '/code-of-conduct',
  '/auth',
  '/seo-dashboard',
  '/seo-dashboard/backlinks',
  '/seo-dashboard/content',
  '/seo-dashboard/research',
  '/seo-dashboard/sitemap-monitor',
  '/migration-tracker',
  '/background-remover',
] as const;

// All indexable pages that MUST have canonical tags
export const CANONICAL_REQUIRED_PAGES = [
  // Main pages
  { path: '/', canonical: 'https://trytrimi.com/' },
  { path: '/about', canonical: 'https://trytrimi.com/about' },
  { path: '/how-it-works', canonical: 'https://trytrimi.com/how-it-works' },
  { path: '/faq', canonical: 'https://trytrimi.com/faq' },
  { path: '/contact', canonical: 'https://trytrimi.com/contact' },
  { path: '/treatments', canonical: 'https://trytrimi.com/treatments' },
  { path: '/treatments/semaglutide', canonical: 'https://trytrimi.com/treatments/semaglutide' },
  { path: '/treatments/tirzepatide', canonical: 'https://trytrimi.com/treatments/tirzepatide' },
  { path: '/calculators', canonical: 'https://trytrimi.com/calculators' },
  { path: '/compare', canonical: 'https://trytrimi.com/compare' },
  { path: '/faq-hub', canonical: 'https://trytrimi.com/faq-hub' },
  { path: '/partnerships', canonical: 'https://trytrimi.com/partnerships' },
  { path: '/important-safety-information', canonical: 'https://trytrimi.com/important-safety-information' },
  { path: '/insurance-access', canonical: 'https://trytrimi.com/insurance-access' },
  { path: '/resources', canonical: 'https://trytrimi.com/resources' },
  
  // Hub pages
  { path: '/semaglutide-guide', canonical: 'https://trytrimi.com/semaglutide-guide' },
  { path: '/tirzepatide-guide', canonical: 'https://trytrimi.com/tirzepatide-guide' },
  { path: '/cost-guide', canonical: 'https://trytrimi.com/cost-guide' },
  { path: '/getting-started-hub', canonical: 'https://trytrimi.com/getting-started-hub' },
  { path: '/comparisons-hub', canonical: 'https://trytrimi.com/comparisons-hub' },
  { path: '/side-effects-hub', canonical: 'https://trytrimi.com/side-effects-hub' },
  { path: '/results-hub', canonical: 'https://trytrimi.com/results-hub' },
  { path: '/dosage-hub', canonical: 'https://trytrimi.com/dosage-hub' },
  { path: '/health-conditions-hub', canonical: 'https://trytrimi.com/health-conditions-hub' },
  { path: '/lifestyle-hub', canonical: 'https://trytrimi.com/lifestyle-hub' },
  { path: '/supply-access-hub', canonical: 'https://trytrimi.com/supply-access-hub' },
  { path: '/safety-monitoring-hub', canonical: 'https://trytrimi.com/safety-monitoring-hub' },
  
  // Blog index
  { path: '/blog', canonical: 'https://trytrimi.com/blog' },
] as const;

export interface SEOValidationResult {
  path: string;
  hasCanonical: boolean;
  expectedCanonical: string;
  actualCanonical: string | null;
  isValid: boolean;
  error?: string;
}

export interface SEOAuditReport {
  timestamp: string;
  totalPages: number;
  validPages: number;
  invalidPages: number;
  missingCanonicals: string[];
  incorrectCanonicals: Array<{
    path: string;
    expected: string;
    actual: string | null;
  }>;
  results: SEOValidationResult[];
}

/**
 * Validates that a canonical URL is properly formatted
 */
export function isValidCanonicalUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return (
      parsed.protocol === 'https:' &&
      parsed.hostname === 'trytrimi.com' &&
      !url.includes('?') && // No query params
      !url.includes('#')    // No fragments
    );
  } catch {
    return false;
  }
}

/**
 * Generates the expected canonical URL for a given path
 */
export function getExpectedCanonical(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `https://trytrimi.com${cleanPath === '/' ? '/' : cleanPath}`;
}

/**
 * Checks if a page should be noindexed (and therefore doesn't need a canonical)
 */
export function isNoindexPage(path: string): boolean {
  return NOINDEX_PAGES.some(noindexPath => 
    path === noindexPath || path.startsWith(`${noindexPath}/`)
  );
}

/**
 * Validates SEO requirements for a single page
 */
export function validatePageSEO(
  path: string,
  canonicalFromDom: string | null
): SEOValidationResult {
  const expectedCanonical = getExpectedCanonical(path);
  const isNoindex = isNoindexPage(path);
  
  if (isNoindex) {
    return {
      path,
      hasCanonical: !!canonicalFromDom,
      expectedCanonical: 'N/A (noindex)',
      actualCanonical: canonicalFromDom,
      isValid: true, // Noindex pages don't require canonicals
    };
  }
  
  const hasCanonical = !!canonicalFromDom;
  const isValidFormat = canonicalFromDom ? isValidCanonicalUrl(canonicalFromDom) : false;
  const matchesExpected = canonicalFromDom === expectedCanonical;
  
  return {
    path,
    hasCanonical,
    expectedCanonical,
    actualCanonical: canonicalFromDom,
    isValid: hasCanonical && isValidFormat && matchesExpected,
    error: !hasCanonical 
      ? 'Missing canonical tag'
      : !isValidFormat 
      ? 'Invalid canonical URL format'
      : !matchesExpected
      ? `Canonical mismatch: expected ${expectedCanonical}`
      : undefined,
  };
}

/**
 * Runs a full SEO audit and generates a report
 */
export function generateSEOAuditReport(
  results: SEOValidationResult[]
): SEOAuditReport {
  const validPages = results.filter(r => r.isValid);
  const invalidPages = results.filter(r => !r.isValid);
  
  return {
    timestamp: new Date().toISOString(),
    totalPages: results.length,
    validPages: validPages.length,
    invalidPages: invalidPages.length,
    missingCanonicals: invalidPages
      .filter(r => !r.hasCanonical)
      .map(r => r.path),
    incorrectCanonicals: invalidPages
      .filter(r => r.hasCanonical && r.actualCanonical !== r.expectedCanonical)
      .map(r => ({
        path: r.path,
        expected: r.expectedCanonical,
        actual: r.actualCanonical,
      })),
    results,
  };
}

/**
 * Console-friendly audit summary
 */
export function printAuditSummary(report: SEOAuditReport): void {
  console.group('🔍 SEO Canonical Tag Audit');
  console.log(`📅 ${report.timestamp}`);
  console.log(`📊 Total: ${report.totalPages} | ✅ Valid: ${report.validPages} | ❌ Invalid: ${report.invalidPages}`);
  
  if (report.missingCanonicals.length > 0) {
    console.group('⚠️ Missing Canonicals:');
    report.missingCanonicals.forEach(path => console.log(`  - ${path}`));
    console.groupEnd();
  }
  
  if (report.incorrectCanonicals.length > 0) {
    console.group('⚠️ Incorrect Canonicals:');
    report.incorrectCanonicals.forEach(({ path, expected, actual }) => {
      console.log(`  - ${path}`);
      console.log(`    Expected: ${expected}`);
      console.log(`    Actual: ${actual}`);
    });
    console.groupEnd();
  }
  
  console.groupEnd();
}
