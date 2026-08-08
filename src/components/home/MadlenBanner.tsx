"use client";

import Link from "next/link";
import Image from "next/image";
import { Brain, FlaskConical } from "lucide-react";
import styles from "./MadlenBanner.module.css";

export default function MadlenBanner() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.mascotWrapper}>
            <Image
              src="/assets/madlen-mascot.png"
              alt="MADLEN AI Maskot"
              width={120}
              height={120}
              className={styles.mascotImg}
            />
          </div>

          <div className={styles.content}>
            <span className={styles.tag}><Brain size={16} /> Yapay Zeka Destekli Eğitim</span>
            <h2 className={styles.title}>
              MADLEN AI İle Eksiklerini <span className="gradient-text-orange">Nokta Atışı</span> Tespit Et!
            </h2>
            <p className={styles.subtitle}>
              Türkiye Yüzyılı Maarif Modeli uyumlu MADLEN yapay zeka sistemi, öğrencinin deneme sonuçlarını analiz ederek kişiye özel eksik analizi ve çalışma rotası çıkarır.
            </p>

            <div className={styles.btnRow}>
              <Link href="/madlen" className="btn-primary">
                <Brain size={18} /> MADLEN AI Sistemini İncele →
              </Link>
              <Link href="/madlen-demo" className="btn-secondary">
                <FlaskConical size={18} /> 3 Soruda Demo Testi Yap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
