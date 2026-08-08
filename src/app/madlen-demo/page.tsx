"use client";

import { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import WhatsAppButton from "../../components/ui/WhatsAppButton";
import { SITE_CONFIG } from "../../lib/constants";
import styles from "./demo.module.css";

const SAMPLE_QUESTIONS = [
  {
    id: 1,
    subject: "Matematik (TYT)",
    question: "x ve y pozitif tam sayılardır. 3x + 4y = 48 eşitliğini sağlayan kaç farklı (x,y) ikilisi vardır?",
    options: ["3", "4", "5", "6"],
    correct: "3",
  },
  {
    id: 2,
    subject: "Fizik (TYT)",
    question: "Sürtünmesiz yatay düzlemde durmakta olan m kütleli cisme F kuvveti t süre uygulandığında yapılan iş W olmaktadır. Kuvvet 2F yapılsaydı aynı t sürede yapılan iş kaç W olurdu?",
    options: ["2W", "4W", "6W", "8W"],
    correct: "4W",
  },
  {
    id: 3,
    subject: "Türkçe (TYT)",
    question: "Aşağıdaki cümlelerin hangisinde nesne-yüklem ilişkisi bakımından geçişsiz bir eylem kullanılmıştır?",
    options: [
      "Öğrenciler sınav sonuçlarını heyecanla bekliyordu.",
      "Güneşli havalarda parka yürümeyi çok severdi.",
      "Aramıza yeni katılan arkadaşımız masada sessizce oturdu.",
      "Kitaplıktaki en eski romanı tek solukta okudu."
    ],
    correct: "Aramıza yeni katılan arkadaşımız masada sessizce oturdu.",
  },
];

export default function MadlenDemoPage() {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qId: number, option: string) => {
    setAnswers({ ...answers, [qId]: option });
  };

  const calculateScore = () => {
    let correctCount = 0;
    SAMPLE_QUESTIONS.forEach((q) => {
      if (answers[q.id] === q.correct) correctCount++;
    });
    return correctCount;
  };

  const correctNum = calculateScore();

  return (
    <main>
      <Navbar />

      <section className={styles.hero}>
        <div className="container">
          <span className="section-tag">Canlı AI Testi</span>
          <h1 className={styles.title}>
            MADLEN AI <span className="gradient-text-orange">Demo Seviye Testi</span>
          </h1>
          <p className={styles.subtitle}>
            3 örnek soruyu yanıtla, MADLEN yapay zeka algoritmasının kişisel eksik analizi ve çalışma önerisini anında deneyimle.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {!submitted ? (
            <div className={styles.quizBox}>
              {SAMPLE_QUESTIONS.map((q, idx) => (
                <div key={q.id} className={styles.qCard}>
                  <div className={styles.qHeader}>
                    <span className={styles.qSubject}>{q.subject}</span>
                    <span className={styles.qNum}>Soru {idx + 1} / 3</span>
                  </div>
                  <p className={styles.qText}>{q.question}</p>
                  <div className={styles.optionsGrid}>
                    {q.options.map((opt) => (
                      <button
                        key={opt}
                        className={`${styles.optBtn} ${
                          answers[q.id] === opt ? styles.selected : ""
                        }`}
                        onClick={() => handleSelect(q.id, opt)}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              <div className={styles.submitArea}>
                <button
                  disabled={Object.keys(answers).length < 3}
                  className="btn-primary"
                  onClick={() => setSubmitted(true)}
                >
                  🧠 MADLEN AI Analizini Başlat →
                </button>
                {Object.keys(answers).length < 3 && (
                  <p className={styles.alertText}>* Lütfen devam etmek için tüm soruları yanıtlayın.</p>
                )}
              </div>
            </div>
          ) : (
            <div className={styles.reportBox}>
              <div className={styles.reportHeader}>
                <div className={styles.aiBadge}>🤖 MADLEN AI Analiz Raporu</div>
                <h2>Performans & Eksik Analizi</h2>
              </div>

              <div className={styles.scoreRow}>
                <div className={styles.scoreCard}>
                  <span>Doğru Sayısı</span>
                  <strong>{correctNum} / 3</strong>
                </div>
                <div className={styles.scoreCard}>
                  <span>Tahmini AI Başarı Oranı</span>
                  <strong>%{Math.round((correctNum / 3) * 100)}</strong>
                </div>
              </div>

              <div className={styles.aiRecommendation}>
                <h3>💡 MADLEN Yapay Zeka Tavsiyesi:</h3>
                {correctNum === 3 ? (
                  <p>
                    Harika bir temel! Temel kavramlara hakimsin. Boyut Eğitim Deneme Kulübü ile Türkiye geneli sınavlara girerek Türkiye derecesi hedefleyebilirsin.
                  </p>
                ) : (
                  <p>
                    Potansiyelin yüksek ancak bazı konularda kavramsal eksiklerin var. MADLEN AI sistemi zayıf olduğun konulardan özel soru bankası ve etüt programı hazırlayarak 1 ayda net artışı sağlayacaktır.
                  </p>
                )}
              </div>

              <div className={styles.ctaBox}>
                <h3>Bu Analizi Gerçek Sınavların İçin Uygulamak İster misin?</h3>
                <a
                  href={`https://wa.me/905060272741?text=${encodeURIComponent(
                    `Merhaba Boyut Eğitim, MADLEN Demo Testini tamamladım (${correctNum}/3 Doğru). Birebir AI analizi ve kurs bilgisi almak istiyorum.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  📱 WhatsApp İle Ücretsiz AI Danışmanlığı Al
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
