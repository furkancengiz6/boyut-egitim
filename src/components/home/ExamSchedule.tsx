"use client";

import styles from "./ExamSchedule.module.css";

const EXAMS = [
  { date: "14 Ekim", name: "ÖZDEBİR Türkiye Geneli TYT-1", publisher: "Özdebir", status: "Tamamlandı ✓" },
  { date: "28 Ekim", name: "BİLGİ SARMAL TYT Deneme Sınavı", publisher: "Bilgi Sarmal", status: "Tamamlandı ✓" },
  { date: "11 Kasım", name: "3D YAYINLARI Türkiye Geneli TYT", publisher: "3D Yayınları", status: "Tamamlandı ✓" },
  { date: "25 Kasım", name: "TÖDER Türkiye Geneli TYT-1", publisher: "Töder", status: "Kayıtlar Açık 🟢" },
  { date: "09 Aralık", name: "ORİJİNAL YAYINLARI AYT Matematik", publisher: "Orijinal", status: "Yakında ⏳" },
  { date: "23 Aralık", name: "KAREKÖK YAYINLARI TYT / AYT Prova", publisher: "Karekök", status: "Yakında ⏳" },
];

export default function ExamSchedule() {
  return (
    <div className={styles.scheduleCard}>
      <div className={styles.scheduleHeader}>
        <div>
          <h3 className={styles.scheduleTitle}>📅 Deneme Kulübü Sınav Takvimi</h3>
          <p className={styles.scheduleSub}>Gerçek sınav saatleri ve Türkiye geneli sıralama değerlendirmesi ile</p>
        </div>
        <div className={styles.badgeCount}>16+ Türkiye Geneli Sınav</div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Tarih</th>
              <th>Sınav Adı</th>
              <th>Yayınevi</th>
              <th>Durum</th>
            </tr>
          </thead>
          <tbody>
            {EXAMS.map((exam, idx) => (
              <tr key={idx}>
                <td className={styles.dateTd}>{exam.date}</td>
                <td className={styles.nameTd}>{exam.name}</td>
                <td>
                  <span className={styles.pubBadge}>{exam.publisher}</span>
                </td>
                <td>
                  <span
                    className={`${styles.statusBadge} ${
                      exam.status.includes("Açık") ? styles.statusOpen : ""
                    }`}
                  >
                    {exam.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
