import { ReactNode } from "react";

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

export const LazySection = ({ 
  children, 
  className = "", 
  threshold = 0.1,
  rootMargin = "50px"
}: LazySectionProps) => {
  // Keep SSR and first client render identical to prevent hydration mismatches.
  // We can reintroduce viewport-based lazy behavior later with a client-only boundary.
  void threshold;
  void rootMargin;
  return <div className={className}>{children}</div>;
};
