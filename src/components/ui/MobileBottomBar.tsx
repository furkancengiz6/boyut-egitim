"use client";

import { useState } from "react";
import { SITE_CONFIG } from "../../lib/constants";
import PreRegisterModal from "./PreRegisterModal";
import styles from "./MobileBottomBar.module.css";

export default function MobileBottomBar() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className={styles.bottomBar}>
        <a
          href={SITE_CONFIG.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.barBtnWhatsapp}
        >
          <span>💬</span> WhatsApp
        </a>

        <a href={`tel:${SITE_CONFIG.phone}`} className={styles.barBtnCall}>
          <span>📞</span> Ara
        </a>

        <button
          onClick={() => setModalOpen(true)}
          className={styles.barBtnRegister}
        >
          <span>📝</span> Ön Kayıt
        </button>
      </div>

      <PreRegisterModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultGrade="11. Sınıf"
      />
    </>
  );
}
