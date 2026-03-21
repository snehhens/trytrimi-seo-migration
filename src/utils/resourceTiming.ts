/**
 * Resource timing utilities for performance monitoring
 */
import { isProd } from "@/lib/runtime-env";

export interface ResourceMetrics {
  name: string;
  duration: number;
  transferSize: number;
  resourceType: string;
  cached: boolean;
}

/**
 * Get performance metrics for all resources
 */
export const getResourceMetrics = (): ResourceMetrics[] => {
  if (!window.performance || !window.performance.getEntriesByType) {
    return [];
  }

  const resources = window.performance.getEntriesByType('resource') as PerformanceResourceTiming[];
  
  return resources.map((resource) => ({
    name: resource.name,
    duration: resource.duration,
    transferSize: resource.transferSize,
    resourceType: resource.initiatorType,
    cached: resource.transferSize === 0 && resource.duration > 0,
  }));
};

/**
 * Get slow resources (> 1000ms)
 */
export const getSlowResources = (threshold = 1000): ResourceMetrics[] => {
  return getResourceMetrics().filter((resource) => resource.duration > threshold);
};

/**
 * Get total page load time
 */
export const getPageLoadTime = (): number => {
  if (!window.performance || !window.performance.timing) {
    return 0;
  }

  const timing = window.performance.timing;
  return timing.loadEventEnd - timing.navigationStart;
};

/**
 * Get DOM content loaded time
 */
export const getDOMContentLoadedTime = (): number => {
  if (!window.performance || !window.performance.timing) {
    return 0;
  }

  const timing = window.performance.timing;
  return timing.domContentLoadedEventEnd - timing.navigationStart;
};

/**
 * Get resource breakdown by type
 */
export const getResourceBreakdown = (): Record<string, { count: number; totalSize: number; totalDuration: number }> => {
  const metrics = getResourceMetrics();
  const breakdown: Record<string, { count: number; totalSize: number; totalDuration: number }> = {};

  metrics.forEach((resource) => {
    if (!breakdown[resource.resourceType]) {
      breakdown[resource.resourceType] = { count: 0, totalSize: 0, totalDuration: 0 };
    }
    breakdown[resource.resourceType].count++;
    breakdown[resource.resourceType].totalSize += resource.transferSize;
    breakdown[resource.resourceType].totalDuration += resource.duration;
  });

  return breakdown;
};

/**
 * Log performance metrics to console (development only)
 */
export const logPerformanceMetrics = () => {
  if (isProd) return;

  console.group('📊 Performance Metrics');
  console.log('Page Load Time:', getPageLoadTime(), 'ms');
  console.log('DOM Content Loaded:', getDOMContentLoadedTime(), 'ms');
  console.log('Slow Resources:', getSlowResources());
  console.log('Resource Breakdown:', getResourceBreakdown());
  console.groupEnd();
};
