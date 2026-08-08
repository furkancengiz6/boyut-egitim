"use client";

import styles from "./ParticleBackground.module.css";

export default function ParticleBackground() {
  return (
    <div className={styles.bgContainer}>
      {/* Brand Flowing Waves (Belirgin Mavi & Turuncu Çizgiler) */}
      <svg className={styles.waveSvg} viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
        {/* Blue Ribbon Wave */}
        <path
          d="M -100 150 C 300 20, 700 320, 1540 80"
          stroke="url(#blueWaveGrad)"
          strokeWidth="3.5"
          strokeDasharray="8 4"
          fill="none"
          opacity="0.85"
        />
        <path
          d="M -100 180 C 350 40, 750 360, 1540 110"
          stroke="rgba(10, 79, 168, 0.12)"
          strokeWidth="24"
          fill="none"
        />

        {/* Orange Ribbon Wave */}
        <path
          d="M -100 380 C 400 180, 850 480, 1540 260"
          stroke="url(#orangeWaveGrad)"
          strokeWidth="3.5"
          fill="none"
          opacity="0.85"
        />
        <path
          d="M -100 410 C 420 210, 880 510, 1540 290"
          stroke="rgba(245, 124, 0, 0.1)"
          strokeWidth="30"
          fill="none"
        />

        <defs>
          <linearGradient id="blueWaveGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0A4FA8" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#0284C7" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0A4FA8" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="orangeWaveGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F57C00" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#FF9800" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#F57C00" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Subtle Glow Highlights */}
      <div className={styles.lightOrb1} />
      <div className={styles.lightOrb2} />
    </div>
  );
}
