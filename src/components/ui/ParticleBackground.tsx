"use client";

import styles from "./ParticleBackground.module.css";

export default function ParticleBackground() {
  return (
    <div className={styles.bgContainer}>
      {/* Soft Ambient Light Glows */}
      <div className={styles.lightOrb1} />
      <div className={styles.lightOrb2} />
      <div className={styles.lightOrb3} />

      {/* Subtle Geometric Brand Curves */}
      <svg className={styles.bgSvg} viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M-100 200 C 300 50, 700 350, 1540 100"
          stroke="rgba(10, 79, 168, 0.05)"
          strokeWidth="60"
          fill="none"
        />
        <path
          d="M-100 400 C 400 200, 800 500, 1540 300"
          stroke="rgba(245, 124, 0, 0.04)"
          strokeWidth="80"
          fill="none"
        />
      </svg>
    </div>
  );
}
