import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import WhatsAppButton from "../../components/ui/WhatsAppButton";
import LocationMap from "../../components/location/LocationMap";
import { SITE_CONFIG } from "../../lib/constants";
import { MessageCircle, MapPin, Phone } from "lucide-react";
import styles from "./iletisim.module.css";

export const metadata = {
  title: "İletişim & Konum — Boyut Eğitim",
  description: "Boyut Eğitim iletişim bilgileri, telefon, WhatsApp destek hattı ve adres. İsmet Paşa Tramvay Durağı Yanı.",
};

export default function IletisimPage() {
  return (
    <main>
      <Navbar />

      <section className={styles.hero}>
        <div className="container">
          <span className="section-tag">Bizimle İletişime Geçin</span>
          <h1 className={styles.title}>
            Bize <span className="gradient-text-orange">Ulaşın</span>
          </h1>
          <p className={styles.subtitle}>
            Erken kayıt fırsatları, Deneme Kulübü ve MADLEN AI sistemi hakkında bilgi almak için hemen yazın veya arayın.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.contactCards}>
              <a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.card} ${styles.whatsappCard}`}
              >
                <div className={styles.cardIcon}><MessageCircle size={32} /></div>
                <h3>WhatsApp Destek Hattı</h3>
                <p>En hızlı iletişim yöntemi. Sorularını sor, anında yanıt al.</p>
                <span className={styles.cardBtn}>WhatsApp ile Mesaj Gönder →</span>
              </a>

              <a href={`tel:${SITE_CONFIG.phone}`} className={styles.card}>
                <div className={styles.cardIcon}><Phone size={32} /></div>
                <h3>Telefon İletişim</h3>
                <p>GSM: {SITE_CONFIG.phone}</p>
                <span className={styles.cardBtn}>Hemen Ara →</span>
              </a>

              <div className={styles.infoCard}>
                <div className={styles.cardIcon}><MapPin size={32} color="#0284C7" /></div>
                <h3>Adres Bilgisi</h3>
                <p>{SITE_CONFIG.address}</p>
                <span className={styles.addressMeta}>Gaziantep</span>
              </div>
            </div>

            <div className={styles.infoBox}>
              <h2>Sosyal Medyada Boyut Eğitim</h2>
              <p>Etkinliklerimizi, derece öğrencilerimizi ve deneme sınav tarihlerimizi sosyal medya hesaplarımızdan takip edebilirsiniz.</p>

              <div className={styles.socialGrid}>
                <a
                  href={SITE_CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialCard}
                >
                  <span className={styles.socialIcon}>📷</span>
                  <div>
                    <strong>Instagram</strong>
                    <span>@boyutegitim_</span>
                  </div>
                </a>

                <a
                  href={SITE_CONFIG.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialCard}
                >
                  <span className={styles.socialIcon}>📘</span>
                  <div>
                    <strong>Facebook</strong>
                    <span>Boyut Eğitim Kurumları</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Location Map Visualizer */}
          <LocationMap />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
