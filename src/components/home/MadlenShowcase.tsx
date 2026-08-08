"use client";

import Link from "next/link";
import Image from "next/image";
import { MADLEN_FEATURES } from "../../lib/constants";
import styles from "./MadlenShowcase.module.css";

export default function MadlenShowcase() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag">Geleceğin Eğitimi Bugünden</span>
          <h2 className="section-title">
            Yapay Zeka Destekli <span className="gradient-text-orange">MADLEN</span> Eğitim Sistemi
          </h2>
          <p className="section-subtitle">
            Öğrencinin gelişimini analiz eden, eksiklerini tespit eden ve öğrenme sürecini kişiselleştiren yeni nesil teknoloji.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Left: AI Feature Cards & Mascot */}
          <div className={styles.leftCol}>
            <div className={styles.mascotBanner}>
              <div className={styles.mascotImgWrapper}>
                <Image
                  src="/assets/madlen-mascot.png"
                  alt="MADLEN AI Maskot"
                  width={140}
                  height={140}
                  className={styles.mascotImg}
                />
              </div>
              <div className={styles.mascotText}>
                <h4>MADLEN AI Asistanı</h4>
                <p>&ldquo;Senin yerinde olsaydım bu hafta Fizik Elektrik konusunu tekrar ederdim!&rdquo;</p>
              </div>
            </div>

            <div className={styles.features}>
              {MADLEN_FEATURES.map((feature, idx) => (
                <div key={idx} className={styles.featureCard}>
                  <div className={styles.iconBox}>{feature.icon}</div>
                  <div>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                    <p className={styles.featureDesc}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Interactive AI Dashboard Mockup */}
          <div className={styles.mockupContainer}>
            <div className={styles.scanLine} />
            <div className={styles.mockupHeader}>
              <div className={styles.dots}>
                <span className={styles.dotRed} />
                <span className={styles.dotYellow} />
                <span className={styles.dotGreen} />
              </div>
              <span className={styles.mockupTitle}>MADLEN AI — Öğrenci Paneli Mockup (CANLI VİTRİN)</span>
            </div>

            <div className={styles.mockupBody}>
              {/* Profile Bar */}
              <div className={styles.profileBar}>
                <div className={styles.avatar}>🧠</div>
                <div>
                  <div className={styles.profileName}>Öğrenci: Can DEMİRBAŞ</div>
                  <div className={styles.profileMeta}>12. Sınıf — Sayısal | Hedef: 480+ Puan</div>
                </div>
                <div className={styles.aiStatus}>
                  <span className={styles.statusDot} />
                  AI Analiz Aktif
                </div>
              </div>

              {/* Stat Cards */}
              <div className={styles.dashboardStats}>
                <div className={styles.dStat}>
                  <div className={styles.dLabel}>Net Ortalaması</div>
                  <div className={styles.dVal}>98.5 <span className={styles.up}>+12.4</span></div>
                </div>
                <div className={styles.dStat}>
                  <div className={styles.dLabel}>Tamamlanma</div>
                  <div className={styles.dVal}>84%</div>
                </div>
                <div className={styles.dStat}>
                  <div className={styles.dLabel}>Gelişim Skoru</div>
                  <div className={styles.dVal}>9.2 / 10</div>
                </div>
              </div>

              {/* Progress Bars */}
              <div className={styles.progressSection}>
                <div className={styles.progressItem}>
                  <div className={styles.progressHeader}>
                    <span>Matematik (TYT)</span>
                    <span>%92 Başarı</span>
                  </div>
                  <div className={styles.barTrack}>
                    <div className={styles.barFill} style={{ width: "92%" }} />
                  </div>
                </div>

                <div className={styles.progressItem}>
                  <div className={styles.progressHeader}>
                    <span>Fizik (AYT) — Öncelikli Tekrar</span>
                    <span>%74 Başarı</span>
                  </div>
                  <div className={styles.barTrack}>
                    <div className={`${styles.barFill} ${styles.warningFill}`} style={{ width: "74%" }} />
                  </div>
                </div>

                <div className={styles.progressItem}>
                  <div className={styles.progressHeader}>
                    <span>Kimya & Biyoloji</span>
                    <span>%88 Başarı</span>
                  </div>
                  <div className={styles.barTrack}>
                    <div className={styles.barFill} style={{ width: "88%" }} />
                  </div>
                </div>
              </div>

              {/* AI Recommendation Alert */}
              <div className={styles.aiAlert}>
                <span className={styles.alertIcon}>💡</span>
                <div>
                  <strong>MADLEN AI Akıllı Öneri:</strong> &ldquo;Fizik — Elektrik ve Manyetizma konusundan 40 özel soru çözümü öneriliyor.&rdquo;
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.ctaWrapper}>
          <Link href="/madlen-demo" className="btn-primary">
            🧪 Canlı MADLEN AI Demo Testini Başlat →
          </Link>
        </div>
      </div>
    </section>
  );
}
