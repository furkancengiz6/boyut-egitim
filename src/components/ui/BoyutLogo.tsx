import React from "react";
import Image from "next/image";

interface BoyutLogoProps {
  height?: number;
  showText?: boolean;
}

export default function BoyutLogo({ height = 36, showText = true }: BoyutLogoProps) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: "12px" }}>
      <div style={{ position: "relative", height: `${height}px`, width: `${Math.round(height * 1.2)}px`, flexShrink: 0 }}>
        <Image
          src="/assets/boyut-logo.png"
          alt="Boyut Eğitim Kurumları"
          fill
          sizes="100px"
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      {showText && (
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "1.25rem",
              fontWeight: 900,
              color: "#0A4FA8",
              letterSpacing: "0.03em",
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
            }}
          >
            EĞİTİM KURUMLARI
          </span>
        </div>
      )}
    </div>
  );
}
