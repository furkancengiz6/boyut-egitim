"use client";

import { useState } from "react";
import { Trophy, Medal, Target } from "lucide-react";
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
    if (score >= 450) return { title: "Zirve Derece Hedefi (İlk 10.000)", badge: <span style={{display: 'flex', alignItems: 'center', gap: '4px'}}><Trophy size={14} /> Tıp / Derece Mühendislik</span>, color: "#FFB300" };
    if (score >= 380) return { title: "Üst Segment Başarı (İlk 30.000)", badge: <span style={{display: 'flex', alignItems: 'center', gap: '4px'}}><Medal size={14} /> Mühendislik / Hukuk / Mimarlık</span>, color: "#1E8FD5" };
    if (score >= 300) return { title: "Güçlü Lisans Hedefi (İlk 80.000)", badge: <span style={{display: 'flex', alignItems: 'center', gap: '4px'}}><Medal size={14} /> İktisat / Eğitim / Sağlık</span>, color: "#F57C00" };
    return { title: "Gelişim Modu (MADLEN Sıçrama Alanı)", badge: <span style={{display: 'flex', alignItems: 'center', gap: '4px'}}><Target size={14} /> Net Artış Kampı Gereklidir</span>, color: "#42A5F5" };
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

        <div className={styles.simBox}>
          <div className={styles.controlsGrid}>
            <div className={styles.ctrlCard}>
              <div className={styles.ctrlHeader}>
                <span className={styles.ctrlTitle}>Alan Seçimi</span>
              </div>
              <select
                className={styles.slider}
                value={field}
                onChange={(e) => setField(e.target.value as "say" | "ea" | "soz")}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  color: "white",
                  padding: "12px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  outline: "none",
                  marginTop: "8px",
                  cursor: "pointer"
                }}
              >
                <option value="say">Sayısal</option>
                <option value="ea">Eşit Ağırlık</option>
                <option value="soz">Sözel</option>
              </select>
            </div>

            <div className={styles.ctrlCard}>
              <div className={styles.ctrlHeader}>
                <span className={styles.ctrlTitle}>TYT Neti</span>
                <span className={styles.ctrlVal}>{tytNet}</span>
              </div>
              <input
                type="range"
                min="20"
                max="120"
                value={tytNet}
                onChange={(e) => setTytNet(Number(e.target.value))}
                className={styles.slider}
                style={{ marginTop: "12px" }}
              />
            </div>

            <div className={styles.ctrlCard}>
              <div className={styles.ctrlHeader}>
                <span className={styles.ctrlTitle}>AYT Neti</span>
                <span className={styles.ctrlVal}>{aytNet}</span>
              </div>
              <input
                type="range"
                min="10"
                max="80"
                value={aytNet}
                onChange={(e) => setAytNet(Number(e.target.value))}
                className={styles.slider}
                style={{ marginTop: "12px" }}
              />
            </div>
          </div>

          <div className={styles.resultCard}>
            <div className={styles.resLeft}>
              <h4>MADLEN AI TAHMİNİ Puan</h4>
              <div className={styles.resScore}>{totalEstimatedScore}</div>
              <div className={styles.resTier}>{tier.badge}</div>
            </div>

            <a
              href={getWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              WhatsApp İle Çalışma Planı İste →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
