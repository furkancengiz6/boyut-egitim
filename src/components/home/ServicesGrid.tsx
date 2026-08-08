"use client";

import Link from "next/link";
import { SERVICES } from "../../lib/constants";
import styles from "./ServicesGrid.module.css";

export default function ServicesGrid() {
  return (
    <section className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag">Ayrıcalıklarımız</span>
          <h2 className="section-title">
            Neden <span className="gradient-text-blue">Boyut Eğitim?</span>
          </h2>
          <p className="section-subtitle">
            Kalabalık sınıflarda kaybolmak yerine, her detayının senin başarın için tasarlandığı özel bir öğrenme ekosistemi.
          </p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((service, idx) => (
            <Link key={idx} href={service.href} className={styles.card}>
              <div
                className={styles.iconBox}
                style={{
                  background: `${service.color}15`,
                  borderColor: `${service.color}40`,
                }}
              >
                <span>{service.icon}</span>
              </div>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.desc}>{service.description}</p>
              <div className={styles.arrow} style={{ color: service.color }}>
                Detaylı Bilgi →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
