import React from "react";
import InfinityIcon from "./InfinityIcon";

interface BoyutLogoProps {
  height?: number;
  showText?: boolean;
}

export default function BoyutLogo({ height = 44, showText = true }: BoyutLogoProps) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: "12px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: `${height}px`, flexShrink: 0 }}>
        <InfinityIcon width={height * 1.6} height={height} />
      </div>

      {showText && (
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "1.5rem",
              fontWeight: 900,
              background: "linear-gradient(135deg, #F0F6FF 0%, #94A3B8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "0.04em",
            }}
          >
            BOYUT
          </span>
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.68rem",
              fontWeight: 800,
              color: "#F57C00",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginTop: "-2px",
            }}
          >
            EĞİTİM KURUMLARI
          </span>
        </div>
      )}
    </div>
  );
}
