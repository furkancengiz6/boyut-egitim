import Link from "next/link";
import { SITE_CONFIG, NAV_LINKS, SERVICES } from "../../lib/constants";
import BoyutLogo from "../ui/BoyutLogo";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.glow} />
      <div className="container">
        <div className={styles.grid}>
          {/* Brand Info */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logoLink}>
              <BoyutLogo width={50} height={34} showText={true} />
            </Link>
            <p className={styles.brandDesc}>
              Antalya&apos;nın öncü eğitim kurumu. YKS hazırlık, Türkiye geneli deneme kulübü ve yapay zeka destekli eğitim ile öğrencilerimizi zirveye taşıyoruz.
            </p>

            <div className={styles.socials}>
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="Instagram"
              >
                📸
              </a>
              <a
                href={SITE_CONFIG.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="Facebook"
              >
                👍
              </a>
              <a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="WhatsApp"
              >
                💬
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div className={styles.linkGroup}>
            <h4 className={styles.linkTitle}>Hızlı Bağlantılar</h4>
            <ul className={styles.linkList}>
              {NAV_LINKS.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programlar */}
          <div className={styles.linkGroup}>
            <h4 className={styles.linkTitle}>Programlarımız</h4>
            <ul className={styles.linkList}>
              {SERVICES.slice(0, 5).map((service, idx) => (
                <li key={idx}>
                  <Link href={service.href} className={styles.footerLink}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.linkGroup}>
            <h4 className={styles.linkTitle}>İletişim & Konum</h4>
            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <span>{SITE_CONFIG.address}, Antalya</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>🚃</span>
                <span>İsmet Paşa Tramvay Durağı Yanı</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <a href={`tel:${SITE_CONFIG.phone}`} className={styles.contactLink}>
                  {SITE_CONFIG.phone}
                </a>
              </div>

              <a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappCta}
              >
                📱 WhatsApp Destek Hattı
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. Tüm hakları saklıdır.</p>
          <p className={styles.mottoHighlight}>{SITE_CONFIG.slogan}</p>
        </div>
      </div>
    </footer>
  );
}
