"use client";

import Link from "next/link";
import { PenTool, BookOpen } from "lucide-react";
import styles from "./YaziliHazirlikBanner.module.css";

export default function YaziliHazirlikBanner() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.textContent}>
            <span className={styles.badge}><PenTool size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Okul Sınavı Destek Programı</span>
            <h2 className={styles.title}>
              1. ve 2. Dönem <span className="gradient-text-blue">Yazılı Hazırlık Çalışmaları</span>
            </h2>
            <p className={styles.subtitle}>
              Matematik, Fizik, Kimya, Biyoloji ve Türkçe derslerinden sınav öncesi yoğunlaştırılmış yazılıya hazırlık etüt grupları! Okul notlarını yükselt, ortalamanı zirveye taşı.
            </p>
            <div className={styles.ctaRow}>
              <Link href="/yazili-hazirlik" className={styles.btn}>
                <BookOpen size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} /> Yazılı Hazırlık Grubuna Kaydol →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
