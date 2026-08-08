"use client";

import { useState } from "react";
import styles from "./FaqSection.module.css";

const FAQS = [
  {
    question: "Boyut Eğitim'i diğer kurum ve dershanelerden ayıran en büyük fark nedir?",
    answer: "En büyük farkımız 'Kalabalıkta Kaybolma' vizyonumuz ve MADLEN Yapay Zeka Sistemimizdir. Kalabalık sınıflarda herkes aynı tempolarda öğrenmek zorunda kalırken, bizde her öğrencinin eksiği algoritma ile tespit edilir ve kişiye özel öğrenme rotası çizilir."
  },
  {
    question: "MADLEN Yapay Zeka Sistemi velilere nasıl raporlama sunar?",
    answer: "Öğrenci her denemeye girdikten sonra soru bazlı analizi yapılır. Veli bilgilendirme panelimiz üzerinden haftalık ve aylık gelişim grafikleri, net artışları ve rehber öğretmen değerlendirmeleri şeffaf şekilde velimizle paylaşılır."
  },
  {
    question: "Deneme Kulübü'ne sadece kurum öğrencileri mi katılabilir?",
    answer: "Hayır! Deneme Kulübümüze dışarıdan katılım mümkündür. 16+ Türkiye geneli yayın evinin (Bilgi Sarmal, 3D, Töder, Özdebir, Karekök vb.) denemelerine dışarıdan kayıt yaptırarak katılabilirsiniz."
  },
  {
    question: "10. ve 11. Sınıf erken kayıt avantajları nelerdir?",
    answer: "Erken kayıt yaptıran öğrencilerimiz hem sabit fiyat garantisinden faydalanır hem de yaz kampı ve deneme kulübü paketlerine ücretsiz erişim hakkı kazanır."
  },
  {
    question: "Dershane lokasyonunuz neresidir?",
    answer: "Kurumumuz Gaziantep İsmet Paşa Tramvay Durağı'nın hemen yanında yer almaktadır. Ulaşımı son derece kolay ve merkezi bir konumdadır."
  }
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="section">
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag">Aklınıza Takılanlar</span>
          <h2 className="section-title">
            Sıkça Sorulan <span className="gradient-text-blue">Sorular</span>
          </h2>
          <p className="section-subtitle">
            Boyut Eğitim, MADLEN AI sistemi ve Deneme Kulübü hakkında merak ettiğiniz tüm soruların yanıtları.
          </p>
        </div>

        <div className={styles.faqList}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`${styles.faqCard} ${isOpen ? styles.faqOpen : ""}`}
                onClick={() => toggle(idx)}
              >
                <div className={styles.faqQuestion}>
                  <span>{faq.question}</span>
                  <span className={styles.icon}>{isOpen ? "−" : "+"}</span>
                </div>
                {isOpen && <p className={styles.faqAnswer}>{faq.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
