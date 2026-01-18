"use client";

import { useEffect, useRef, useState, RefObject } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

interface UseScrollAnimationReturn<T extends HTMLElement> {
  ref: RefObject<T | null>;
  isVisible: boolean;
  hasAnimated: boolean;
}

/**
 * Custom hook for scroll-triggered animations using Intersection Observer.
 * Returns a ref to attach to the element and visibility state.
 */
export function useScrollAnimation<T extends HTMLElement = HTMLElement>(
  options: UseScrollAnimationOptions = {}
): UseScrollAnimationReturn<T> {
  const { threshold = 0.2, rootMargin = "0px", triggerOnce = true } = options;

  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setHasAnimated(true);

            if (triggerOnce) {
              observer.disconnect();
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible, hasAnimated };
}

/**
 * Hook for staggered animations with multiple elements.
 * Useful for lists and grids where items animate in sequence.
 */
export function useStaggeredAnimation<T extends HTMLElement = HTMLElement>(
  itemCount: number,
  baseDelay: number = 100,
  options: UseScrollAnimationOptions = {}
): UseScrollAnimationReturn<T> & { getDelay: (index: number) => string } {
  const animation = useScrollAnimation<T>(options);

  const getDelay = (index: number): string => {
    return animation.isVisible ? `${(index + 1) * baseDelay}ms` : "0ms";
  };

  return { ...animation, getDelay };
}
