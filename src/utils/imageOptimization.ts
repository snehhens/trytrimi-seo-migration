/**
 * Image optimization utilities for better performance
 */

/**
 * Check if WebP is supported
 */
export const supportsWebP = (): boolean => {
  if (typeof document === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  if (!canvas.getContext || !canvas.getContext('2d')) {
    return false;
  }
  
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

/**
 * Check if AVIF is supported
 */
export const supportsAVIF = async (): Promise<boolean> => {
  if (typeof Image === 'undefined') return false;
  
  return new Promise((resolve) => {
    const avif = new Image();
    avif.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=';
    avif.onload = () => resolve(true);
    avif.onerror = () => resolve(false);
  });
};

/**
 * Get optimal image format based on browser support
 */
export const getOptimalImageFormat = async (): Promise<'avif' | 'webp' | 'jpg'> => {
  if (await supportsAVIF()) return 'avif';
  if (supportsWebP()) return 'webp';
  return 'jpg';
};

/**
 * Convert image URL to optimal format
 */
export const getOptimalImageUrl = (baseUrl: string, format?: 'avif' | 'webp' | 'jpg'): string => {
  if (!format) return baseUrl;
  
  const extension = baseUrl.split('.').pop();
  return baseUrl.replace(`.${extension}`, `.${format}`);
};

/**
 * Generate responsive image srcset
 */
export const generateSrcSet = (baseUrl: string, widths: number[]): string => {
  return widths
    .map((width) => {
      const url = baseUrl.replace(/\.(jpg|jpeg|png|webp)$/, `-${width}w.$1`);
      return `${url} ${width}w`;
    })
    .join(', ');
};

/**
 * Calculate optimal image size based on viewport
 */
export const getOptimalImageSize = (containerWidth: number): number => {
  const dpr = window.devicePixelRatio || 1;
  const sizes = [320, 640, 768, 1024, 1280, 1536, 1920];
  const targetWidth = containerWidth * dpr;
  
  return sizes.find((size) => size >= targetWidth) || sizes[sizes.length - 1];
};

/**
 * Lazy load background image
 */
export const lazyLoadBackgroundImage = (element: HTMLElement, imageUrl: string) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          element.style.backgroundImage = `url(${imageUrl})`;
          observer.disconnect();
        }
      });
    },
    { rootMargin: '50px' }
  );

  observer.observe(element);
};
