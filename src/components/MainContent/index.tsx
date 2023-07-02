// react
import React from "react";

// components
import { MarqueeLine } from "../Marquee";
import { ProfitCard } from "../ProfitCard";
import { DetailCard } from "../DetailCard";
import { PaymentCard } from "../PaymentCard";

// pictures
import dashboardScreenUrl from "../../../public/assets/images/dashboard-screen.png";
import portfolioScreenUrl from "../../../public/assets/images/portfolio-screen.png";
import strategiesScreenUrl from "../../../public/assets/images/strategies-screen.png";

// styles
import styles from "./styles/index.module.scss";
import useTranslation from "@/hooks/useTranslation";

const urlMapping: Record<string, any> = {
  dashboard: dashboardScreenUrl,
  portfolio: portfolioScreenUrl,
  strategies: strategiesScreenUrl,
};

export const MainContent: React.FC = () => {
  const { t } = useTranslation();

  const details = t("mainContent", "details");
  const payments = t("mainContent", "payments");

  return (
    <main className={styles.mainContent}>
      <MarqueeLine />
      <div className={styles.container}>
        <ProfitCard />
        {details.map((item: any, key: number) => {
          return (
            <DetailCard
              key={key}
              link="https://letsbulls.com/login"
              pictureUrl={urlMapping[item.key]}
              description={item.description}
              header={item.title}
              subHeader={item.subtitle}
              mirror={!!key}
            />
          );
        })}

        <div className={styles.payment}>
          {payments.map((item: any, idx: number) => {
            return (
              <PaymentCard
                key={idx}
                price={item.price}
                descriptionList={item.descriptionList}
                link={"https://letsbulls.com/login"}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};
