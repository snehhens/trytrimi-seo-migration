import { useEffect } from "react";
import { logPerformanceMetrics } from "@/utils/resourceTiming";
import { isProd } from "@/lib/runtime-env";

/**
 * Component to monitor resource loading performance
 * Only active in development mode
 */
export const ResourceMonitor = () => {
  useEffect(() => {
    if (isProd) return;

    // Log metrics after page load
    window.addEventListener('load', () => {
      setTimeout(() => {
        logPerformanceMetrics();
      }, 1000);
    });
  }, []);

  return null;
};
