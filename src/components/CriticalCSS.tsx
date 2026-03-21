/**
 * Critical CSS component for above-the-fold content
 * Inlines minimal CSS to prevent render-blocking
 */
export const CriticalCSS = () => {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          /* Critical styles for immediate render */
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          html {
            -webkit-text-size-adjust: 100%;
            tab-size: 4;
          }
          
          body {
            font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.5;
            -webkit-font-smoothing: antialiased;
          }
          
          img, picture, video, canvas, svg {
            display: block;
            max-width: 100%;
            height: auto;
          }
          
          /* Prevent layout shift for images */
          img[width][height] {
            height: auto;
          }
          
          /* Loading state */
          .loading-skeleton {
            background: linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.05) 0%,
              rgba(0, 0, 0, 0.15) 50%,
              rgba(0, 0, 0, 0.05) 100%
            );
            background-size: 200% 100%;
            animation: loading 1.5s ease-in-out infinite;
          }
          
          @keyframes loading {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
          
          /* Focus visible for accessibility */
          *:focus-visible {
            outline: 2px solid #00bcd4;
            outline-offset: 2px;
          }
        `,
      }}
    />
  );
};
