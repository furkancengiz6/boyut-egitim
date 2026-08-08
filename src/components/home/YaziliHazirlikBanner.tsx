"use client";

import Link from "next/link";
import styles from "./YaziliHazirlikBanner.module.css";

export default function YaziliHazirlikBanner() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.content}>
            <span className={styles.badge}>✍️ Okul Sınavı Destek Programı</span>
            <h2 className={styles.title}>
              1. ve 2. Dönem <span className="gradient-text-blue">Yazılı Hazırlık Çalışmaları</span>
            </h2>
            <p className={styles.subtitle}>
              Matematik, Fizik, Kimya, Biyoloji ve Türkçe derslerinden sınav öncesi yoğunlaştırılmış yazılıya hazırlık etüt grupları! Okul notlarını yükselt, ortalamanı zirveye taşı.
            </p>
            <div className={styles.ctaRow}>
              <Link href="/yazili-hazirlik" className="btn-secondary">
                📚 Yazılı Hazırlık Grubuna Kaydol →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
