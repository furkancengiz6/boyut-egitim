import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import WhatsAppButton from "../../components/ui/WhatsAppButton";
import ExamSchedule from "../../components/home/ExamSchedule";
import { PUBLISHERS, SITE_CONFIG } from "../../lib/constants";
import styles from "./deneme.module.css";

export const metadata = {
  title: "Deneme Kulübü — Boyut Eğitim",
  description: "Türkiye'nin 16+ en iyi yayınevinin deneme sınavları Boyut Eğitim Deneme Kulübü'nde. Sıfır Hata Kitapçığı ve MADLEN AI analizi ile sınavı kazan.",
};

export default function DenemeKulubuPage() {
  return (
    <main>
      <Navbar />

      <section className={styles.hero}>
        <div className="container">
          <span className="section-tag">Gerçek Sınav Deneyimi</span>
          <h1 className={styles.title}>
            Boyut <span className="gradient-text-orange">Deneme Kulübü</span>
          </h1>
          <p className={styles.subtitle}>
            En güçlü yayınevleri, sıfır hata kitapçıkları ve yapay zeka destekli performans analizi ile rakiplerinin önüne geç.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>🎯</div>
              <h3>Kişiye Özel Analiz</h3>
              <p>Performansını net olarak gör, konu eksiklerini anında keşfet.</p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📖</div>
              <h3>Sıfır Hata Kitapçıkları</h3>
              <p>Hatalarından ders çıkar, bir daha aynı hatayı yapma.</p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📝</div>
              <h3>Kişiye Özel Soru Bankası</h3>
              <p>Sana özel sorularla eksiklerini tamamla, gücünü artır.</p>
            </div>
          </div>

          <ExamSchedule />

          <div className={styles.pubSection} style={{ marginTop: "40px" }}>
            <h2>Anlaşmalı Yayınevlerimiz</h2>
            <div className={styles.pubGrid}>
              {PUBLISHERS.map((pub, idx) => (
                <div key={idx} className={styles.pubBadge}>
                  ⭐ {pub}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.ctaBox}>
            <h2>Deneme Kulübü Kayıtları Devam Ediyor!</h2>
            <p>10. ve 11. Sınıf Öğrencilerimize Erken Kayıt Avantajı</p>
            <a
              href={SITE_CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              📱 WhatsApp&apos;tan Kayıt Ol & Fiyat Al
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
