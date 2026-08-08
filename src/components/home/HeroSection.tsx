"use client";

import Link from "next/link";
import ParticleBackground from "../ui/ParticleBackground";
import { SITE_CONFIG } from "../../lib/constants";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <ParticleBackground />

      <div className={styles.glowBlue} />
      <div className={styles.glowOrange} />

      <div className={`container ${styles.content}`}>
        <div className={styles.tagWrapper}>
          <span className={styles.tagIcon}>✨</span>
          <span className={styles.tagText}>Türkiye Yüzyılı Maarif Modeli Uyumlu</span>
          <span className={styles.tagBadge}>Yapay Zeka Destekli</span>
        </div>

        <h1 className={styles.title}>
          <span className={styles.titleSub}>Öğrenmede BOYUT&apos;unuz Değişecek</span>
          <span className={styles.titleMain}>
            KALABALIKTA <span className={styles.highlightOrange}>KAYBOLMA!</span>
          </span>
        </h1>

        <p className={styles.subtitle}>
          Kazananların Dünyası&apos;nda sen de yerini al. Yapay zeka destekli{" "}
          <strong className={styles.madlenText}>MADLEN Eğitim Sistemi</strong>,{" "}
          16+ yayın evli <strong className={styles.madlenText}>Deneme Kulübü</strong> ve kişiye özel analiz ile hedeflerine ulaş.
        </p>

        <div className={styles.ctaGroup}>
          <a
            href={SITE_CONFIG.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            📱 WhatsApp ile Hemen Bilgi Al
          </a>
          <Link href="/madlen" className="btn-secondary">
            🧠 MADLEN AI Sistemini Keşfet
          </Link>
        </div>

        <div className={styles.treeSection}>
          <div className={styles.treeTitle}>SINAVI NE KAZANDIRIR?</div>
          <div className={styles.treeGrid}>
            <div className={styles.treeCard}>
              <div className={styles.treeVisual}>🌱</div>
              <div className={styles.treeLabel}>ZEKA</div>
              <div className={styles.treeSub}>Temel Potansiyel</div>
            </div>

            <div className={styles.plusIcon}>+</div>

            <div className={styles.treeCard}>
              <div className={styles.treeVisual}>🌿</div>
              <div className={styles.treeLabel}>ZEKA + ÇABA</div>
              <div className={styles.treeSub}>Düzenli Çalışma</div>
            </div>

            <div className={styles.plusIcon}>+</div>

            <div className={`${styles.treeCard} ${styles.treeCardActive}`}>
              <div className={styles.badge}>BOYUT EĞİTİM FARKI</div>
              <div className={styles.treeVisual}>🌳</div>
              <div className={styles.treeLabel}>ZEKA + ÇABA + DİSİPLİN</div>
              <div className={styles.treeSub}>MADLEN AI Destekli Zirve</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
