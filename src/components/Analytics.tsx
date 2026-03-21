import { useEffect } from "react";
import { useLocation } from "@/compat/react-router-dom";
import { deferAfterLoad } from "@/utils/deferNonCritical";

// Google Analytics tracking ID
const GA_TRACKING_ID = "G-C7E6LPJHEH";

export const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track pageviews
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("config", GA_TRACKING_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

// Analytics event tracking utility
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, eventParams);
  }
};

// Initialize Google Analytics - Deferred to improve initial load
export const initAnalytics = () => {
  if (typeof window === "undefined") return;

  // Defer analytics loading until after page is interactive
  const loadAnalytics = () => {
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}', {
        page_path: window.location.pathname,
        send_page_view: false,
      });
    `;
    document.head.appendChild(script2);
  };

  // Use deferred loading utility - 2 seconds after page load
  deferAfterLoad(loadAnalytics, 2000);
};
