import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  onLoad?: () => void;
}

export const OptimizedImage = ({
  src,
  fallbackSrc,
  alt,
  className,
  width,
  height,
  priority = false,
  onLoad
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setCurrentSrc(src);
    setError(false);
    setIsLoaded(false);
  }, [src]);

  // Intersection Observer for better lazy loading
  useEffect(() => {
    if (priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '50px' }
    );

    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    // Batch DOM write to avoid forced reflow
    requestAnimationFrame(() => {
      setIsLoaded(true);
      onLoad?.();
    });
  };

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setError(false);
      return;
    }
    setError(true);
    console.error(`Failed to load image: ${currentSrc}`);
  };

  if (error) {
    return (
      <div 
        className={cn("bg-muted flex items-center justify-center", className)}
        role="img"
        aria-label={alt}
        style={width && height ? { aspectRatio: `${width}/${height}` } : undefined}
      >
        <span className="text-muted-foreground text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <img
      ref={imgRef}
      src={isInView ? currentSrc : undefined}
      alt={alt}
      className={cn(
        "transition-opacity duration-300",
        isLoaded ? "opacity-100" : "opacity-100",
        className
      )}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      onLoad={handleLoad}
      onError={handleError}
      style={width && height ? { aspectRatio: `${width}/${height}` } : undefined}
    />
  );
};
