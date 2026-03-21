/**
 * Third-party script optimization utilities
 */
import { isDev } from "@/lib/runtime-env";

interface ScriptOptions {
  async?: boolean;
  defer?: boolean;
  module?: boolean;
  crossOrigin?: 'anonymous' | 'use-credentials';
  integrity?: string;
  referrerPolicy?: string;
}

/**
 * Load third-party scripts with optimal settings
 */
export const loadThirdPartyScript = (
  src: string,
  options: ScriptOptions = {},
  callback?: () => void
): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Check if script already loaded
    if (document.querySelector(`script[src="${src}"]`)) {
      callback?.();
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    
    if (options.async) script.async = true;
    if (options.defer) script.defer = true;
    if (options.module) script.type = 'module';
    if (options.crossOrigin) script.crossOrigin = options.crossOrigin;
    if (options.integrity) script.integrity = options.integrity;
    if (options.referrerPolicy) script.referrerPolicy = options.referrerPolicy;

    script.onload = () => {
      callback?.();
      resolve();
    };

    script.onerror = () => {
      reject(new Error(`Failed to load script: ${src}`));
    };

    document.body.appendChild(script);
  });
};

/**
 * Lazy load third-party scripts after page is interactive
 */
export const lazyLoadThirdPartyScripts = (scripts: Array<{ src: string; options?: ScriptOptions }>) => {
  if (typeof window === 'undefined') return;

  const loadScripts = () => {
    scripts.forEach(({ src, options }) => {
      loadThirdPartyScript(src, options).catch((error) => {
        console.warn('Failed to load third-party script:', error);
      });
    });
  };

  if (document.readyState === 'complete') {
    setTimeout(loadScripts, 1000);
  } else {
    window.addEventListener('load', () => {
      setTimeout(loadScripts, 1000);
    });
  }
};

/**
 * Load scripts with consent management
 */
export const loadScriptWithConsent = (
  src: string,
  category: 'analytics' | 'marketing' | 'functional',
  options?: ScriptOptions
): Promise<void> => {
  // Check if consent is given (implement your consent logic here)
  const hasConsent = checkConsent(category);

  if (!hasConsent) {
    return Promise.reject(new Error(`No consent for ${category} scripts`));
  }

  return loadThirdPartyScript(src, options);
};

/**
 * Simple consent checker (customize based on your consent management)
 */
const checkConsent = (category: string): boolean => {
  // For now, allow all in development
  if (isDev) return true;

  // Check localStorage or cookie for consent
  const consent = localStorage.getItem('cookie-consent');
  if (!consent) return false;

  try {
    const consentData = JSON.parse(consent);
    return consentData[category] === true;
  } catch {
    return false;
  }
};

/**
 * Preconnect to third-party domains
 */
export const preconnectThirdParty = (domains: string[]) => {
  domains.forEach((domain) => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    link.crossOrigin = '';
    document.head.appendChild(link);
  });
};

/**
 * Monitor third-party script performance
 */
export const monitorThirdPartyPerformance = () => {
  if (!window.performance) return;

  const resources = window.performance.getEntriesByType('resource') as PerformanceResourceTiming[];
  
  const thirdPartyResources = resources.filter((resource) => {
    const url = new URL(resource.name);
    return url.origin !== window.location.origin;
  });

  const slow = thirdPartyResources.filter((resource) => resource.duration > 1000);
  
  if (slow.length > 0) {
    console.group('⚠️ Slow Third-Party Resources');
    slow.forEach((resource) => {
      console.warn(`${resource.name}: ${resource.duration.toFixed(2)}ms`);
    });
    console.groupEnd();
  }
};
