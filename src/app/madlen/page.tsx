import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import WhatsAppButton from "../../components/ui/WhatsAppButton";
import { SITE_CONFIG, MADLEN_FEATURES } from "../../lib/constants";
import styles from "./madlen.module.css";

export const metadata = {
  title: "MADLEN AI Yapay Zeka Destekli Eğitim — Boyut Eğitim",
  description: "Türkiye Yüzyılı Maarif Modeli Uyumlu Yapay Zeka Destekli MADLEN Eğitim Sistemi. Öğrencinin gelişimini analiz eden kişiselleştirilmiş öğrenme platformu.",
};

export default function MadlenPage() {
  return (
    <main>
      <Navbar />

      <section className={styles.hero}>
        <div className="container">
          <span className="section-tag">Yapay Zeka Teknolojisi</span>
          <h1 className={styles.title}>
            MADLEN <span className="gradient-text-orange">Eğitim Sistemi</span>
          </h1>
          <p className={styles.subtitle}>
            Öğrencinin gelişimini analiz eden, eksiklerini belirleyen ve öğrenme sürecini kişiselleştiren yeni nesil eğitim yaklaşımı.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {MADLEN_FEATURES.map((item, idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.icon}>{item.icon}</div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
            ))}
          </div>

          <div className={styles.detailBox}>
            <h2>MADLEN Nasıl Çalışır?</h2>
            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.stepNum}>1</div>
                <div>
                  <h4>Deneme Sınavı Verisi Toplanır</h4>
                  <p>Girilen her denemenin soru bazlı sonuçları MADLEN yapay zeka sistemine aktarılır.</p>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNum}>2</div>
                <div>
                  <h4>Konu Bazlı Eksik Analizi Yapılır</h4>
                  <p>Hangi alt başlıkta kaçırılan netler var? Zeka ve algoritma bunları tespit eder.</p>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNum}>3</div>
                <div>
                  <h4>Sana Özel Çalışma Planı Hazırlanır</h4>
                  <p>Aynı konuları tekrar tekrar çalışmak yerine sadece eksik olduğun noktalara odaklanırsın.</p>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNum}>4</div>
                <div>
                  <h4>Veliye Şeffaf Gelişim Raporu Gönderilir</h4>
                  <p>Ailen öğrencinin haftalık net artışını ve performansını anlık olarak izler.</p>
                </div>
              </div>
            </div>

            <div className={styles.ctaBox}>
              <h3>MADLEN AI Sistemini Deneyimlemeye Hazır mısın?</h3>
              <a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                📱 WhatsApp&apos;tan Bilgi & Demo İste
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
