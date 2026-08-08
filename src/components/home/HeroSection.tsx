"use client";

import { useState } from "react";
import Link from "next/link";
import { GraduationCap, Target, Star, ClipboardList, Brain, Users, MapPin } from "lucide-react";
import PathFinderModal from "../ui/PathFinderModal";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={styles.hero}>
      {/* Aurora Background */}
      <div className={styles.aurora}>
        <div className={styles.auroraBlob1} />
        <div className={styles.auroraBlob2} />
        <div className={styles.auroraBlob3} />
      </div>
      <div className={styles.gridOverlay} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className={styles.grid}>
          {/* Main Copy */}
          <div className={styles.content}>
            <div className={styles.badge}>
              <MapPin size={16} />
              <span>Antalya Muratpaşa — İsmet Paşa Tramvay Durağı Yanı</span>
            </div>

            <h1 className={styles.title}>
              Kalabalıkta{" "}
              <span className={styles.titleHighlight}>Kaybolma,</span>
              Zirveye Ulaş!
            </h1>

            <p className={styles.subtitle}>
              Boyut Eğitim Kurumları; 16+ seçkin yayınevi deneme kulübü, yapay
              zeka destekli MADLEN sistemi ve kişiye özel rehberlik ile
              öğrencilerini Türkiye derecesine hazırlar.
            </p>

            <div className={styles.ctaGroup}>
              <Link href="/bursluluk-sinavi" className={styles.primaryBtn}>
                <GraduationCap size={20} /> Bursluluk Sınavına Başvur →
              </Link>
              <button
                className={styles.secondaryBtn}
                onClick={() => setIsModalOpen(true)}
              >
                <Target size={20} /> 30 Saniyede Özel YKS Rotan
              </button>
            </div>

            <div className={styles.features}>
              <span className={styles.featureItem}>
                <span className={styles.checkIcon}>✓</span> %98 Memnuniyet
              </span>
              <span className={styles.featureItem}>
                <span className={styles.checkIcon}>✓</span> 16+ Yayınevi
              </span>
              <span className={styles.featureItem}>
                <span className={styles.checkIcon}>✓</span> Birebir Takip
              </span>
            </div>
          </div>

          {/* Institutional Highlights Card */}
          <div className={styles.visualWrapper}>
            <div className={styles.floatingBadge}><Star size={14} fill="currentColor" style={{marginRight: '4px', verticalAlign: 'text-bottom'}} /> 5.0 Google Puanı</div>

            <div className={styles.instCard}>
              <div className={styles.instHeader}>
                <span className={styles.instBadge}>BOYUT EĞİTİM FARKI</span>
                <h3>Neden Boyut Eğitim?</h3>
              </div>

              <div className={styles.instList}>
                <div className={styles.instItem}>
                  <div
                    className={styles.instIconWrapper}
                    style={{ background: "rgba(30, 111, 255, 0.15)" }}
                  >
                    <ClipboardList size={24} />
                  </div>
                  <div>
                    <h4>16+ Yayınevi Deneme Kulübü</h4>
                    <p>
                      Özdebir, Töder, 3D, Bilgi Sarmal ve daha fazlası ile
                      gerçek YKS provası.
                    </p>
                  </div>
                </div>

                <div className={styles.instItem}>
                  <div
                    className={styles.instIconWrapper}
                    style={{ background: "rgba(124, 58, 237, 0.15)", color: "#7C3AED" }}
                  >
                    <Brain size={24} />
                  </div>
                  <div>
                    <h4>MADLEN Akıllı Eksik Takibi</h4>
                    <p>
                      Girdiğin tüm denemelerin soru bazlı analizi ve kişisel
                      gelişim karnesi.
                    </p>
                  </div>
                </div>

                <div className={styles.instItem}>
                  <div
                    className={styles.instIconWrapper}
                    style={{ background: "rgba(255, 107, 53, 0.15)", color: "#FF6B35" }}
                  >
                    <Users size={24} />
                  </div>
                  <div>
                    <h4>Düzenli Veli Bilgilendirmesi</h4>
                    <p>
                      Aileniz sürecin her adımını şeffaf takip eder, başarı
                      birlikte inşa edilir.
                    </p>
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
