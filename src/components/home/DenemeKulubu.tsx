"use client";

import Link from "next/link";
import { ClipboardList, Check, MessageCircle } from "lucide-react";
import { PUBLISHERS } from "../../lib/constants";
import styles from "./DenemeKulubu.module.css";

export default function DenemeKulubu() {
  return (
    <section className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag">16+ Seçkin Yayınevi</span>
          <h2 className="section-title">
            Türkiye Geneli <span className="gradient-text-blue">Deneme Kulübü</span>
          </h2>
          <p className="section-subtitle">
            Özdebir, Töder, 3D, Bilgi Sarmal ve Türkiye&apos;nin en kaliteli yayınevlerinin resmi sınavlarına Boyut Eğitim güvencesiyle katılın.
          </p>
        </div>

        {/* Multi-column grid layout */}
        <div className={styles.publisherGrid}>
          {PUBLISHERS.map((pub, idx) => (
            <div key={idx} className={styles.pubCard}>
              <span className={styles.checkBadge}><Check size={14} /></span>
              <span className={styles.pubName}>{pub}</span>
            </div>
          ))}
        </div>

        <div className={styles.bannerCard}>
          <div className={styles.bannerText}>
            <h3>10, 11 ve 12. Sınıf Öğrencilerimize Erken Kayıt Avantajı!</h3>
            <p>Sınırlı kontenjandan yararlanmak ve deneme kulübüne özel fiyat almak için hemen iletişime geçin.</p>
          </div>
          <div className={styles.btnGroup}>
            <Link href="/deneme-kulubu" className="btn-primary">
              <ClipboardList size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} /> Deneme Kulübü Sınav Takvimi →
            </Link>
            <a
              href="https://wa.me/905060272741?text=Merhaba%20Boyut%20E%C4%9Fitim%2C%20Deneme%20Kul%C3%BCb%C3%BC%20ve%20yayn%20takvimi%20hakknda%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              📱 WhatsApp İle Bilgi Al
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
