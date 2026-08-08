import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import styles from "./notfound.module.css";

export default function NotFound() {
  return (
    <main>
      <Navbar />

      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.errorCode}>404</div>
          <h1 className={styles.title}>
            Aradığın Sayfa <span className="gradient-text-orange">Kalabalıkta Kayboldu!</span>
          </h1>
          <p className={styles.subtitle}>
            Aradığın içerik taşınmış veya silinmiş olabilir. Ama kaygılanma, Boyut Eğitim ile hedefine ulaşmak için doğru yerdesin.
          </p>
          <div className={styles.btnGroup}>
            <Link href="/" className="btn-primary">
              🏠 Ana Sayfaya Dön
            </Link>
            <Link href="/madlen" className="btn-secondary">
              🧠 MADLEN AI Sistemini Keşfet
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
