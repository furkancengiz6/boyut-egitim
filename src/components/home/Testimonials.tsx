"use client";

import { TESTIMONIALS } from "../../lib/constants";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <section className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag">Başarı Hikayeleri</span>
          <h2 className="section-title">
            Öğrencilerimiz <span className="gradient-text-blue">Ne Diyor?</span>
          </h2>
          <p className="section-subtitle">
            Boyut Eğitim ile öğrenme boyutunu değiştiren, hedeflerine ulaşan öğrencilerimizin yorumları.
          </p>
        </div>

        <div className={styles.grid}>
          {TESTIMONIALS.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.avatar}>{item.avatar}</div>
                <div>
                  <h3 className={styles.name}>{item.name}</h3>
                  <div className={styles.grade}>{item.grade}</div>
                </div>
                <div className={styles.scoreBadge}>{item.score}</div>
              </div>
              <p className={styles.text}>&ldquo;{item.text}&rdquo;</p>
              <div className={styles.stars}>★★★★★</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
