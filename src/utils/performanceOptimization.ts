/**
 * Advanced performance optimization utilities
 */

// Batch DOM reads and writes to prevent forced reflow
class DOMScheduler {
  private readQueue: Array<() => void> = [];
  private writeQueue: Array<() => void> = [];
  private scheduled = false;

  scheduleRead(callback: () => void) {
    this.readQueue.push(callback);
    this.schedule();
  }

  scheduleWrite(callback: () => void) {
    this.writeQueue.push(callback);
    this.schedule();
  }

  private schedule() {
    if (this.scheduled) return;
    this.scheduled = true;

    requestAnimationFrame(() => {
      // Execute all reads first
      const reads = [...this.readQueue];
      this.readQueue = [];
      reads.forEach(read => read());

      // Then execute all writes
      const writes = [...this.writeQueue];
      this.writeQueue = [];
      writes.forEach(write => write());

      this.scheduled = false;
    });
  }
}

export const domScheduler = new DOMScheduler();

// Optimize image loading with Intersection Observer
export const lazyLoadImages = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.dataset.src;
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
};

// Reduce layout thrashing for animations
export const optimizeAnimation = (element: HTMLElement, property: string, value: string) => {
  domScheduler.scheduleWrite(() => {
    element.style.setProperty(property, value);
  });
};

// Debounce expensive operations
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle scroll handlers
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle = false;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Prefetch route on interaction
export const prefetchRoute = (url: string) => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = url;
  link.as = 'document';
  document.head.appendChild(link);
};

// Optimize font loading
export const optimizeFontLoading = () => {
  if ('fonts' in document) {
    // Preload critical fonts
    const fonts = [
      new FontFace('Inter', 'url(/fonts/inter-var.woff2)', {
        weight: '400 700',
        display: 'swap'
      })
    ];

    fonts.forEach(font => {
      font.load().then(loadedFont => {
        (document.fonts as any).add(loadedFont);
      }).catch(() => {});
    });
  }
};

// Monitor long tasks
export const monitorLongTasks = () => {
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver(list => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) {
            console.warn(`Long task detected: ${entry.duration.toFixed(2)}ms`);
          }
        }
      });
      observer.observe({ entryTypes: ['longtask'] });
    } catch (e) {
      // Long task API not supported
    }
  }
};
