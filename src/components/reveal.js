"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reveals its children once when they scroll into view.
 *
 * Content starts visible in the HTML, so it stays readable without JavaScript.
 * Only elements that begin below the viewport are armed for the animation.
 */
export default function Reveal({ children }) {
  const ref = useRef(null);
  const [status, setStatus] = useState("static");

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const startsBelowViewport =
      node.getBoundingClientRect().top > window.innerHeight * 0.9;

    if (prefersReducedMotion || !startsBelowViewport) {
      return;
    }

    setStatus("hidden");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatus("visible");
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={
        status === "hidden"
          ? "translate-y-3 opacity-0"
          : "translate-y-0 opacity-100 transition-[transform,opacity] duration-500 ease-out"
      }
    >
      {children}
    </div>
  );
}
