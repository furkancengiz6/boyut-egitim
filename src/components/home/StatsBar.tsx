"use client";

import { useInView } from "react-intersection-observer";
import { STATS } from "../../lib/constants";
import styles from "./StatsBar.module.css";

export default function StatsBar() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className={styles.section} ref={ref}>
      <div className="container">
        <div className={styles.grid}>
          {STATS.map((stat, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.number}>
                {inView ? (
                  <span>{stat.value.toLocaleString("tr-TR")}</span>
                ) : (
                  <span>0</span>
                )}
                <span className={styles.suffix}>{stat.suffix}</span>
              </div>
              <div className={styles.label}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
