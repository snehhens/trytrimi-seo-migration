/**
 * SEO Validation Tests
 * Run these tests to ensure all pages have proper canonical tags
 * 
 * Usage: Import and call runSEOTests() in development
 */

import {
  isValidCanonicalUrl,
  getExpectedCanonical,
  isNoindexPage,
  validatePageSEO,
  CANONICAL_REQUIRED_PAGES,
  NOINDEX_PAGES,
} from './seoValidation';

interface TestResult {
  name: string;
  passed: boolean;
  error?: string;
}

/**
 * Test suite for SEO validation utilities
 */
export function runSEOTests(): TestResult[] {
  const results: TestResult[] = [];

  // Test 1: isValidCanonicalUrl - valid URLs
  const validUrls = [
    'https://trytrimi.com/',
    'https://trytrimi.com/about',
    'https://trytrimi.com/blog/tirzepatide-vs-semaglutide',
  ];
  validUrls.forEach(url => {
    results.push({
      name: `isValidCanonicalUrl accepts: ${url}`,
      passed: isValidCanonicalUrl(url),
      error: isValidCanonicalUrl(url) ? undefined : 'Should be valid',
    });
  });

  // Test 2: isValidCanonicalUrl - invalid URLs
  const invalidUrls = [
    'http://trytrimi.com/', // HTTP instead of HTTPS
    'https://example.com/', // Wrong domain
    'https://trytrimi.com/?page=1', // Query params
    'https://trytrimi.com/#section', // Fragment
    'not-a-url',
  ];
  invalidUrls.forEach(url => {
    results.push({
      name: `isValidCanonicalUrl rejects: ${url}`,
      passed: !isValidCanonicalUrl(url),
      error: !isValidCanonicalUrl(url) ? undefined : 'Should be invalid',
    });
  });

  // Test 3: getExpectedCanonical
  const pathTests = [
    { path: '/', expected: 'https://trytrimi.com/' },
    { path: '/about', expected: 'https://trytrimi.com/about' },
    { path: '/blog/test', expected: 'https://trytrimi.com/blog/test' },
    { path: 'treatments', expected: 'https://trytrimi.com/treatments' },
  ];
  pathTests.forEach(({ path, expected }) => {
    const actual = getExpectedCanonical(path);
    results.push({
      name: `getExpectedCanonical("${path}") = ${expected}`,
      passed: actual === expected,
      error: actual === expected ? undefined : `Got: ${actual}`,
    });
  });

  // Test 4: isNoindexPage
  NOINDEX_PAGES.forEach(path => {
    results.push({
      name: `isNoindexPage identifies: ${path}`,
      passed: isNoindexPage(path),
      error: isNoindexPage(path) ? undefined : 'Should be noindex',
    });
  });

  // Test 5: Non-noindex pages should not be marked as noindex
  const indexedPages = ['/about', '/blog', '/treatments'];
  indexedPages.forEach(path => {
    results.push({
      name: `isNoindexPage excludes: ${path}`,
      passed: !isNoindexPage(path),
      error: !isNoindexPage(path) ? undefined : 'Should NOT be noindex',
    });
  });

  // Test 6: validatePageSEO - valid canonical
  const validResult = validatePageSEO('/about', 'https://trytrimi.com/about');
  results.push({
    name: 'validatePageSEO validates correct canonical',
    passed: validResult.isValid && !validResult.error,
    error: validResult.error,
  });

  // Test 7: validatePageSEO - missing canonical
  const missingResult = validatePageSEO('/about', null);
  results.push({
    name: 'validatePageSEO catches missing canonical',
    passed: !missingResult.isValid && missingResult.error === 'Missing canonical tag',
    error: missingResult.isValid ? 'Should be invalid' : undefined,
  });

  // Test 8: validatePageSEO - wrong canonical
  const wrongResult = validatePageSEO('/about', 'https://trytrimi.com/wrong');
  results.push({
    name: 'validatePageSEO catches wrong canonical',
    passed: !wrongResult.isValid && wrongResult.error?.includes('mismatch'),
    error: wrongResult.isValid ? 'Should be invalid' : undefined,
  });

  // Test 9: validatePageSEO - noindex page without canonical is valid
  const noindexResult = validatePageSEO('/privacy-policy', null);
  results.push({
    name: 'validatePageSEO allows noindex pages without canonical',
    passed: noindexResult.isValid,
    error: noindexResult.isValid ? undefined : 'Noindex pages should be valid without canonical',
  });

  // Test 10: All required pages have unique canonicals
  const canonicals = CANONICAL_REQUIRED_PAGES.map(p => p.canonical);
  const uniqueCanonicals = new Set(canonicals);
  results.push({
    name: 'All required pages have unique canonicals',
    passed: canonicals.length === uniqueCanonicals.size,
    error: canonicals.length === uniqueCanonicals.size 
      ? undefined 
      : `Duplicate canonicals found: ${canonicals.length} total, ${uniqueCanonicals.size} unique`,
  });

  return results;
}

/**
 * Prints test results to console
 */
export function printTestResults(results: TestResult[]): void {
  const passed = results.filter(r => r.passed);
  const failed = results.filter(r => !r.passed);

  console.group('🧪 SEO Validation Tests');
  console.log(`✅ Passed: ${passed.length}/${results.length}`);
  
  if (failed.length > 0) {
    console.group('❌ Failed Tests:');
    failed.forEach(test => {
      console.log(`  - ${test.name}`);
      if (test.error) console.log(`    Error: ${test.error}`);
    });
    console.groupEnd();
  }
  
  console.groupEnd();
}

/**
 * Run all tests and print results
 */
export function runAllSEOTests(): boolean {
  const results = runSEOTests();
  printTestResults(results);
  return results.every(r => r.passed);
}
