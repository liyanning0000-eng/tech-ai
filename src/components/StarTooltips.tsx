"use client";

import { useState } from "react";

interface StarItem {
  id: number;
  x: string;
  y: string;
  color: string;
  glow: string;
  question: string;
  answer: string;
  tooltipDir: "right" | "left" | "bottom";
}

const stars: StarItem[] = [
  {
    id: 1,
    x: "12%",
    y: "22%",
    color: "#22c55e",
    glow: "rgba(34,197,94,0.4)",
    question: "When was Nova Tech AI founded?",
    answer: "March 2026",
    tooltipDir: "right",
  },
  {
    id: 2,
    x: "82%",
    y: "18%",
    color: "#3b82f6",
    glow: "rgba(59,130,246,0.4)",
    question: "Where is the company located?",
    answer: "Hong Kong SAR, China",
    tooltipDir: "left",
  },
  {
    id: 3,
    x: "7%",
    y: "62%",
    color: "#a855f7",
    glow: "rgba(168,85,247,0.4)",
    question: "What is the core business?",
    answer: "AI-powered web applications",
    tooltipDir: "right",
  },
  {
    id: 4,
    x: "88%",
    y: "58%",
    color: "#f97316",
    glow: "rgba(249,115,22,0.4)",
    question: "How many active products?",
    answer: "2 products — RestorePic & FuneralPhoto",
    tooltipDir: "left",
  },
  {
    id: 5,
    x: "22%",
    y: "80%",
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.4)",
    question: "Is user data stored or shared?",
    answer: "Never — zero data retention policy",
    tooltipDir: "right",
  },
  {
    id: 6,
    x: "72%",
    y: "78%",
    color: "#ec4899",
    glow: "rgba(236,72,153,0.4)",
    question: "Which markets do you serve?",
    answer: "Global, with primary focus on the US",
    tooltipDir: "left",
  },
];

function StarIcon({ color, glow, active }: { color: string; glow: string; active: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      style={{
        filter: active
          ? `drop-shadow(0 0 8px ${glow}) drop-shadow(0 0 16px ${glow})`
          : `drop-shadow(0 0 4px ${glow})`,
        transition: "filter 0.3s ease, transform 0.3s ease",
        transform: active ? "scale(1.35)" : "scale(1)",
      }}
    >
      <path
        d="M11 2L13.4 7.8L19.6 8.5L15.1 12.7L16.4 19L11 15.9L5.6 19L6.9 12.7L2.4 8.5L8.6 7.8L11 2Z"
        fill={color}
        fillOpacity={active ? 1 : 0.7}
        stroke={color}
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function StarTooltips() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 15 }}>
      {stars.map((star) => {
        const isActive = active === star.id;
        const isLeft = star.tooltipDir === "left";

        return (
          <div
            key={star.id}
            className="absolute pointer-events-auto"
            style={{ left: star.x, top: star.y, transform: "translate(-50%, -50%)" }}
            onMouseEnter={() => setActive(star.id)}
            onMouseLeave={() => setActive(null)}
          >
            {/* Pulse ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: star.glow,
                animation: "pulse-ring 2.5s ease-in-out infinite",
                transform: "scale(1)",
                opacity: isActive ? 0 : 1,
              }}
            />

            {/* Star */}
            <div className="relative cursor-pointer select-none">
              <StarIcon color={star.color} glow={star.glow} active={isActive} />
            </div>

            {/* Tooltip */}
            <div
              className="absolute"
              style={{
                ...(isLeft
                  ? { right: "calc(100% + 16px)", left: "auto" }
                  : { left: "calc(100% + 16px)", right: "auto" }),
                top: "50%",
                transform: "translateY(-50%)",
                opacity: isActive ? 1 : 0,
                pointerEvents: isActive ? "auto" : "none",
                transition: "opacity 0.2s ease, transform 0.2s ease",
                transformOrigin: isLeft ? "right center" : "left center",
                scale: isActive ? "1" : "0.92",
                whiteSpace: "nowrap",
              }}
            >
              <div
                className="relative px-4 py-3 rounded-xl text-sm"
                style={{
                  background: "rgba(8,8,8,0.7)",
                  border: `1px solid ${star.color}33`,
                  boxShadow: `0 0 24px ${star.glow}22, 0 4px 24px rgba(0,0,0,0.7)`,
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                }}
              >
                {/* Arrow */}
                <div
                  className="absolute top-1/2 -translate-y-1/2"
                  style={{
                    ...(isLeft
                      ? { right: -6, borderLeft: `6px solid ${star.color}33`, borderRight: "none" }
                      : { left: -6, borderRight: `6px solid ${star.color}33`, borderLeft: "none" }),
                    width: 0,
                    height: 0,
                    borderTop: "5px solid transparent",
                    borderBottom: "5px solid transparent",
                  }}
                />

                <p
                  className="text-[10px] uppercase tracking-widest mb-1"
                  style={{ color: star.color, opacity: 0.8 }}
                >
                  {star.question}
                </p>
                <p className="text-white font-semibold text-sm">
                  {star.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}

      <style>{`
        @keyframes pulse-ring {
          0%   { transform: scale(1);   opacity: 0.4; }
          50%  { transform: scale(2.2); opacity: 0.1; }
          100% { transform: scale(1);   opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}
