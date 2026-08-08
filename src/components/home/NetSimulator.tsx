"use client";

import { useState } from "react";
import { SITE_CONFIG } from "../../lib/constants";
import styles from "./NetSimulator.module.css";

export default function NetSimulator() {
  const [field, setField] = useState<"say" | "ea" | "soz">("say");
  const [tytNet, setTytNet] = useState<number>(65);
  const [aytNet, setAytNet] = useState<number>(45);

  // Simple score estimation formula for demo simulation
  const tytScore = Math.min(500, Math.round(100 + tytNet * 3.3));
  const aytScore = Math.min(500, Math.round(100 + tytNet * 1.5 + aytNet * 3.2));
  const totalEstimatedScore = Math.round((tytScore * 0.4 + aytScore * 0.6));

  const getTargetTier = (score: number) => {
    if (score >= 450) return { title: "Zirve Derece Hedefi (İlk 10.000)", badge: "🏆 Tıp / Derece Mühendislik", color: "#FFB300" };
    if (score >= 380) return { title: "Üst Segment Başarı (İlk 30.000)", badge: "🥇 Mühendislik / Hukuk / Mimarlık", color: "#1E8FD5" };
    if (score >= 300) return { title: "Güçlü Lisans Hedefi (İlk 80.000)", badge: "🥈 İktisat / Eğitim / Sağlık", color: "#F57C00" };
    return { title: "Gelişim Modu (MADLEN Sıçrama Alanı)", badge: "🎯 Net Artış Kampı Gereklidir", color: "#42A5F5" };
  };

  const tier = getTargetTier(totalEstimatedScore);

  const getWhatsappLink = () => {
    const msg = encodeURIComponent(
      `Merhaba Boyut Eğitim, Net Simülatöründe TYT: ${tytNet} Net, AYT: ${aytNet} Net (${totalEstimatedScore} Puan) hedefledim. MADLEN sistemi ve Deneme Kulübü hakkında bilgi almak istiyorum.`
    );
    return `https://wa.me/905060272741?text=${msg}`;
  };

  return (
    <section className="section" style={{ background: "var(--bg-secondary)", position: "relative" }}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag">İnteraktif Simülatör</span>
          <h2 className="section-title">
            YKS Hedef & Net <span className="gradient-text-orange">Simülatörü</span>
          </h2>
          <p className="section-subtitle">
            Hedeflediğin TYT ve AYT netlerini ayarla, MADLEN yapay zeka sisteminin seni ulaştırabileceği tahmini puanı ve derece potansiyelini keşfet!
          </p>
        </div>

        <div className={styles.simulatorCard}>
          {/* Field Selection */}
          <div className={styles.fieldSelector}>
            <button
              className={`${styles.fieldBtn} ${field === "say" ? styles.fieldActive : ""}`}
              onClick={() => setField("say")}
            >
              📐 Sayısal
            </button>
            <button
              className={`${styles.fieldBtn} ${field === "ea" ? styles.fieldActive : ""}`}
              onClick={() => setField("ea")}
            >
              ⚖️ Eşit Ağırlık
            </button>
            <button
              className={`${styles.fieldBtn} ${field === "soz" ? styles.fieldActive : ""}`}
              onClick={() => setField("soz")}
            >
              📚 Sözel
            </button>
          </div>

          <div className={styles.slidersGrid}>
            {/* TYT Slider */}
            <div className={styles.sliderBox}>
              <div className={styles.sliderHeader}>
                <span className={styles.sliderLabel}>Hedeflenen TYT Neti</span>
                <span className={styles.sliderValue}>{tytNet} / 120 Net</span>
              </div>
              <input
                type="range"
                min="20"
                max="120"
                value={tytNet}
                onChange={(e) => setTytNet(Number(e.target.value))}
                className={styles.rangeInput}
              />
              <div className={styles.rangeMeta}>
                <span>20 Net</span>
                <span>60 Net</span>
                <span>120 Net</span>
              </div>
            </div>

            {/* AYT Slider */}
            <div className={styles.sliderBox}>
              <div className={styles.sliderHeader}>
                <span className={styles.sliderLabel}>Hedeflenen AYT Neti</span>
                <span className={styles.sliderValue}>{aytNet} / 80 Net</span>
              </div>
              <input
                type="range"
                min="10"
                max="80"
                value={aytNet}
                onChange={(e) => setAytNet(Number(e.target.value))}
                className={styles.rangeInput}
              />
              <div className={styles.rangeMeta}>
                <span>10 Net</span>
                <span>40 Net</span>
                <span>80 Net</span>
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className={styles.resultBox}>
            <div className={styles.scoreDisplay}>
              <div className={styles.scoreSub}>MADLEN AI Tahmini YKS Puanı</div>
              <div className={styles.scoreBig}>{totalEstimatedScore} <span className={styles.scoreUnit}>Puan</span></div>
            </div>

            <div className={styles.tierInfo}>
              <div className={styles.tierBadge} style={{ background: `${tier.color}20`, borderColor: tier.color, color: tier.color }}>
                {tier.badge}
              </div>
              <h4 className={styles.tierTitle}>{tier.title}</h4>
              <p className={styles.tierDesc}>
                Boyut Eğitim&apos;in 16+ yayınevi denemesi ve yapay zeka eksik analizi ile bu net seviyesine sistemli bir şekilde ulaşabilirsin.
              </p>
            </div>

            <div className={styles.actionArea}>
              <a
                href={getWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                📱 Bu Hedef İçin Çalışma Planı İste (WhatsApp)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
