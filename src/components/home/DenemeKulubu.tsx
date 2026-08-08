"use client";

import Link from "next/link";
import { PUBLISHERS } from "../../lib/constants";
import styles from "./DenemeKulubu.module.css";

export default function DenemeKulubu() {
  return (
    <section className="section" style={{ position: "relative", overflow: "hidden" }}>
      <div className={styles.glow} />

      <div className="container">
        <div className={styles.header}>
          <span className="section-tag">Sınav Provasında Zirve</span>
          <h2 className="section-title">
            Boyut <span className="gradient-text-orange">DENEME KULÜBÜ</span> Kayıtları Başladı!
          </h2>
          <p className="section-subtitle">
            Türkiye&apos;nin en güçlü yayınevlerinin sınavları ile gerçek sınav deneyimi yaşa. Sıfır Hatalar kitapçıkları ve kişiye özel analiz ile eksiklerini tamamla.
          </p>
        </div>

        <div className={styles.pillsGrid}>
          <div className={styles.pill}>
            <span className={styles.pillIcon}>🎯</span>
            <div>
              <strong>En Güçlü Yayınlar</strong>
              <span>16+ Seçkin Yayınevi</span>
            </div>
          </div>

          <div className={styles.pill}>
            <span className={styles.pillIcon}>📊</span>
            <div>
              <strong>En Doğru Analiz</strong>
              <span>MADLEN AI Değerlendirmesi</span>
            </div>
          </div>

          <div className={styles.pill}>
            <span className={styles.pillIcon}>🏆</span>
            <div>
              <strong>En Yüksek Başarı</strong>
              <span>Net Artış Garantisi</span>
            </div>
          </div>
        </div>

        <div className={styles.publishersContainer}>
          <h3 className={styles.pubTitle}>Anlaşmalı Seçkin Yayınevlerimiz</h3>
          <div className={styles.pubGrid}>
            {PUBLISHERS.map((pub, idx) => (
              <div key={idx} className={styles.pubCard}>
                <span className={styles.pubCheck}>✓</span>
                <span className={styles.pubName}>{pub}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.ctaCard}>
          <div className={styles.ctaText}>
            <h3>10. ve 11. Sınıf Öğrencilerimize Erken Kayıt Avantajı!</h3>
            <p>Sınırlı kontenjandan yararlanmak ve deneme kulübüne özel fiyat almak için hemen iletişime geçin.</p>
          </div>
          <Link href="/deneme-kulubu" className="btn-primary">
            Deneme Kulübüne Kaydol →
          </Link>
        </div>
      </div>
    </section>
  );
}
