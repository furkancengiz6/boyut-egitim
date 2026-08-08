import { SITE_CONFIG } from "../../lib/constants";
import { MapPin, TramFront, Phone } from "lucide-react";
import styles from "./LocationMap.module.css";

export default function LocationMap() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.info}>
          <span className={styles.badge}>
            <MapPin size={16} /> İsmet Paşa Tramvay Durağı Yanı
          </span>
          <h3 className={styles.title}>Kolay Ulaşım, Merkezi Lokasyon</h3>
          <p className={styles.address}>
            {SITE_CONFIG.address}, Muratpaşa / {SITE_CONFIG.city}
          </p>
          <div className={styles.transportInfo}>
            <div className={styles.tItem}>
              <span className={styles.tIcon}>
                <TramFront size={20} />
              </span>
              <div>
                <strong>Tramvay İle:</strong> İsmet Paşa durağında inin, 1 dakika yürüme mesafesinde.
              </div>
            </div>
            <div className={styles.tItem}>
              <span className={styles.tIcon}><Phone size={20} /></span>
              <div>
                <strong>İletişim:</strong> {SITE_CONFIG.phone}
              </div>
            </div>
          </div>
          <a
            href={SITE_CONFIG.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ marginTop: "12px" }}
          >
            🗺️ Google Haritalar&apos;da Yol Tarifi Al →
          </a>
        </div>

        <div className={styles.mapContainer}>
          <iframe
            title="Boyut Eğitim Kurumları Konum"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3189.845942468305!2d30.7061!3d36.8864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c390022a6dc791%3A0xc7e31923bd683f0e!2sBalbey%2C%20%C4%B0smetpa%C5%9Fa%20Cd.%20No%3A5%20A%2C%2007040%20Muratpa%C5%9Fa%2FAntalya!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "280px" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
