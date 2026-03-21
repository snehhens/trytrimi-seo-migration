import { useEffect, useRef } from "react";
import { isProd } from "@/lib/runtime-env";

/**
 * Hook to add will-change CSS property for animations
 * Improves animation performance by creating a new layer
 */
export const useWillChange = (property: string) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.style.willChange = property;

    return () => {
      element.style.willChange = 'auto';
    };
  }, [property]);

  return ref;
};

/**
 * Hook to prevent unnecessary paint operations
 */
export const useContainment = (containment: 'layout' | 'paint' | 'size' | 'strict' | 'content') => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.style.contain = containment;
  }, [containment]);

  return ref;
};

/**
 * Hook to optimize list rendering with content-visibility
 */
export const useContentVisibility = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if content-visibility is supported
    if ('contentVisibility' in element.style) {
      (element.style as any).contentVisibility = 'auto';
      element.style.containIntrinsicSize = '0 500px'; // Estimated size
    }
  }, []);

  return ref;
};

/**
 * Hook to enable GPU acceleration for animations
 */
export const useGPUAcceleration = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.style.transform = 'translateZ(0)';
    element.style.backfaceVisibility = 'hidden';
    element.style.perspective = '1000px';
  }, []);

  return ref;
};

/**
 * Hook to measure component render time
 */
export const useRenderTime = (componentName: string) => {
  useEffect(() => {
    if (isProd) return;

    const startTime = performance.now();

    return () => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;
      
      if (renderTime > 16) { // Longer than 1 frame at 60fps
        console.warn(`${componentName} took ${renderTime.toFixed(2)}ms to render (> 16ms)`);
      }
    };
  });
};

/**
 * Hook to prefetch images on interaction
 */
export const usePrefetchOnInteraction = (imageUrls: string[]) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let prefetched = false;

    const prefetchImages = () => {
      if (prefetched) return;
      prefetched = true;

      imageUrls.forEach((url) => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.as = 'image';
        link.href = url;
        document.head.appendChild(link);
      });
    };

    element.addEventListener('mouseenter', prefetchImages, { once: true, passive: true });
    element.addEventListener('touchstart', prefetchImages, { once: true, passive: true });

    return () => {
      element.removeEventListener('mouseenter', prefetchImages);
      element.removeEventListener('touchstart', prefetchImages);
    };
  }, [imageUrls]);

  return ref;
};
