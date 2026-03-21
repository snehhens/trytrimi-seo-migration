import { useEffect } from "react";

export const PerformanceMonitor = () => {
  useEffect(() => {
    if (typeof window === "undefined" || !("PerformanceObserver" in window)) {
      return;
    }

    // Monitor Long Tasks (>50ms)
    try {
      const longTaskObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) {
            console.warn("Long task detected:", entry.duration, "ms");
          }
        }
      });
      longTaskObserver.observe({ entryTypes: ["longtask"] });
    } catch (e) {
      // Long task API not supported
    }

    // Monitor Layout Shifts
    try {
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as any[]) {
          if (!entry.hadRecentInput && entry.value > 0.1) {
            console.warn("Layout shift detected:", entry.value);
          }
        }
      });
      clsObserver.observe({ entryTypes: ["layout-shift"] });
    } catch (e) {
      // Layout shift API not supported
    }

    // Monitor Resource Loading
    const resourceObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const resource = entry as PerformanceResourceTiming;
        if (resource.duration > 1000) {
          console.warn("Slow resource:", resource.name, resource.duration, "ms");
        }
      }
    });
    resourceObserver.observe({ entryTypes: ["resource"] });

    return () => {
      resourceObserver.disconnect();
    };
  }, []);

  return null;
};
