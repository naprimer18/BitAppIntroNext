// React
import React from "react";


// components
import { Animate } from "../../commonComponents/Animate";
import useTranslation from "@/hooks/useTranslation";

// styles
import styles from "./styles/index.module.scss";

export const ProfitCard = () => {
  const { t } = useTranslation();

  const strategies = t("mainContent", "strategies");
  
  return (
    <div className={styles.profit}>
      <Animate animationName="fadeInDown" delay={0.7}>
        <h2>{t("mainContent", "title")}</h2>
      </Animate>

      {strategies.map((item: any, idx: number) => {
        return (
          <Animate key={idx} animationName="fadeInDown" delay={0.9 + 0.2 * idx}>
            <div className={styles.profitBlock}>
              <h4>{item.name}</h4>
              <span className={styles.coins}>{item.coin}</span>
              <div className={styles.info}>
                <span className={styles.label}>{item.investments.key}</span>
                <span className={styles.data}>{item.investments.value}</span>
              </div>

              <div className={styles.info}>
                <span className={styles.label}>{item.profit.key}</span>
                <span className={styles.data}>{item.profit.value}</span>
              </div>

              <div className={styles.info}>
                <span className={styles.label}>{item.total.key}</span>
                <span className={styles.data}>{item.total.value}</span>
              </div>

              <div className={styles.info}>
                <span className={styles.label}>{item.term.key}</span>
                <span className={styles.data}>{item.term.value}</span>
              </div>

              <span className={styles.totalProfit}>{item.growth}</span>
            </div>
          </Animate>
        );
      })}
    </div>
  );
};
