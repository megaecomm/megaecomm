"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Disable if user has set reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let lenis: Lenis | null = null;
    let animId: number | null = null;
    let resizeTimer: NodeJS.Timeout;

    const initLenis = () => {
      // Strictly keep native 120Hz/60Hz hardware momentum scrolling on mobile and tablet (< 1024px)
      // Virtual smooth scrolling (Lenis) is kept strictly for desktop and laptop mouse wheels (>= 1024px)
      const isDesktop = window.innerWidth >= 1024;

      if (!isDesktop) {
        if (lenis) {
          lenis.destroy();
          lenis = null;
          (window as any).lenis = null;
          if (animId) {
            cancelAnimationFrame(animId);
            animId = null;
          }
        }
        return;
      }

      if (lenis) return; // Already initialized on desktop

      lenis = new Lenis({
        duration: 0.9,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Silky exponential curve
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1.0, // Natural 1:1 wheel responsiveness
        touchMultiplier: 1.0,
        syncTouch: false,
      });

      (window as any).lenis = lenis;

      function raf(time: number) {
        if (lenis) {
          lenis.raf(time);
          animId = requestAnimationFrame(raf);
        }
      }

      animId = requestAnimationFrame(raf);
    };

    initLenis();

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        initLenis();
        if (lenis) {
          lenis.resize();
        }
      }, 150);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
      if (animId) cancelAnimationFrame(animId);
      if (lenis) {
        lenis.destroy();
        (window as any).lenis = null;
      }
    };
  }, []);

  return <>{children}</>;
}
