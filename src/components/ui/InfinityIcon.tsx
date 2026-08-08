import React from "react";

export default function InfinityIcon({ width = 36, height = 24, className = "" }: { width?: number, height?: number, className?: string }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ display: "inline-block", overflow: "visible" }}
    >
      <defs>
        <linearGradient id="blueGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0072FF" />
          <stop offset="100%" stopColor="#00C6FF" />
        </linearGradient>
        <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF416C" />
          <stop offset="100%" stopColor="#FF8F00" />
        </linearGradient>
      </defs>
      {/* Right loop (Orange) */}
      <path
        d="M12 12c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4"
        stroke="url(#orangeGrad)"
      />
      {/* Left loop (Blue) */}
      <path
        d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4"
        stroke="url(#blueGrad)"
      />
    </svg>
  );
}
