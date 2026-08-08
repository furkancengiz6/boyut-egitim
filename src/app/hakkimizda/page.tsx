import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import WhatsAppButton from "../../components/ui/WhatsAppButton";
import { SITE_CONFIG } from "../../lib/constants";
import { Target, Rocket, Lightbulb, MessageCircle } from "lucide-react";
import styles from "./hakkimizda.module.css";

export const metadata = {
  title: "Hakkımızda — Boyut Eğitim",
  description: "Boyut Eğitim vizyonu, misyonu ve kalabalıkta kaybolmayan başarılı nesiller yetiştirme hikayemiz. #ÇARE BOYUT",
};

export default function HakkimizdaPage() {
  return (
    <main>
      <Navbar />

      <section className={styles.hero}>
        <div className="container">
          <span className="section-tag">Biz Kimiz?</span>
          <h1 className={styles.title}>
            Kazananların Dünyası: <span className="gradient-text-orange">Boyut Eğitim</span>
          </h1>
          <p className={styles.subtitle}>
            Öğrencinin potansiyelini en üst düzeye çıkaran, kalabalıklar arasında kaybolmasına izin vermeyen yeni nesil eğitim kurumu.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.textBox}>
              <h2>Hikayemiz ve Felsefemiz</h2>
              <p>
                Geleneksel dershane anlayışının aksine, Boyut Eğitim olarak her öğrenciyi benzersiz bir öğrenme yolculuğuna sahip bireyler olarak görüyoruz. Sloganımız net: <strong>&ldquo;Kalabalıkta Kaybolma!&rdquo;</strong>
              </p>
              <p>
                Teknolojinin sunduğu imkanları (MADLEN Yapay Zeka Sistemi), en güçlü yayın evlerinin denemelerini ve disiplinli öğretmen kadromuzu bir araya getirerek öğrencinin <strong>Zeka + Çaba + Disiplin</strong> formülünü hayata geçirmesini sağlıyoruz.
              </p>
            </div>

            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}><Target size={32} color="#F57C00" /></div>
                <h3>Misyonumuz</h3>
                <p>Her öğrenciye kişiselleştirilmiş öğrenme haritası sunarak sınav başarısını maksimuma çıkarmak.</p>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueIcon}><Rocket size={32} color="#1E6FFF" /></div>
                <h3>Vizyonumuz</h3>
                <p>Türkiye&apos;nin yapay zeka destekli en yenilikçi ve en başarılı eğitim kurumu olmak.</p>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueIcon}><Lightbulb size={32} color="#FFD700" /></div>
                <h3>Değerlerimiz</h3>
                <p>Şeffaflık, sürekli gelişim, kişisel ilgi ve Türkiye Yüzyılı Maarif Modeli uyumu.</p>
              </div>
            </div>
          </div>

          <div className={styles.ctaBanner}>
            <h3>Siz de Boyut Eğitim Ailesine Katılın</h3>
            <p>Lokasyon: {SITE_CONFIG.address}</p>
            <a href={SITE_CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageCircle size={18} /> WhatsApp&apos;tan Bize Ulaşın
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
