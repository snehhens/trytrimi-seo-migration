/**
 * Defer non-critical operations to idle time or after load
 * This helps reduce main-thread blocking and improve performance
 */

export const deferToIdle = (callback: () => void, timeout = 2000) => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(callback, { timeout });
  } else {
    setTimeout(callback, 1);
  }
};

export const deferAfterLoad = (callback: () => void, delay = 0) => {
  if (document.readyState === 'complete') {
    setTimeout(callback, delay);
  } else {
    window.addEventListener('load', () => {
      setTimeout(callback, delay);
    }, { once: true });
  }
};

export const batchDOMReads = (callback: () => void) => {
  requestAnimationFrame(callback);
};

export const batchDOMWrites = (callback: () => void) => {
  requestAnimationFrame(() => {
    requestAnimationFrame(callback);
  });
};

// Safe for SSR — only read matchMedia in a browser context
export const reducedMotion =
  typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;
