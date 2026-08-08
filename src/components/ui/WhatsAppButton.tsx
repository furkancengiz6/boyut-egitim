"use client";

import { SITE_CONFIG } from "../../lib/constants";
import InfinityIcon from "./InfinityIcon";
import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
  return (
    <a
      href={SITE_CONFIG.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.floatBtn}
      aria-label="WhatsApp İletişim"
    >
      <div className={styles.pulse} />
      <InfinityIcon width={32} height={32} />
      <span className={styles.tooltip}>Hızlı Bilgi Alın</span>
    </a>
  );
}
