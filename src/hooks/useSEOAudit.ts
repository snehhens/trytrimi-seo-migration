/**
 * Hook for running SEO audits in development
 * Validates canonical tags on the current page
 */

import { useEffect, useState } from 'react';
import { useLocation } from '@/compat/react-router-dom';
import { isDev } from '@/lib/runtime-env';
import { 
  validatePageSEO, 
  SEOValidationResult,
  isNoindexPage 
} from '@/utils/seoValidation';

interface UseSEOAuditOptions {
  enabled?: boolean;
  logToConsole?: boolean;
}

export function useSEOAudit(options: UseSEOAuditOptions = {}) {
  const { enabled = isDev, logToConsole = true } = options;
  const location = useLocation();
  const [result, setResult] = useState<SEOValidationResult | null>(null);

  useEffect(() => {
    if (!enabled) return;

    // Wait for DOM to settle after navigation
    const timeoutId = setTimeout(() => {
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      const canonicalUrl = canonicalLink?.getAttribute('href') || null;
      
      const validationResult = validatePageSEO(location.pathname, canonicalUrl);
      setResult(validationResult);

      if (logToConsole) {
        if (validationResult.isValid) {
          console.log(
            `✅ SEO: ${location.pathname} - Canonical OK`,
            isNoindexPage(location.pathname) ? '(noindex)' : ''
          );
        } else {
          console.warn(
            `⚠️ SEO Issue: ${location.pathname}`,
            validationResult.error,
            {
              expected: validationResult.expectedCanonical,
              actual: validationResult.actualCanonical,
            }
          );
        }
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [location.pathname, enabled, logToConsole]);

  return result;
}

/**
 * Component that validates SEO on mount (for use in layout components)
 */
export function SEOValidator({ children }: { children: React.ReactNode }) {
  useSEOAudit();
  return children;
}
