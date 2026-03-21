/**
 * Font optimization utilities for better performance
 */

/**
 * Preload fonts with optimal settings
 */
export const preloadFont = (fontUrl: string, fontFamily: string) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'font';
  link.type = 'font/woff2';
  link.href = fontUrl;
  link.crossOrigin = 'anonymous';
  document.head.appendChild(link);
};

/**
 * Load fonts with font-display: swap for better performance
 */
export const loadFontFace = (
  fontFamily: string,
  fontUrl: string,
  options: {
    weight?: string;
    style?: string;
    display?: 'auto' | 'block' | 'swap' | 'fallback' | 'optional';
  } = {}
) => {
  const { weight = '400', style = 'normal', display = 'swap' } = options;

  const fontFace = new FontFace(fontFamily, `url(${fontUrl})`, {
    weight,
    style,
    display,
  });

  fontFace.load().then((loadedFont) => {
    document.fonts.add(loadedFont);
  }).catch((error) => {
    console.warn(`Failed to load font ${fontFamily}:`, error);
  });
};

/**
 * Check if fonts are loaded
 */
export const isFontLoaded = (fontFamily: string): boolean => {
  if (!document.fonts) return true;
  return document.fonts.check(`12px ${fontFamily}`);
};

/**
 * Wait for fonts to load with timeout
 */
export const waitForFonts = (timeout = 3000): Promise<void> => {
  if (!document.fonts) return Promise.resolve();

  return Promise.race([
    document.fonts.ready.then(() => {}),
    new Promise<void>((resolve) => setTimeout(resolve, timeout)),
  ]);
};
