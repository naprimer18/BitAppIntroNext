// react
import React from "react";


// components
import useTranslation from "@/hooks/useTranslation";
import { FeatureCard } from "../FeatureCard";
import { Animate } from "../../commonComponents/Animate";
import { Button } from "../../commonComponents/Button";
import logoSVG from "../../../public/assets/icons/logo.svg"
import Image from 'next/image';

// iconUrls
import analyticsUrl from "../../../public/assets/icons/analytics.svg";
import strategiesUrl from "../../../public/assets/icons/strategies.svg";
import marketsUrl from "../../../public/assets/icons/markets.svg";

// utils
import { classes } from "../../utils/classes";

// styles
import styles from "./styles/index.module.scss";

const urlMapping: Record<string, string> = {
  strategies: strategiesUrl,
  analytics: analyticsUrl,
  markets: marketsUrl,
};

export const Header = () => {
  const { t } = useTranslation();

  const features = t("header", "features");

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <div className={styles.zetfour}>
            <Animate animationName="fadeInDown" delay={0.2}>
              <Image
                className={classes(styles.mainLogo)}
                priority
                src={logoSVG}
                alt="Logo"
              />
            </Animate>

            <Animate animationName="fadeInDown" delay={0.5}>
              <h1 dangerouslySetInnerHTML={{ __html: t("header","title") }} />
            </Animate>

            <div className={styles.cards}>
              {features.map((item: { key: React.Key | null | undefined; description: string; }, idx: number) => {
                return (
                  <Animate
                    key={item.key}
                    animationName="fadeInDown"
                    delay={0.7 + 0.2 * idx}
                  >
                    <FeatureCard
                      text={item.description}
                      // @ts-ignore
                      iconUrl={urlMapping[item.key]}
                    />
                  </Animate>
                );
              })}
            </div>

            <Animate animationName="fadeInDown" delay={1.3}>
              <Button title={t("common", "buttonLabel")} link="https://app.letsbulls.com" />
            </Animate>
          </div>
        </div>
      </div>
    </header>
  );
};
