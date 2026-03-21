/**
 * Utility for deferring non-critical tasks until browser is idle
 * Improves initial page load performance
 */

type IdleTask = () => void;

const idleCallbackSupported = typeof window !== 'undefined' && 'requestIdleCallback' in window;

/**
 * Run a task when the browser is idle
 */
export const runWhenIdle = (task: IdleTask, timeout = 2000) => {
  if (idleCallbackSupported) {
    requestIdleCallback(task, { timeout });
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(task, 1);
  }
};

/**
 * Queue multiple tasks to run when idle
 */
export const queueIdleTasks = (tasks: IdleTask[]) => {
  tasks.forEach((task) => runWhenIdle(task));
};

/**
 * Preload images in the background when browser is idle
 */
export const preloadImagesWhenIdle = (imageUrls: string[]) => {
  runWhenIdle(() => {
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  });
};

/**
 * Load non-critical scripts when idle
 */
export const loadScriptWhenIdle = (src: string, attributes?: Record<string, string>) => {
  runWhenIdle(() => {
    if (document.querySelector(`script[src="${src}"]`)) {
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    
    if (attributes) {
      Object.entries(attributes).forEach(([key, value]) => {
        script.setAttribute(key, value);
      });
    }

    document.body.appendChild(script);
  });
};
