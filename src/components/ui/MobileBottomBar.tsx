"use client";

import { useState } from "react";
import { MessageCircle, Phone, FileSignature } from "lucide-react";
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
          <MessageCircle size={20} />
          <span>WhatsApp</span>
        </a>

        <a href={`tel:${SITE_CONFIG.phone}`} className={styles.barBtnCall}>
          <Phone size={20} />
          <span>Ara</span>
        </a>

        <button
          onClick={() => setModalOpen(true)}
          className={styles.barBtnRegister}
        >
          <FileSignature size={20} />
          <span>Ön Kayıt</span>
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
