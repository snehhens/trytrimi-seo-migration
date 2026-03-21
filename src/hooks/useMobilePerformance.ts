import { useEffect } from 'react';
import { useNetworkStatus, useSlowConnection } from './useNetworkStatus';
import { useIsMobile } from './use-mobile';

/**
 * Mobile-specific performance optimizations
 */
export const useMobilePerformance = () => {
  const isMobile = useIsMobile();
  const isSlowConnection = useSlowConnection();
  const networkStatus = useNetworkStatus();

  useEffect(() => {
    if (!isMobile) return;

    // Reduce animation complexity on mobile
    if (isSlowConnection) {
      document.documentElement.style.setProperty('--animation-speed', '0.5');
      document.documentElement.classList.add('reduce-motion');
    }

    // Optimize touch scrolling
    document.body.style.touchAction = 'manipulation';
    (document.body.style as any).webkitOverflowScrolling = 'touch';

    // Reduce rendering layers on mobile
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            (entry.target as HTMLElement).style.willChange = 'auto';
          }
        });
      },
      { rootMargin: '50px' }
    );

    // Observe all animated elements
    document.querySelectorAll('[class*="animate"]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isMobile, isSlowConnection]);

  useEffect(() => {
    if (!isMobile) return;

    // Optimize images for mobile viewport
    const images = document.querySelectorAll('img[srcset]');
    images.forEach((img) => {
      if (isSlowConnection) {
        img.setAttribute('loading', 'lazy');
        img.setAttribute('decoding', 'async');
      }
    });

    // Disable expensive effects on slow connections
    if (isSlowConnection) {
      document.querySelectorAll('video, iframe').forEach((el) => {
        if (el instanceof HTMLVideoElement) {
          el.preload = 'none';
        }
      });
    }
  }, [isMobile, isSlowConnection, networkStatus]);

  return {
    isMobile,
    isSlowConnection,
    networkStatus,
    shouldReduceQuality: isSlowConnection,
    shouldDisableVideos: isSlowConnection,
    shouldReduceAnimations: isSlowConnection,
  };
};
