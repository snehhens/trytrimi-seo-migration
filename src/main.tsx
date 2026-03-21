import { createRoot } from "react-dom/client";
import { HelmetProvider } from "@/compat/react-helmet-async";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { initAnalytics } from "@/components/Analytics";
import { setupPrefetchOnHover } from "@/utils/prefetchRoute";
import { queueIdleTasks } from "@/utils/criticalTasks";
import { addEarlyHints, preconnectDomains, checkPerformanceBudget } from "@/utils/performanceHints";
import { monitorThirdPartyPerformance } from "@/utils/thirdPartyOptimization";
import { deferAfterLoad, deferToIdle } from "@/utils/deferNonCritical";
import { lazyLoadImages, optimizeFontLoading, monitorLongTasks } from "@/utils/performanceOptimization";
import { isDev } from "@/lib/runtime-env";
import App from "./App";
import "./index.css";

// Mobile-specific performance optimizations
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
  // Enable passive touch event listeners for better scroll performance
  const supportsPassive = (() => {
    let passive = false;
    try {
      const opts = Object.defineProperty({}, 'passive', {
        get: () => (passive = true),
      });
      window.addEventListener('test', null as any, opts);
      window.removeEventListener('test', null as any, opts);
    } catch (e) {}
    return passive;
  })();

  if (supportsPassive) {
    ['touchstart', 'touchmove', 'touchend'].forEach((event) => {
      document.addEventListener(event, () => {}, { passive: true });
    });
  }

  // Reduce animation complexity on mobile
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (prefersReducedMotion.matches) {
    document.documentElement.classList.add('reduce-motion');
  }

  // Optimize viewport for mobile
  const viewport = document.querySelector('meta[name=viewport]');
  if (viewport) {
    viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes');
  }
}

// Add early hints for critical resources
addEarlyHints();

// Preconnect to external domains
preconnectDomains([
  'https://fonts.googleapis.com',
  'https://fonts.gstatic.com',
  'https://www.google-analytics.com',
]);

// Cleanup old caches in background after load
if ('caches' in window) {
  deferAfterLoad(() => {
    deferToIdle(() => {
      caches.keys().then((keys) => {
        keys.forEach((key) => {
          if (key.includes('old-') || key.includes('v1-')) {
            caches.delete(key);
          }
        });
      }).catch(() => {});
    });
  });
}

// Queue non-critical initialization tasks
queueIdleTasks([
  setupPrefetchOnHover,
  initAnalytics,
  checkPerformanceBudget,
  monitorThirdPartyPerformance,
  lazyLoadImages,
  optimizeFontLoading,
  () => isDev && monitorLongTasks(),
]);

// Batch initial render to avoid forced reflow
requestAnimationFrame(() => {
  createRoot(document.getElementById("root")!).render(
    <ErrorBoundary>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ErrorBoundary>
  );
});
