import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import WhatsAppButton from "../../../components/ui/WhatsAppButton";
import { BLOG_POSTS, SITE_CONFIG } from "../../../lib/constants";
import styles from "./post.module.css";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <Navbar />

      <article className={styles.article}>
        <div className="container">
          <div className={styles.header}>
            <Link href="/blog" className={styles.backLink}>
              ← Tüm Blog Yazılarına Dön
            </Link>
            <div className={styles.meta}>
              <span className={styles.category}>{post.category}</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className={styles.title}>{post.title}</h1>
          </div>

          <div className={styles.contentBox}>
            <div className={styles.heroEmoji}>{post.image}</div>
            <div className={styles.bodyText}>
              {post.content.split("\n\n").map((paragraph, idx) => (
                <p key={idx}>{paragraph.trim()}</p>
              ))}
            </div>

            <div className={styles.ctaBanner}>
              <h3>MADLEN AI İle Netlerinizi Katlamaya Başlayın</h3>
              <p>Eksiklerinizi yapay zeka tespit etsin, size özel çalışma rotasını birlikte oluşturalım.</p>
              <a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                📱 WhatsApp&apos;tan Ücretsiz Rehberlik Randevusu Al
              </a>
            </div>
          </div>
        </div>
      </article>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
