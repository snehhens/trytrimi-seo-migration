import { useEffect } from "react";
import { runWhenIdle } from "@/utils/criticalTasks";

/**
 * Preload images for better performance
 * Uses requestIdleCallback to avoid blocking main thread
 */
export const useImagePreload = (imageUrls: string[]) => {
  useEffect(() => {
    if (!imageUrls.length) return;

    runWhenIdle(() => {
      imageUrls.forEach((url) => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.as = 'image';
        link.href = url;
        document.head.appendChild(link);
      });
    });
  }, [imageUrls]);
};

/**
 * Preload critical images immediately
 */
export const useImagePreloadCritical = (imageUrls: string[]) => {
  useEffect(() => {
    if (!imageUrls.length) return;

    imageUrls.forEach((url) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      link.setAttribute('fetchpriority', 'high');
      document.head.appendChild(link);
    });
  }, [imageUrls]);
};
