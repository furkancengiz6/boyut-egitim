"use client";

import { useState } from "react";
import { MessageCircle, Sparkles } from "lucide-react";
import styles from "./PathFinderModal.module.css";

interface PathFinderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PathFinderModal({ isOpen, onClose }: PathFinderModalProps) {
  const [step, setStep] = useState(1);
  const [grade, setGrade] = useState("11. Sınıf");
  const [weakSubject, setWeakSubject] = useState("Matematik");
  const [targetDegree, setTargetDegree] = useState("İlk 20.000");

  if (!isOpen) return null;

  const handleFinish = () => {
    const msg = encodeURIComponent(
      `Merhaba Boyut Eğitim, YKS 30 Saniye Rotam'ı tamamladım:\n\n🎓 Sınıf: ${grade}\n⚠️ Odak Dersi: ${weakSubject}\n🎯 Hedef Derece: ${targetDegree}\n\nBana özel MADLEN çalışma planı ve Deneme Kulübü bilgisi istiyorum.`
    );
    window.open(`https://wa.me/905060272741?text=${msg}`, "_blank");
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        <div className={styles.header}>
          <span className={styles.stepTag}>Adım {step} / 3</span>
          <h3 className={styles.title}>30 Saniyede Özel YKS Rotan</h3>
        </div>

        {step === 1 && (
          <div className={styles.stepContent}>
            <h4>1. Hangi sınıftasın?</h4>
            <div className={styles.options}>
              {["10. Sınıf", "11. Sınıf", "12. Sınıf / YKS", "Mezun YKS"].map((item) => (
                <button
                  key={item}
                  className={`${styles.optBtn} ${grade === item ? styles.selected : ""}`}
                  onClick={() => setGrade(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <button className="btn-primary" onClick={() => setStep(2)}>
              İleri →
            </button>
          </div>
        )}

        {step === 2 && (
          <div className={styles.stepContent}>
            <h4>2. En çok destek almak istediğin ders hangisi?</h4>
            <div className={styles.options}>
              {["Matematik & Geometri", "Fizik & Kimya", "Türkçe & Paragraf", "Edebiyat & Tarih"].map((item) => (
                <button
                  key={item}
                  className={`${styles.optBtn} ${weakSubject === item ? styles.selected : ""}`}
                  onClick={() => setWeakSubject(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className={styles.btnRow}>
              <button className="btn-secondary" onClick={() => setStep(1)}>
                ← Geri
              </button>
              <button className="btn-primary" onClick={() => setStep(3)}>
                İleri →
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className={styles.stepContent}>
            <h4>3. Hedeflediğin derece nedir?</h4>
            <div className={styles.options}>
              {["İlk 5.000 (Derece)", "İlk 20.000 (Üst Segment)", "İlk 50.000 (Prestij)", "İlk 100.000"].map((item) => (
                <button
                  key={item}
                  className={`${styles.optBtn} ${targetDegree === item ? styles.selected : ""}`}
                  onClick={() => setTargetDegree(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className={styles.btnRow}>
              <button className="btn-secondary" onClick={() => setStep(2)}>
                ← Geri
              </button>
              <button className="btn-whatsapp" onClick={handleFinish}>
                <MessageCircle size={18} /> WhatsApp&apos;tan Özel Planımı Getir <Sparkles size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
