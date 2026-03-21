/**
 * Performance hints and utilities for resource optimization
 */

/**
 * Add resource hints dynamically based on user behavior
 */
export const addResourceHint = (
  href: string,
  rel: 'preload' | 'prefetch' | 'preconnect' | 'dns-prefetch' | 'prerender',
  options?: {
    as?: string;
    type?: string;
    crossorigin?: boolean;
    fetchpriority?: 'high' | 'low' | 'auto';
  }
) => {
  // Check if hint already exists
  const existing = document.querySelector(`link[rel="${rel}"][href="${href}"]`);
  if (existing) return;

  const link = document.createElement('link');
  link.rel = rel;
  link.href = href;

  if (options?.as) link.setAttribute('as', options.as);
  if (options?.type) link.setAttribute('type', options.type);
  if (options?.crossorigin) link.setAttribute('crossorigin', '');
  if (options?.fetchpriority) link.setAttribute('fetchpriority', options.fetchpriority);

  document.head.appendChild(link);
};

/**
 * Preconnect to external domains
 */
export const preconnectDomains = (domains: string[]) => {
  domains.forEach((domain) => {
    addResourceHint(domain, 'preconnect', { crossorigin: true });
  });
};

/**
 * Prefetch next likely routes based on current page
 */
export const prefetchNextRoutes = (currentPath: string) => {
  const routeMap: Record<string, string[]> = {
    '/': ['/treatments', '/how-it-works', '/blog'],
    '/treatments': ['/treatments/semaglutide', '/treatments/tirzepatide', '/how-it-works'],
    '/blog': ['/blog/tirzepatide-vs-semaglutide', '/blog/how-tirzepatide-works'],
  };

  const nextRoutes = routeMap[currentPath] || [];
  nextRoutes.forEach((route) => {
    addResourceHint(route, 'prefetch', { as: 'document' });
  });
};

/**
 * Adaptive loading based on device capabilities
 */
export const getDeviceCapabilities = () => {
  const memory = (navigator as any).deviceMemory || 4; // GB
  const cores = navigator.hardwareConcurrency || 4;
  const connection = (navigator as any).connection || {};
  
  return {
    memory,
    cores,
    effectiveType: connection.effectiveType || '4g',
    saveData: connection.saveData || false,
    isLowEnd: memory < 4 || cores < 4,
  };
};

/**
 * Determine if we should load high-quality assets
 */
export const shouldLoadHighQuality = (): boolean => {
  const capabilities = getDeviceCapabilities();
  return !capabilities.isLowEnd && !capabilities.saveData && capabilities.effectiveType !== '2g';
};

/**
 * Add early hints for critical resources
 */
export const addEarlyHints = () => {
  // In Next.js, preloading Vite-style /src paths causes expensive dev compiles
  // and unnecessary network work. Keep this disabled.
  return;
};

/**
 * Monitor and report performance budgets
 */
export const checkPerformanceBudget = () => {
  if (!window.performance) return;

  const perfData = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (!perfData) return;

  const budgets = {
    domContentLoaded: 1500,
    load: 3000,
    firstPaint: 1000,
  };

  const metrics = {
    domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
    load: perfData.loadEventEnd - perfData.loadEventStart,
  };

  Object.entries(metrics).forEach(([key, value]) => {
    const budget = budgets[key as keyof typeof budgets];
    if (value > budget) {
      console.warn(`⚠️ Performance budget exceeded for ${key}: ${value}ms (budget: ${budget}ms)`);
    }
  });
};
