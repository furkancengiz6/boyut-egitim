"use client";

import { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import WhatsAppButton from "../../components/ui/WhatsAppButton";
import { MessageCircle, CheckCircle2, FileText, Target, Users } from "lucide-react";
import styles from "./yazili.module.css";

export default function YaziliHazirlikPage() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [grade, setGrade] = useState("10. Sınıf");
  const [subject, setSubject] = useState("Matematik & Geometri");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    const msg = encodeURIComponent(
      `Merhaba Boyut Eğitim, Okul Yazılı Hazırlık Çalışması başvurusu yapmak istiyorum:\n\nÖğrenci: ${fullName}\nTel: ${phone}\nSınıf: ${grade}\nOdak Ders: ${subject}\n\nDetaylı ders programı ve etüt bilgisi alabilir miyim?`
    );
    window.open(`https://wa.me/905060272741?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <main>
      <Navbar />

      <section className={styles.hero}>
        <div className="container">
          <span className="section-tag">Okul Başarısı</span>
          <h1 className={styles.title}>
            Yazılı Hazırlık <span className="gradient-text-blue">Çalışma Grupları</span>
          </h1>
          <p className={styles.subtitle}>
            Yazılı haftası öncesinde konuları eksiksiz tekrar edin, çıkabilecek soru tipleriyle sınav notlarınızı yükseltin.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.formCard}>
              {!submitted ? (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <h3>Yazılı Hazırlık Etüt Kaydı</h3>

                  <div className={styles.inputGroup}>
                    <label>Öğrenci Adı Soyadı *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ad Soyad"
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

                  <div className={styles.inputGroup}>
                    <label>Sınıf Düzeyi</label>
                    <select value={grade} onChange={(e) => setGrade(e.target.value)}>
                      <option value="9. Sınıf">9. Sınıf</option>
                      <option value="10. Sınıf">10. Sınıf</option>
                      <option value="11. Sınıf">11. Sınıf</option>
                      <option value="12. Sınıf / YKS">12. Sınıf / YKS</option>
                    </select>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Öncelikli Destek İstediğiniz Ders</label>
                    <select value={subject} onChange={(e) => setSubject(e.target.value)}>
                      <option value="Matematik & Geometri">Matematik & Geometri</option>
                      <option value="Fizik & Kimya">Fizik & Kimya</option>
                      <option value="Türkçe & Edebiyat">Türkçe & Edebiyat</option>
                      <option value="Tarih & Coğrafya">Tarih & Coğrafya</option>
                      <option value="Tüm Ana Dersler">Tüm Ana Dersler</option>
                    </select>
                  </div>

                  <button type="submit" className="btn-whatsapp" style={{ justifyContent: "center" }}>
                    <MessageCircle size={18} /> WhatsApp İle Ön Kayıt Yap
                  </button>
                </form>
              ) : (
                <div className={styles.successBox}>
                  <div className={styles.successIcon}><CheckCircle2 size={48} color="#34A853" /></div>
                  <h3>Talebiniz Alındı!</h3>
                  <p>Yazılı hazırlık etüt programımız için sizinle WhatsApp üzerinden iletişime geçeceğiz.</p>
                </div>
              )}
            </div>

            <div className={styles.infoSide}>
              <h2>Yazılı Çalışmaları Neleri Kapsar?</h2>
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}><FileText size={24} color="#0284C7" /></span>
                  <div>
                    <h4>Örnek Yazılı Soru Çözümleri</h4>
                    <p>MEB müfredatı ve okul sınav tarzına %100 uyumlu yazılı simülasyon soruları.</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}><Target size={24} color="#F57C00" /></span>
                  <div>
                    <h4>Nokta Atışı Konu Özetleri</h4>
                    <p>Zaman kaybettirmeyen, sınavda çıkması muhtemel kritik özet föyleri.</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}><Users size={24} color="#16A34A" /></span>
                  <div>
                    <h4>Birebir ve Küçük Gruplarda Etüt</h4>
                    <p>Kalabalıkta kaybolmadan sorularınızı birebir sorma ve anlama imkanı.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
