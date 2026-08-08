"use client";

import { Star } from "lucide-react";
import { GOOGLE_REVIEWS, SITE_CONFIG } from "../../lib/constants";
import styles from "./GoogleReviews.module.css";

export default function GoogleReviews() {
  return (
    <section className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.googleBadge}>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>5.0 Yıldız Google Müşteri Değerlendirmeleri</span>
          </div>

          <h2 className="section-title">
            Gerçek Öğrenci & Veli <span className="gradient-text-blue">Yorumları</span>
          </h2>
          <p className="section-subtitle">
            Antalya Boyut Eğitim Kurumları hakkında Google Haritalar&apos;daki gerçek öğrenci ve veli deneyimleri.
          </p>
        </div>

        <div className={styles.grid}>
          {GOOGLE_REVIEWS.map((rev, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.cardHeader}>
                <div
                  className={styles.avatar}
                  style={{ background: rev.avatarBg }}
                >
                  {rev.initials}
                </div>
                <div>
                  <h3 className={styles.author}>{rev.author}</h3>
                  <span className={styles.time}>{rev.relativeTime}</span>
                </div>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#F57C00" color="#F57C00" />
                  ))}
                </div>
              </div>
              <p className={styles.text}>&ldquo;{rev.text}&rdquo;</p>
              <div className={styles.verified}>
                <span className={styles.googleIcon}>G</span> Google Doğrulanmış Yorum
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaArea}>
          <a
            href={SITE_CONFIG.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Star size={18} fill="currentColor" /> Google&apos;da Tüm Yorumları İncele & Yorum Yap →
          </a>
        </div>
      </div>
    </section>
  );
}
