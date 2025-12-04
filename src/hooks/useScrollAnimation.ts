import { useEffect } from 'react';

/**
 * Custom hook for scroll-triggered animations using Intersection Observer
 * Adds 'visible' class to elements with 'fade-in' or 'slide-up' classes when they enter viewport
 */
export const useScrollAnimation = (): void => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};