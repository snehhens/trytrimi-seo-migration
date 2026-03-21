import { useEffect, useRef } from "react";
import { isProd } from "@/lib/runtime-env";

/**
 * Hook to monitor and prevent memory leaks
 */
export const useMemoryMonitor = (componentName: string) => {
  useEffect(() => {
    if (isProd) return;

    const checkMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const usedMB = memory.usedJSHeapSize / 1048576;
        const limitMB = memory.jsHeapSizeLimit / 1048576;
        const usage = (usedMB / limitMB) * 100;

        if (usage > 90) {
          console.warn(
            `⚠️ High memory usage in ${componentName}: ${usage.toFixed(2)}% (${usedMB.toFixed(2)}MB / ${limitMB.toFixed(2)}MB)`
          );
        }
      }
    };

    const interval = setInterval(checkMemory, 10000); // Check every 10s

    return () => {
      clearInterval(interval);
    };
  }, [componentName]);
};

/**
 * Hook to cleanup event listeners on unmount
 */
export const useCleanupListeners = () => {
  const listenersRef = useRef<Array<() => void>>([]);

  const addListener = (cleanup: () => void) => {
    listenersRef.current.push(cleanup);
  };

  useEffect(() => {
    return () => {
      listenersRef.current.forEach((cleanup) => cleanup());
      listenersRef.current = [];
    };
  }, []);

  return addListener;
};

/**
 * Hook to clear intervals/timeouts on unmount
 */
export const useAutoCleanup = () => {
  const timersRef = useRef<Array<NodeJS.Timeout>>([]);

  const addTimer = (timer: NodeJS.Timeout) => {
    timersRef.current.push(timer);
    return timer;
  };

  const setTimeout = (callback: () => void, delay: number) => {
    const timer = window.setTimeout(callback, delay);
    addTimer(timer as any);
    return timer;
  };

  const setInterval = (callback: () => void, delay: number) => {
    const timer = window.setInterval(callback, delay);
    addTimer(timer as any);
    return timer;
  };

  useEffect(() => {
    return () => {
      timersRef.current.forEach((timer) => {
        clearTimeout(timer);
        clearInterval(timer);
      });
      timersRef.current = [];
    };
  }, []);

  return { setTimeout, setInterval };
};

/**
 * Hook to prevent memory leaks from async operations
 */
export const useIsMounted = () => {
  const isMountedRef = useRef(true);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return () => isMountedRef.current;
};
