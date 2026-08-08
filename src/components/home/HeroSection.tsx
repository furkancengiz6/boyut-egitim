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
              <span>✨ Antalya Muratpaşa — İsmet Paşa Tramvay Durağı Yanı</span>
            </div>

            <h1 className={styles.title}>
              Kalabalık Sınıflarda Kaybolma,{" "}
              <span className="gradient-text-orange">Zirveye Ulaş!</span>
            </h1>

            <p className={styles.subtitle}>
              Boyut Eğitim Kurumları; 16+ seçkin yayınevi deneme kulübü, Türkiye Yüzyılı Maarif Modeli uyumlu MADLEN yapay zeka takip altyapısı ve uzman kadrosu ile başarıyı garanti eder.
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
                <span className={styles.checkIcon}>✓</span> %98 Öğrenci Memnuniyeti
              </div>
              <div className={styles.featureItem}>
                <span className={styles.checkIcon}>✓</span> 16+ Yayın Deneme Kulübü
              </div>
              <div className={styles.featureItem}>
                <span className={styles.checkIcon}>✓</span> Birebir Veli & Öğrenci Takibi
              </div>
            </div>
          </div>

          {/* Educational Tree Growth Graphic */}
          <div className={styles.visualWrapper}>
            <div className={styles.treeCard}>
              <div className={styles.treeHeader}>
                <h3>Boyut Eğitim Gelişim Formülü</h3>
                <p>Başarıya Giden 3 Temel Aşama</p>
              </div>

              <div className={styles.treeGrid}>
                <div className={styles.treeStage}>
                  <span className={styles.stageIcon}>🌱</span>
                  <div>
                    <div className={styles.stageTitle}>1. ZEKA</div>
                    <div className={styles.stageDesc}>Potansiyelini keşfet ve yönlendir.</div>
                  </div>
                </div>

                <div className={styles.treeStage}>
                  <span className={styles.stageIcon}>🌿</span>
                  <div>
                    <div className={styles.stageTitle}>2. ZEKA + ÇABA</div>
                    <div className={styles.stageDesc}>Düzenli ders ve etüt çalışması.</div>
                  </div>
                </div>

                <div className={styles.treeStage} style={{ border: "2px solid #F57C00", background: "rgba(245, 124, 0, 0.05)" }}>
                  <span className={styles.stageIcon}>🌳</span>
                  <div>
                    <div className={styles.stageTitle} style={{ color: "#F57C00" }}>3. ZEKA + ÇABA + DİSİPLİN</div>
                    <div className={styles.stageDesc}>Boyut Eğitim ile Türkiye Derecesi!</div>
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
