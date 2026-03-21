import { useEffect, RefObject } from "react";

/**
 * Hook to optimize touch interactions for mobile
 */
export const useTouchOptimization = (ref: RefObject<HTMLElement>) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Enable hardware acceleration for touch
    element.style.touchAction = 'manipulation';
    (element.style as any).webkitTapHighlightColor = 'transparent';
    
    // Improve scrolling performance
    (element.style as any).webkitOverflowScrolling = 'touch';
  }, [ref]);
};

/**
 * Hook to handle passive event listeners for better scroll performance
 */
export const usePassiveScroll = (callback: () => void) => {
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          callback();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [callback]);
};

/**
 * Hook to detect and optimize for touch devices
 */
export const useIsTouchDevice = (): boolean => {
  if (typeof window === 'undefined') return false;

  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    (navigator as any).msMaxTouchPoints > 0
  );
};

/**
 * Hook to prevent iOS rubber band scrolling
 */
export const usePreventOverscroll = (ref: RefObject<HTMLElement>) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let startY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const y = e.touches[0].clientY;
      const scrollTop = element.scrollTop;
      const scrollHeight = element.scrollHeight;
      const height = element.clientHeight;

      // Prevent overscroll at top and bottom
      if (
        (scrollTop === 0 && y > startY) ||
        (scrollTop + height >= scrollHeight && y < startY)
      ) {
        e.preventDefault();
      }
    };

    element.addEventListener('touchstart', handleTouchStart, { passive: true });
    element.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
    };
  }, [ref]);
};

/**
 * Hook to optimize viewport for mobile
 */
export const useViewportOptimization = () => {
  useEffect(() => {
    // Prevent zoom on iOS
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute(
        'content',
        'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
      );
    }

    // Optimize for notch and safe areas
    if ('CSS' in window && 'supports' in window.CSS) {
      if (window.CSS.supports('padding-top: env(safe-area-inset-top)')) {
        document.documentElement.style.setProperty(
          '--safe-area-top',
          'env(safe-area-inset-top)'
        );
        document.documentElement.style.setProperty(
          '--safe-area-bottom',
          'env(safe-area-inset-bottom)'
        );
      }
    }
  }, []);
};
