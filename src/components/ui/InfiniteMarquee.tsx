"use client";

import { Zap, Brain, ClipboardList, Trophy, MapPin, Target, Flame } from "lucide-react";
import styles from "./InfiniteMarquee.module.css";

const MARQUEE_ITEMS = [
  { text: "KALABALIKTA KAYBOLMA!", icon: <Zap size={18} color="#FFD700" /> },
  { text: "MADLEN YAPAY ZEKA DESTEKLİ EĞİTİM", icon: <Brain size={18} color="#7C3AED" /> },
  { text: "16+ SEÇKİN YAYINEVİ DENEME KULÜBÜ", icon: <ClipboardList size={18} color="#1E6FFF" /> },
  { text: "KAZANANLARIN DÜNYASI", icon: <Trophy size={18} color="#F57C00" /> },
  { text: "İSMET PAŞA TRAMVAY DURAĞI YANI", icon: <MapPin size={18} color="#FF416C" /> },
  { text: "%98 MEMNUNİYET ORANI", icon: <Target size={18} color="#00C6FF" /> },
  { text: "#ÇARE BOYUT", icon: <Flame size={18} color="#FF6B35" /> },
];

export default function InfiniteMarquee() {
  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.marqueeTrack}>
        {MARQUEE_ITEMS.concat(MARQUEE_ITEMS).map((item, idx) => (
          <div key={idx} className={styles.marqueeItem}>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {item.icon} {item.text}
            </span>
            <span className={styles.dot}>•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
