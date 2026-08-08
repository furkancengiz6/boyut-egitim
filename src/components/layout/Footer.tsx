import Link from "next/link";
import { MessageCircle, MapPin, Phone, TramFront } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS, SERVICES } from "../../lib/constants";
import BoyutLogo from "../ui/BoyutLogo";
import styles from "./Footer.module.css";

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

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
                <InstagramIcon size={20} />
              </a>
              <a
                href={SITE_CONFIG.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="Facebook"
              >
                <FacebookIcon size={20} />
              </a>
              <a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
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
                <span className={styles.contactIcon}><MapPin size={20} /></span>
                <span>{SITE_CONFIG.address}, Antalya</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}><TramFront size={20} /></span>
                <span>İsmet Paşa Tramvay Durağı Yanı</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}><Phone size={20} /></span>
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
                <MessageCircle size={20} /> WhatsApp Destek Hattı
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
