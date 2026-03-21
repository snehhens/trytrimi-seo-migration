import { useEffect, useRef, useState } from "react";

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

/**
 * Hook to track element visibility using Intersection Observer
 * Useful for lazy loading and performance optimization
 */
export const useIntersectionObserver = ({
  threshold = 0,
  rootMargin = "0px",
  freezeOnceVisible = false,
}: UseIntersectionObserverProps = {}): [
  React.RefObject<HTMLDivElement>,
  boolean
] => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const frozen = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // If already frozen, don't set up observer
    if (frozen.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        setIsVisible(isIntersecting);

        if (isIntersecting && freezeOnceVisible) {
          frozen.current = true;
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, freezeOnceVisible]);

  return [ref, isVisible];
};
