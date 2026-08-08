import React from "react";

interface BoyutLogoProps {
  width?: number;
  height?: number;
  showText?: boolean;
}

export default function BoyutLogo({ width = 48, height = 32, showText = true }: BoyutLogoProps) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 120 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Blue Ribbon Gradient */}
          <linearGradient id="blueRibbon" x1="10" y1="60" x2="110" y2="10" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0044B3" />
            <stop offset="50%" stopColor="#0B66FF" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>

          {/* Orange Ribbon Gradient */}
          <linearGradient id="orangeRibbon" x1="10" y1="10" x2="110" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF7A00" />
            <stop offset="60%" stopColor="#F57C00" />
            <stop offset="100%" stopColor="#E65100" />
          </linearGradient>

          {/* Glow Shadow */}
          <filter id="logoGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0A4FA8" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Orange Outer Ribbon Loop */}
        <path
          d="M 25 35 C 5 15, 30 5, 55 25 C 75 40, 100 65, 110 40 C 118 20, 95 15, 75 30"
          stroke="url(#orangeRibbon)"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
          filter="url(#logoGlow)"
        />

        {/* Blue Main Ribbon Loop */}
        <path
          d="M 10 35 C 0 55, 30 65, 55 45 C 75 30, 95 5, 115 35 C 120 50, 90 65, 65 40 C 45 20, 20 15, 10 35 Z"
          fill="url(#blueRibbon)"
        />

        {/* Dynamic Infinity Curve overlay for smooth 3D effect */}
        <path
          d="M 15 38 C 30 18, 50 25, 65 38 C 80 50, 100 55, 110 35 C 95 52, 70 48, 55 35 C 40 22, 20 22, 15 38 Z"
          fill="url(#orangeRibbon)"
          opacity="0.9"
        />
      </svg>

      {showText && (
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "1.2rem",
              fontWeight: 900,
              color: "#0A4FA8",
              letterSpacing: "0.04em",
            }}
          >
            BOYUT
          </span>
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.62rem",
              fontWeight: 800,
              color: "#F57C00",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginTop: "2px",
            }}
          >
            EĞİTİM KURUMLARI
          </span>
        </div>
      )}
    </div>
  );
}
