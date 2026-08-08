import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import WhatsAppButton from "../../components/ui/WhatsAppButton";
import { MADLEN_FEATURES } from "../../lib/constants";
import styles from "./madlen.module.css";

export default function MadlenPage() {
  return (
    <main>
      <Navbar />

      <section className={styles.hero}>
        <div className="container">
          <span className="section-tag">Öğrenmede BOYUT&apos;unuz Değişecek</span>
          <h1 className={styles.title}>
            MADLEN <span className="gradient-text-orange">Yapay Zeka</span> Eğitim Altyapısı
          </h1>
          <p className={styles.subtitle}>
            Türkiye Yüzyılı Maarif Modeli ile tam uyumlu MADLEN AI, öğrencinin akademik gelişimini anlık izleyen ve eksiklerini milimetrik olarak tespit eden yapay zeka sistemidir.
          </p>

          <div className={styles.mascotRow}>
            <div className={styles.mascotWrapper}>
              <Image
                src="/assets/madlen-mascot.png"
                alt="MADLEN AI Maskot"
                width={140}
                height={140}
                className={styles.mascotImg}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {MADLEN_FEATURES.map((item, idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.cardIcon}>{item.icon}</div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.stepSection}>
        <div className="container">
          <div className={styles.stepHeader}>
            <span className="section-tag">4 Adımda MADLEN İşleyişi</span>
            <h2 className="section-title">
              Sistem Nasıl <span className="gradient-text-blue">Çalışır?</span>
            </h2>
          </div>

          <div className={styles.stepGrid}>
            <div className={styles.stepCard}>
              <span className={styles.stepNum}>Adım 1</span>
              <h3 className={styles.stepTitle}>Deneme Sınavı Girişi</h3>
              <p className={styles.stepDesc}>Öğrenci 16+ yayınevinin katıldığı Türkiye geneli deneme sınavlarına girer.</p>
            </div>

            <div className={styles.stepCard}>
              <span className={styles.stepNum}>Adım 2</span>
              <h3 className={styles.stepTitle}>Optik & Yapay Zeka Analizi</h3>
              <p className={styles.stepDesc}>Optik okuma anında sisteme aktarılır. MADLEN soru bazlı eksik haritası çıkarır.</p>
            </div>

            <div className={styles.stepCard}>
              <span className={styles.stepNum}>Adım 3</span>
              <h3 className={styles.stepTitle}>Nokta Atışı Etüt & Ödev</h3>
              <p className={styles.stepDesc}>Yapay zeka sadece yanlış yapılan alt başlıklar için kişiye özel soru föyü oluşturur.</p>
            </div>

            <div className={styles.stepCard}>
              <span className={styles.stepNum}>Adım 4</span>
              <h3 className={styles.stepTitle}>Veli Takip Raporu</h3>
              <p className={styles.stepDesc}>Gelişim grafikleri ve net artışları veli bilgilendirme paneline gönderilir.</p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/madlen-demo" className="btn-primary">
              🧪 Canlı MADLEN AI Demo Testini Başlat →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
