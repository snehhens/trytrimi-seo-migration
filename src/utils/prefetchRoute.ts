/**
 * Prefetch a route to improve navigation performance
 * Uses link prefetching for instant page loads
 */
export const prefetchRoute = (path: string) => {
  // Check if link already exists
  if (document.querySelector(`link[rel="prefetch"][href="${path}"]`)) {
    return;
  }

  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = path;
  document.head.appendChild(link);
};

/**
 * Prefetch routes on mouse hover for instant navigation
 */
export const setupPrefetchOnHover = () => {
  if (typeof window === 'undefined') return;

  document.addEventListener('mouseover', (e) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a[href^="/"]') as HTMLAnchorElement;
    
    if (link && link.href) {
      const url = new URL(link.href);
      if (url.origin === window.location.origin) {
        prefetchRoute(url.pathname);
      }
    }
  }, { passive: true });
};
