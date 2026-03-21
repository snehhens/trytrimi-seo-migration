import type { AppProps } from "next/app";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { initAnalytics } from "@/components/Analytics";
import { setupPrefetchOnHover } from "@/utils/prefetchRoute";
import { queueIdleTasks } from "@/utils/criticalTasks";
import { addEarlyHints, preconnectDomains, checkPerformanceBudget } from "@/utils/performanceHints";
import { monitorThirdPartyPerformance } from "@/utils/thirdPartyOptimization";
import { deferAfterLoad, deferToIdle } from "@/utils/deferNonCritical";
import { lazyLoadImages, optimizeFontLoading, monitorLongTasks } from "@/utils/performanceOptimization";
import { isDev } from "@/lib/runtime-env";
import "@/index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 30,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function ClientBoot() {
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }

    if (isMobile) {
      let passive = false;
      try {
        const opts = Object.defineProperty({}, "passive", {
          get: () => (passive = true),
        });
        window.addEventListener("test", null as never, opts);
        window.removeEventListener("test", null as never, opts);
      } catch {}

      if (passive) {
        ["touchstart", "touchmove", "touchend"].forEach((eventName) => {
          document.addEventListener(eventName, () => {}, { passive: true });
        });
      }

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        document.documentElement.classList.add("reduce-motion");
      }

      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.setAttribute(
          "content",
          "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes"
        );
      }
    }

    addEarlyHints();
    preconnectDomains([
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
      "https://www.google-analytics.com",
    ]);

    if ("caches" in window) {
      deferAfterLoad(() => {
        deferToIdle(() => {
          caches
            .keys()
            .then((keys) => {
              keys.forEach((key) => {
                if (key.includes("old-") || key.includes("v1-")) {
                  caches.delete(key);
                }
              });
            })
            .catch(() => {});
        });
      });
    }

    queueIdleTasks([
      setupPrefetchOnHover,
      initAnalytics,
      checkPerformanceBudget,
      monitorThirdPartyPerformance,
      lazyLoadImages,
      optimizeFontLoading,
      () => isDev && monitorLongTasks(),
    ]);
  }, []);

  return null;
}

export default function NextApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Sonner />
      <ErrorBoundary>
        <ClientBoot />
        <Component {...pageProps} />
      </ErrorBoundary>
    </QueryClientProvider>
  );
}
