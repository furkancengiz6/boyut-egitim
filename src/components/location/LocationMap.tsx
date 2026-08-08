"use client";

import { SITE_CONFIG } from "../../lib/constants";
import styles from "./LocationMap.module.css";

export default function LocationMap() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "Boyut Eğitim Kurumları İsmet Paşa Tramvay Durağı Gaziantep"
  )}`;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <span className={styles.badge}>🚃 Tramvay Durağı Yanı</span>
          <h3 className={styles.title}>Kolay Ulaşım & Konum</h3>
        </div>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          📍 Google Maps Yol Tarifi
        </a>
      </div>

      <div className={styles.mapCard}>
        <div className={styles.mapVisual}>
          <div className={styles.pulsePin}>
            <span className={styles.pinIcon}>📍</span>
            <div className={styles.ring} />
          </div>
          <div className={styles.locationInfo}>
            <h4>{SITE_CONFIG.name}</h4>
            <p>{SITE_CONFIG.address}, {SITE_CONFIG.city}</p>
            <span className={styles.tramInfo}>🚃 İsmet Paşa Tramvay Durağı 10 Metre Mesafede</span>
          </div>
        </div>

        {/* Google Maps Embed iframe */}
        <iframe
          title="Boyut Eğitim Harita"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.8!2d37.38!3d37.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDAzJzM2LjAiTiAzN8KwMjInNDguMCJF!5e0!3m2!1str!2str!4v1620000000000!5m2!1str!2str"
          width="100%"
          height="320"
          style={{ border: 0, borderRadius: "16px" }}
          allowFullScreen={false}
          loading="lazy"
        />
      </div>
    </div>
  );
}
