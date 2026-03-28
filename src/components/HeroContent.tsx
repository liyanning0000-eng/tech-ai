"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function HeroContent() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const viewH = window.innerHeight;
      const progress = Math.min(scrollY / (viewH * 0.55), 1);
      el.style.opacity = String(Math.max(1 - progress * 0.88, 0.04));
      el.style.transform = `translateY(${progress * 28}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      style={{ willChange: "opacity, transform" }}
    >
      {/* Badge */}
      <div
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-10"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(12px)",
          fontSize: "0.6875rem",
          color: "rgba(255,255,255,0.45)",
          letterSpacing: "0.05em",
        }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "#4ade80", animation: "pulse 2s ease-in-out infinite" }}
        />
        Hong Kong SAR &nbsp;&#124;&nbsp; Est. March 2026
      </div>

      {/* Headline */}
      <h1
        className="font-semibold tracking-tight leading-none mb-6"
        style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}
      >
        <span className="block text-white">Empowering Lives</span>
        <span
          className="block"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.25) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Through Intelligent
        </span>
        <span className="block text-white">Technology</span>
      </h1>

      {/* Slogan */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <div style={{ width: 28, height: 1, background: "rgba(255,255,255,0.12)" }} />
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.28)",
          }}
        >
          &#29992; AI &#25913;&#21464;&#19968;&#20999; &nbsp;&middot;&nbsp; Change Everything With AI
        </p>
        <div style={{ width: 28, height: 1, background: "rgba(255,255,255,0.12)" }} />
      </div>

      <p
        className="max-w-xl mx-auto leading-relaxed mb-12"
        style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.3)" }}
      >
        Nova Tech AI Limited builds AI-powered web applications that transform
        the way people interact with their most important memories and moments.
      </p>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link href="/products" className="btn-primary btn-glow w-full sm:w-auto">
          Explore Our Products
        </Link>
        <Link href="/about" className="btn-secondary w-full sm:w-auto">
          About the Company
        </Link>
      </div>

      {/* Star hint */}
      <p
        className="mt-10 uppercase tracking-widest"
        style={{ fontSize: "0.5625rem", color: "rgba(255,255,255,0.12)" }}
      >
        Hover the stars to discover more
      </p>
    </div>
  );
}
