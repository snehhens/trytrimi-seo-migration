import { useEffect } from "react";
import { useLocation } from "@/compat/react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Always scroll to top on pathname change. Good enough for SPA-like UX.
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};
