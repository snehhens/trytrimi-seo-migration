import { useEffect } from "react";

/**
 * Hook to defer loading of third-party scripts until after initial page load
 */
export const useDeferredScript = (
  src: string,
  options: {
    async?: boolean;
    defer?: boolean;
    delayMs?: number;
  } = {}
) => {
  useEffect(() => {
    const { async = true, defer = false, delayMs = 0 } = options;

    const loadScript = () => {
      // Check if script already exists
      if (document.querySelector(`script[src="${src}"]`)) {
        return;
      }

      const script = document.createElement("script");
      script.src = src;
      if (async) script.async = true;
      if (defer) script.defer = true;
      document.body.appendChild(script);
    };

    if (delayMs > 0) {
      const timer = setTimeout(loadScript, delayMs);
      return () => clearTimeout(timer);
    } else {
      loadScript();
    }
  }, [src, options.async, options.defer, options.delayMs]);
};
