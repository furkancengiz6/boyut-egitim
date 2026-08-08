"use client";

import { useState } from "react";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import styles from "./PreRegisterModal.module.css";

interface PreRegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultGrade?: string;
}

export default function PreRegisterModal({
  isOpen,
  onClose,
  defaultGrade = "11. Sınıf",
}: PreRegisterModalProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [grade, setGrade] = useState(defaultGrade);
  const [field, setField] = useState("Sayısal");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    // Build WhatsApp message
    const msg = encodeURIComponent(
      `Merhaba Boyut Eğitim, Web sitenizden Ön Kayıt / Bilgi Formu doldurdum:\n\n👤 Ad Soyad: ${fullName}\n📱 Tel: ${phone}\n🎓 Sınıf: ${grade}\n🎯 Alan: ${field}\n\nDetaylı bilgi ve randevu talep ediyorum.`
    );
    const waUrl = `https://wa.me/905060272741?text=${msg}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 1200);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        {!submitted ? (
          <>
            <div className={styles.modalHeader}>
              <span className={styles.modalTag}>Erken Kayıt Fırsatı</span>
              <h3 className={styles.modalTitle}>Boyut Eğitim Ön Kayıt Formu</h3>
              <p className={styles.modalSub}>
                Formu doldurun, eğitim danışmanlarımız sizi arayıp hedeflerinize özel programı hazırlasın.
              </p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label>Adınız Soyadınız *</label>
                <input
                  type="text"
                  required
                  placeholder="Örn: Ahmet Yılmaz"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div className={styles.inputGroup}>
                <label>Telefon Numarası *</label>
                <input
                  type="tel"
                  required
                  placeholder="05XX XXX XX XX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>Sınıf Düzeyi</label>
                  <select value={grade} onChange={(e) => setGrade(e.target.value)}>
                    <option value="10. Sınıf">10. Sınıf</option>
                    <option value="11. Sınıf">11. Sınıf</option>
                    <option value="12. Sınıf / YKS">12. Sınıf / YKS</option>
                    <option value="Mezun YKS">Mezun YKS</option>
                  </select>
                </div>

                <div className={styles.inputGroup}>
                  <label>Hedef Alan</label>
                  <select value={field} onChange={(e) => setField(e.target.value)}>
                    <option value="Sayısal">Sayısal</option>
                    <option value="Eşit Ağırlık">Eşit Ağırlık</option>
                    <option value="Sözel">Sözel</option>
                    <option value="Yabancı Dil">Yabancı Dil</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="btn-whatsapp" style={{ width: "100%", justifyContent: "center" }}>
                <MessageCircle size={18} /> WhatsApp İle Ön Kayıt Talebi Gönder
              </button>
            </form>
          </>
        ) : (
          <div className={styles.successState}>
            <div className={styles.successIcon}><CheckCircle2 size={48} color="#34A853" /></div>
            <h3>Talebiniz Alındı!</h3>
            <p>Sizi WhatsApp hattımıza yönlendiriyoruz. Danışmanımız en kısa sürede sizinle iletişime geçecektir.</p>
          </div>
        )}
      </div>
    </div>
  );
}
