"use client";

import styles from "./InfiniteMarquee.module.css";

const MARQUEE_ITEMS = [
  "⚡ KALABALIKTA KAYBOLMA!",
  "🧠 MADLEN YAPAY ZEKA DESTEKLİ EĞİTİM",
  "📋 16+ SEÇKİN YAYINEVİ DENEME KULÜBÜ",
  "🏆 KAZANANLARIN DÜNYASI",
  "🚃 İSMET PAŞA TRAMVAY DURAĞI YANI",
  "🎯 %98 MEMNUNİYET ORANI",
  "🔥 #ÇARE BOYUT",
];

export default function InfiniteMarquee() {
  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.marqueeTrack}>
        {MARQUEE_ITEMS.concat(MARQUEE_ITEMS).map((item, idx) => (
          <div key={idx} className={styles.marqueeItem}>
            <span>{item}</span>
            <span className={styles.dot}>•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
