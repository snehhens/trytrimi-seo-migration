import { useEffect } from 'react';

/**
 * Hook to monitor and report Core Web Vitals
 * Helps track SEO-critical performance metrics
 */
export const usePagePerformance = (pageName: string) => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    // Report Web Vitals to analytics
    const reportWebVitals = async () => {
      try {
        // Dynamically import web-vitals to avoid bundling in dev
        const { onCLS, onINP, onFCP, onLCP, onTTFB } = await import('web-vitals');

        // Cumulative Layout Shift
        onCLS((metric) => {
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: metric.id,
              value: Math.round(metric.value * 1000),
              metric_name: 'CLS',
              page_name: pageName,
              non_interaction: true,
            });
          }
        });

        // Interaction to Next Paint (replaces FID)
        onINP((metric) => {
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: metric.id,
              value: Math.round(metric.value),
              metric_name: 'INP',
              page_name: pageName,
              non_interaction: true,
            });
          }
        });

        // First Contentful Paint
        onFCP((metric) => {
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: metric.id,
              value: Math.round(metric.value),
              metric_name: 'FCP',
              page_name: pageName,
              non_interaction: true,
            });
          }
        });

        // Largest Contentful Paint
        onLCP((metric) => {
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: metric.id,
              value: Math.round(metric.value),
              metric_name: 'LCP',
              page_name: pageName,
              non_interaction: true,
            });
          }
        });

        // Time to First Byte
        onTTFB((metric) => {
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: metric.id,
              value: Math.round(metric.value),
              metric_name: 'TTFB',
              page_name: pageName,
              non_interaction: true,
            });
          }
        });
      } catch (error) {
        console.error('Error reporting web vitals:', error);
      }
    };

    reportWebVitals();
  }, [pageName]);
};

/**
 * Hook to preload critical resources
 * Improves LCP and overall page performance
 */
export const usePreloadCriticalAssets = (assets: string[]) => {
  useEffect(() => {
    assets.forEach(asset => {
      const link = document.createElement('link');
      link.rel = 'preload';
      
      // Determine asset type
      if (asset.endsWith('.woff2')) {
        link.as = 'font';
        link.type = 'font/woff2';
        link.crossOrigin = 'anonymous';
      } else if (asset.match(/\.(jpg|jpeg|png|webp|avif)$/)) {
        link.as = 'image';
      } else if (asset.endsWith('.css')) {
        link.as = 'style';
      } else if (asset.endsWith('.js')) {
        link.as = 'script';
      }
      
      link.href = asset;
      document.head.appendChild(link);
    });
  }, [assets]);
};
