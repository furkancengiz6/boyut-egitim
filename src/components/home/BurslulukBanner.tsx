"use client";

import Link from "next/link";
import styles from "./BurslulukBanner.module.css";

export default function BurslulukBanner() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.content}>
            <span className={styles.badge}>🎓 Başarı Bursu Fırsatı</span>
            <h2 className={styles.title}>
              Boyut Eğitim <span className="gradient-text-orange">Bursluluk Sınavı</span> Başvuruları Başladı!
            </h2>
            <p className={styles.subtitle}>
              %100&apos;e varan eğitim bursu kazanma şansı ve derece kadromuzda yer alma fırsatını kaçırmayın. 9, 10, 11 ve 12. sınıf öğrencileri katılabilir.
            </p>
            <div className={styles.ctaRow}>
              <Link href="/bursluluk-sinavi" className="btn-primary">
                📝 Bursluluk Sınavına Başvur →
              </Link>
              <span className={styles.dateMeta}>🗓 Sınav Tarihi: Yakında Açıklanacak</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
