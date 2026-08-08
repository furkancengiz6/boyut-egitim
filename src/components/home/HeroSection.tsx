"use client";

import { useState } from "react";
import Link from "next/link";
import PathFinderModal from "../ui/PathFinderModal";
import ParticleBackground from "../ui/ParticleBackground";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={styles.hero}>
      <ParticleBackground />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className={styles.grid}>
          {/* Main Copy */}
          <div className={styles.content}>
            <div className={styles.badge}>
              <span>📍 Antalya Muratpaşa — İsmet Paşa Tramvay Durağı Yanı</span>
            </div>

            <h1 className={styles.title}>
              Kalabalıkta Kaybolma,{" "}
              <span className="gradient-text-orange">Zirveye Ulaş!</span>
            </h1>

            <p className={styles.subtitle}>
              Boyut Eğitim Kurumları; 16+ seçkin yayınevi deneme kulübü, birebir rehberlik ve kişiye özel gelişim takibi ile öğrencilerini Türkiye derecesine hazırlar.
            </p>

            <div className={styles.actions}>
              <Link href="/bursluluk-sinavi" className="btn-primary">
                🎓 Bursluluk Sınavına Başvur →
              </Link>

              <button
                className="btn-secondary"
                onClick={() => setIsModalOpen(true)}
              >
                🎯 30 Saniyede Özel YKS Rotan
              </button>
            </div>

            <div className={styles.features}>
              <div className={styles.featureItem}>
                <span className={styles.checkIcon}>✓</span> %98 Memnuniyet Oranı
              </div>
              <div className={styles.featureItem}>
                <span className={styles.checkIcon}>✓</span> 16+ Seçkin Yayınevi
              </div>
              <div className={styles.featureItem}>
                <span className={styles.checkIcon}>✓</span> Birebir Veli & Öğrenci Takibi
              </div>
            </div>
          </div>

          {/* Institutional Highlights Card */}
          <div className={styles.visualWrapper}>
            <div className={styles.instCard}>
              <div className={styles.instHeader}>
                <span className={styles.instBadge}>BOYUT EĞİTİM FARKI</span>
                <h3>Neden Boyut Eğitim?</h3>
              </div>

              <div className={styles.instList}>
                <div className={styles.instItem}>
                  <span className={styles.instIcon}>📋</span>
                  <div>
                    <h4>16+ Yayınevi Deneme Kulübü</h4>
                    <p>Özdebir, Töder, 3D, Bilgi Sarmal ve daha fazlası ile gerçek YKS provası.</p>
                  </div>
                </div>

                <div className={styles.instItem}>
                  <span className={styles.instIcon}>📊</span>
                  <div>
                    <h4>MADLEN Akıllı Eksik Takibi</h4>
                    <p>Girdiğin tüm denemelerin soru bazlı analizi ve kişisel gelişim karnesi.</p>
                  </div>
                </div>

                <div className={styles.instItem}>
                  <span className={styles.instIcon}>👨‍👩‍👧</span>
                  <div>
                    <h4>Düzenli Veli Bilgilendirmesi</h4>
                    <p>Aileniz sürecin her adımını şeffaf takip eder, başarı birlikte inşa edilir.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PathFinderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
