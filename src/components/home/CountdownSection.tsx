"use client";

import { useState, useEffect } from "react";
import PathFinderModal from "../ui/PathFinderModal";
import styles from "./CountdownSection.module.css";

export default function CountdownSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target YKS Date (Example June 20, 2027)
    const targetDate = new Date("2027-06-20T10:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.bannerCard}>
          <div className={styles.textSide}>
            <span className={styles.badge}>⏳ Zaman Hızla Akıyor</span>
            <h2 className={styles.title}>
              YKS Marotonuna <span className="gradient-text-orange">Geç Kalma!</span>
            </h2>
            <p className={styles.subtitle}>
              Erken başlayanlar kazanıyor. Zeka, çaba ve disiplin üçlüsüyle hedefine zamanında ulaş.
            </p>

            <button
              onClick={() => setModalOpen(true)}
              className="btn-primary"
              style={{ marginTop: "16px" }}
            >
              🚀 30 Saniyede Özel Rotanı Keşfet →
            </button>
          </div>

          <div className={styles.timerSide}>
            <div className={styles.timerGrid}>
              <div className={styles.timeBox}>
                <span className={styles.num}>{timeLeft.days}</span>
                <span className={styles.unit}>GÜN</span>
              </div>
              <div className={styles.timeBox}>
                <span className={styles.num}>{timeLeft.hours}</span>
                <span className={styles.unit}>SAAT</span>
              </div>
              <div className={styles.timeBox}>
                <span className={styles.num}>{timeLeft.minutes}</span>
                <span className={styles.unit}>DAKİKA</span>
              </div>
              <div className={styles.timeBox}>
                <span className={styles.num}>{timeLeft.seconds}</span>
                <span className={styles.unit}>SANİYE</span>
              </div>
            </div>
            <div className={styles.timerMeta}>YKS Sınavına Kalan Tahmini Süre</div>
          </div>
        </div>
      </div>

      <PathFinderModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
