"use client";

import { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import WhatsAppButton from "../../components/ui/WhatsAppButton";
import { SITE_CONFIG } from "../../lib/constants";
import styles from "./bursluluk.module.css";

export default function BurslulukPage() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [school, setSchool] = useState("");
  const [grade, setGrade] = useState("11. Sınıf");
  const [session, setSession] = useState("Sabah Oturumu (10:00)");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    const msg = encodeURIComponent(
      `Merhaba Boyut Eğitim, Bursluluk Sınavı Başvuru Formu doldurdum:\n\n🎓 Öğrenci: ${fullName}\n📱 Tel: ${phone}\n🏫 Okul: ${school}\n📚 Sınıf: ${grade}\n⏰ Oturum: ${session}\n\nSınav giriş belgesi ve bilgilendirme rica ediyorum.`
    );
    window.open(`https://wa.me/905060272741?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <main>
      <Navbar />

      <section className={styles.hero}>
        <div className="container">
          <span className="section-tag">Geleceğin Bursu</span>
          <h1 className={styles.title}>
            Boyut Eğitim <span className="gradient-text-orange">Bursluluk Sınavı</span> Başvurusu
          </h1>
          <p className={styles.subtitle}>
            %100&apos;e varan eğitim bursu ve derece sınıflarımızda yer alma fırsatı için formu doldurarak kayıt yaptırabilirsiniz.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {/* Form */}
            <div className={styles.formCard}>
              {!submitted ? (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <h3>Sınav Başvuru Formu</h3>

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
                    <label>Veli / Öğrenci Telefon Numarası *</label>
                    <input
                      type="tel"
                      required
                      placeholder="05XX XXX XX XX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Mevcut Okulu</label>
                    <input
                      type="text"
                      placeholder="Okuduğunuz Lise / Ortaokul"
                      value={school}
                      onChange={(e) => setSchool(e.target.value)}
                    />
                  </div>

                  <div className={styles.row}>
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
                      <label>Tercih Edilen Oturum</label>
                      <select value={session} onChange={(e) => setSession(e.target.value)}>
                        <option value="Sabah Oturumu (10:00)">Sabah Oturumu (10:00)</option>
                        <option value="Öğle Oturumu (14:00)">Öğle Oturumu (14:00)</option>
                      </select>
                    </div>
                  </div>

                  <button type="submit" className="btn-whatsapp" style={{ justifyContent: "center" }}>
                    📱 WhatsApp İle Sınav Kaydını Tamamla
                  </button>
                </form>
              ) : (
                <div className={styles.successBox}>
                  <div className={styles.successIcon}>🎉</div>
                  <h3>Başvurunuz Alındı!</h3>
                  <p>Sizi WhatsApp hattımıza yönlendirdik. Sınav giriş belgeniz iletilecektir.</p>
                </div>
              )}
            </div>

            {/* Info Side */}
            <div className={styles.infoSide}>
              <h2>Bursluluk Sınavı Hakkında</h2>
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>🏆</span>
                  <div>
                    <h4>%100&apos;e Varan Başarı Bursu</h4>
                    <p>Dereceye giren öğrencilere eğitim dönemi boyunca özel burs oranları sağlanır.</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📊</span>
                  <div>
                    <h4>MADLEN AI Performans Raporu</h4>
                    <p>Sınava giren tüm öğrencilere ücretsiz eksik analizi ve çalışma karnesi verilir.</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📍</span>
                  <div>
                    <h4>Sınav Merkezi</h4>
                    <p>{SITE_CONFIG.name} — {SITE_CONFIG.address}, Antalya</p>
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
