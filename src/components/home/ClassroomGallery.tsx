"use client";

import Image from "next/image";
import { Award, Users, BookOpen } from "lucide-react";
import styles from "./ClassroomGallery.module.css";

export default function ClassroomGallery() {
  const items = [
    {
      src: "/assets/boyut-basari-odulu.png",
      alt: "Boyut Eğitim Başarı Ödülü",
      tag: "ÖDÜLLENDİRME",
      icon: <Award size={16} />,
      title: "Başarıyı Destekleyen Yaklaşım",
      desc: "Sınavlarda derece ve başarı gösteren öğrencilerimizi hediyeler ve ek yayın destekleriyle ödüllendirerek motivasyonlarını zirvede tutuyoruz.",
    },
    {
      src: "/assets/boyut-sinif-ders.png",
      alt: "Boyut Eğitim Modern Sınıflar",
      tag: "EĞİTİM ORTAMI",
      icon: <Users size={16} />,
      title: "Modern ve Ferah Sınıflar",
      desc: "Geniş pencereli, aydınlık ve maksimum odaklanma sağlayan akıllı sınıf tasarımlarımızla öğrencilerimizin kalabalıkta kaybolmasını önlüyoruz.",
    },
    {
      src: "/assets/boyut-sinif-gece.png",
      alt: "Boyut Eğitim Gece Kampı",
      tag: "DİSİPLİN & ETÜT",
      icon: <BookOpen size={16} />,
      title: "Gece Kampları & Soru Çözümleri",
      desc: "Sınav dönemlerinde akşam saatlerinde gerçekleştirdiğimiz yoğun soru çözüm ve ders kampları ile hedeflerimize kesintisiz odaklanıyoruz.",
    },
  ];

  return (
    <section className="section" style={{ background: "var(--bg-primary)", position: "relative" }}>
      {/* Aurora visual accent */}
      <div className={styles.auroraGlow} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className={styles.header}>
          <span className="section-tag">Kurumumuzdan Kareler</span>
          <h2 className="section-title">
            Eğitim Ortamımız ve <span className="gradient-text-orange">Başarılarımız</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Öğrencilerimizin başarısı için her ayrıntısı titizlikle tasarlanmış fiziksel dersliklerimiz ve motivasyon odaklı eğitim yaklaşımımız.
          </p>
        </div>

        <div className={styles.grid}>
          {items.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  className={styles.image}
                  priority={idx === 0}
                />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.badge}>
                  {item.icon}
                  <span>{item.tag}</span>
                </span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
