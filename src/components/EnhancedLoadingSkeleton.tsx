import { memo } from "react";

/**
 * Enhanced loading skeleton with better animations and accessibility
 */
const SkeletonPulse = memo(({ 
  className = "",
  width = "100%",
  height = "20px",
  borderRadius = "4px"
}: { 
  className?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
}) => (
  <div 
    className={`animate-pulse bg-muted ${className}`}
    style={{ 
      width, 
      height, 
      borderRadius,
      backgroundImage: 'linear-gradient(90deg, hsl(var(--muted)) 0%, hsl(var(--muted) / 0.8) 50%, hsl(var(--muted)) 100%)',
      backgroundSize: '200% 100%',
      animation: 'shimmer 2s ease-in-out infinite',
    }}
    role="status"
    aria-label="Loading content"
  />
));
SkeletonPulse.displayName = "SkeletonPulse";

export const HeroLoadingSkeleton = memo(() => (
  <div className="container mx-auto px-4 py-20" role="status" aria-label="Loading page">
    <div className="max-w-4xl mx-auto space-y-6">
      <SkeletonPulse height="48px" width="80%" />
      <SkeletonPulse height="24px" width="100%" />
      <SkeletonPulse height="24px" width="90%" />
      <div className="flex gap-4 pt-6">
        <SkeletonPulse height="48px" width="150px" borderRadius="8px" />
        <SkeletonPulse height="48px" width="150px" borderRadius="8px" />
      </div>
    </div>
  </div>
));
HeroLoadingSkeleton.displayName = "HeroLoadingSkeleton";

export const ContentLoadingSkeleton = memo(() => (
  <div className="container mx-auto px-4 py-12" role="status" aria-label="Loading content">
    <div className="max-w-4xl mx-auto space-y-8">
      <SkeletonPulse height="32px" width="60%" />
      <div className="space-y-4">
        <SkeletonPulse height="16px" width="100%" />
        <SkeletonPulse height="16px" width="95%" />
        <SkeletonPulse height="16px" width="85%" />
      </div>
      <SkeletonPulse height="200px" width="100%" borderRadius="12px" />
      <div className="space-y-4">
        <SkeletonPulse height="16px" width="100%" />
        <SkeletonPulse height="16px" width="90%" />
      </div>
    </div>
  </div>
));
ContentLoadingSkeleton.displayName = "ContentLoadingSkeleton";

export const CardLoadingSkeleton = memo(() => (
  <div className="rounded-lg border border-border p-6 space-y-4" role="status" aria-label="Loading card">
    <SkeletonPulse height="24px" width="70%" />
    <SkeletonPulse height="16px" width="100%" />
    <SkeletonPulse height="16px" width="85%" />
    <div className="flex gap-4 pt-4">
      <SkeletonPulse height="40px" width="100px" borderRadius="8px" />
      <SkeletonPulse height="40px" width="100px" borderRadius="8px" />
    </div>
  </div>
));
CardLoadingSkeleton.displayName = "CardLoadingSkeleton";

export const GridLoadingSkeleton = memo(({ count = 3 }: { count?: number }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: count }).map((_, i) => (
      <CardLoadingSkeleton key={i} />
    ))}
  </div>
));
GridLoadingSkeleton.displayName = "GridLoadingSkeleton";

// Add shimmer animation to global styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
  `;
  document.head.appendChild(style);
}
