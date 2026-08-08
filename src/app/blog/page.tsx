import Link from "next/link";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import WhatsAppButton from "../../components/ui/WhatsAppButton";
import { BLOG_POSTS } from "../../lib/constants";
import styles from "./blog.module.css";

export const metadata = {
  title: "Blog & Rehberlik — Boyut Eğitim",
  description: "YKS hazırlık taktikleri, net artırma yöntemleri, MADLEN AI analizleri ve rehberlik yazıları.",
};

export default function BlogPage() {
  return (
    <main>
      <Navbar />

      <section className={styles.hero}>
        <div className="container">
          <span className="section-tag">Sınav Taktikleri & Rehberlik</span>
          <h1 className={styles.title}>
            Boyut <span className="gradient-text-orange">Blog & Rehberlik</span>
          </h1>
          <p className={styles.subtitle}>
            Derece öğrencilerinin çalışma yöntemleri, net artırma taktikleri ve yapay zeka destekli rehberlik yazıları.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {BLOG_POSTS.map((post) => (
              <article key={post.slug} className={styles.card}>
                <div className={styles.imageBox}>{post.image}</div>
                <div className={styles.meta}>
                  <span className={styles.category}>{post.category}</span>
                  <span className={styles.readTime}>{post.readTime}</span>
                </div>
                <h2 className={styles.cardTitle}>{post.title}</h2>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <div className={styles.footer}>
                  <span className={styles.date}>{post.date}</span>
                  <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                    Yazıyı Oku →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
