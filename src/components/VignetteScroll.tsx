"use client";

import { useEffect, useRef } from "react";

export default function VignetteScroll() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const section = el.closest("section");
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const viewH = window.innerHeight;
      const centerY = rect.top + rect.height / 2;
      const distFromCenter = Math.abs(centerY - viewH / 2);
      const maxDist = viewH * 0.7;
      const progress = Math.min(distFromCenter / maxDist, 1);

      // Fade out text content as section moves away from viewport center
      const opacity = 1 - progress * 0.65;
      const scale = 1 - progress * 0.015;

      el.style.opacity = String(Math.max(opacity, 0.1));
      el.style.transform = `scale(${scale})`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="relative z-10 w-full transition-none"
      style={{ willChange: "opacity, transform" }}
      id="hero-content"
    />
  );
}
