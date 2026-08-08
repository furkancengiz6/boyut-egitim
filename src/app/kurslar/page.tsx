"use client";

import { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import WhatsAppButton from "../../components/ui/WhatsAppButton";
import PreRegisterModal from "../../components/ui/PreRegisterModal";
import { SITE_CONFIG } from "../../lib/constants";
import styles from "./kurslar.module.css";

export default function KurslarPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState("11. Sınıf");

  const openModalWithGrade = (grade: string) => {
    setSelectedGrade(grade);
    setModalOpen(true);
  };

  return (
    <main>
      <Navbar />

      <section className={styles.hero}>
        <div className="container">
          <span className="section-tag">Başarı Odaklı Programlar</span>
          <h1 className={styles.title}>
            Eğitim <span className="gradient-text-blue">Programlarımız</span>
          </h1>
          <p className={styles.subtitle}>
            Her kademedeki öğrencinin ihtiyacına özel olarak tasarlanmış müfredat ve kişiselleştirilmiş rehberlik.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {/* Program 1 */}
            <div className={styles.card}>
              <div className={styles.badge}>ERKEN KAYIT AVANTAJI</div>
              <div className={styles.cardIcon}>📘</div>
              <h3>10. Sınıf Hazırlık Programı</h3>
              <p>Temel dersleri sağlamlaştır, lise başarını zirveye taşı. Erken başla, rakiplerine fark at.</p>
              <ul className={styles.list}>
                <li>✓ Konu Anlatımı & Özel Etütler</li>
                <li>✓ MADLEN AI Gelişim Analizi</li>
                <li>✓ Düzenli Veli Raporlaması</li>
                <li>✓ Deneme Kulübü Üyeliği</li>
              </ul>
              <button
                onClick={() => openModalWithGrade("10. Sınıf")}
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Program Detayları & Ön Kayıt
              </button>
            </div>

            {/* Program 2 */}
            <div className={`${styles.card} ${styles.popular}`}>
              <div className={styles.badgePopular}>EN ÇOK TERCİH EDİLEN</div>
              <div className={styles.cardIcon}>📙</div>
              <h3>11. Sınıf YKS Temel Programı</h3>
              <p>AYT altyapısını eksiksiz tamamla. 12. sınıfa geçerken büyük bir özgüven kazanın.</p>
              <ul className={styles.list}>
                <li>✓ 11. Sınıf Müfredat Tamamlama</li>
                <li>✓ TYT Başlangıç Modülleri</li>
                <li>✓ 16+ Yayınevi Deneme Sınavları</li>
                <li>✓ Kişiye Özel Soru Bankası</li>
              </ul>
              <button
                onClick={() => openModalWithGrade("11. Sınıf")}
                className="btn-whatsapp"
                style={{ width: "100%", justifyContent: "center" }}
              >
                📱 Erken Kayıt Fırsatı İste
              </button>
            </div>

            {/* Program 3 */}
            <div className={styles.card}>
              <div className={styles.badge}>ZİRVE HEDEFİ</div>
              <div className={styles.cardIcon}>🎓</div>
              <h3>12. Sınıf & Mezun TYT / AYT</h3>
              <p>Yoğunlaştırılmış sınav kampı. Sıfır hata stratejisi ve yapay zeka takibi ile hedefe kilitlen.</p>
              <ul className={styles.list}>
                <li>✓ Soru Çözüm Kampı & Seri Denemeler</li>
                <li>✓ Birebir Rehberlik & Koçluk</li>
                <li>✓ Sıfır Hata Kitapçıkları</li>
                <li>✓ Türkiye Geneli Derece Hedefi</li>
              </ul>
              <button
                onClick={() => openModalWithGrade("12. Sınıf / YKS")}
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Program Detayları & Ön Kayıt
              </button>
            </div>
          </div>
        </div>
      </section>

      <PreRegisterModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultGrade={selectedGrade}
      />

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
