import { ReactNode, useEffect, useRef } from "react";
import { useTouchOptimization, useViewportOptimization } from "@/hooks/useTouchOptimization";

interface MobileOptimizedProps {
  children: ReactNode;
  enableTouchOptimization?: boolean;
  enableViewportOptimization?: boolean;
}

/**
 * Wrapper component that optimizes children for mobile devices
 */
export const MobileOptimized = ({
  children,
  enableTouchOptimization = true,
  enableViewportOptimization = true,
}: MobileOptimizedProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Always call hooks (Rules of Hooks requirement)
  useTouchOptimization(enableTouchOptimization ? containerRef : { current: null });
  useViewportOptimization();

  useEffect(() => {
    // Add mobile-specific optimizations
    if (containerRef.current) {
      // Enable GPU acceleration
      containerRef.current.style.transform = 'translateZ(0)';
      
      // Optimize text rendering
      (containerRef.current.style as any).textSizeAdjust = '100%';
      (containerRef.current.style as any).webkitTextSizeAdjust = '100%';
    }
  }, []);

  return (
    <div ref={containerRef} className="mobile-optimized">
      {children}
    </div>
  );
};

/**
 * Hook to detect mobile device
 */
export const useIsMobile = (): boolean => {
  if (typeof window === 'undefined') return false;

  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
};

/**
 * Hook to detect iOS device
 */
export const useIsIOS = (): boolean => {
  if (typeof window === 'undefined') return false;

  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
};

/**
 * Hook to detect Android device
 */
export const useIsAndroid = (): boolean => {
  if (typeof window === 'undefined') return false;

  return /Android/i.test(navigator.userAgent);
};
