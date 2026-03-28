import { ImageResponse } from "next/og";

export const alt = "Nova Tech AI Limited";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#020202",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 96px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Dot grid texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.022) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 120,
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
          }}
        />

        {/* Logo row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            position: "relative",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              border: "1.5px solid rgba(255,255,255,0.25)",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 20,
              fontWeight: 700,
              background: "rgba(255,255,255,0.04)",
            }}
          >
            N
          </div>
          <span
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: 17,
              fontWeight: 500,
              letterSpacing: "0.02em",
            }}
          >
            Nova Tech AI Limited
          </span>
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <p
            style={{
              fontSize: 13,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.2)",
              margin: 0,
              marginBottom: 20,
            }}
          >
            Hong Kong SAR &nbsp;&middot;&nbsp; Est. March 2026
          </p>

          <h1
            style={{
              fontSize: 80,
              fontWeight: 600,
              color: "white",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              margin: 0,
              marginBottom: 0,
            }}
          >
            Change Everything
          </h1>
          <h1
            style={{
              fontSize: 80,
              fontWeight: 600,
              color: "rgba(255,255,255,0.2)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              margin: 0,
              marginBottom: 28,
            }}
          >
            With AI
          </h1>

          <p
            style={{
              fontSize: 19,
              color: "rgba(255,255,255,0.3)",
              margin: 0,
              letterSpacing: "0.06em",
            }}
          >
            AI-Powered Web Applications &nbsp;&bull;&nbsp; Restore.xyz &nbsp;&bull;&nbsp; FuneratPhoto
          </p>
        </div>

        {/* Bottom meta */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <span
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.12)",
              letterSpacing: "0.1em",
            }}
          >
            novatechai.com
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 12,
              color: "rgba(255,255,255,0.12)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#4ade80",
              display: "block",
            }}
            />
            Active &amp; Growing
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
