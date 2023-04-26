// React
import React from "react";

// components
import { Animate } from "../../commonComponents/Animate";
import { Button } from "../../commonComponents/Button";
import useTranslation from "@/hooks/useTranslation";
import Image from 'next/image';

// utils
import { classes } from "../../utils/classes";

// styles
import styles from "./styles/index.module.scss";

interface IDetailCardProps {
  link: string;
  pictureUrl: string;
  description: string;
  header: string;
  subHeader: string;
  mirror?: boolean;
}

export const DetailCard: React.FC<IDetailCardProps> = ({
  link,
  pictureUrl,
  description,
  header,
  subHeader,
  mirror,
}) => {
  const { t } = useTranslation();

  return (
    <div className={classes(styles.detailCard, mirror ? styles.swapOrder : "")}>
      <div className={styles.description}>
        <Animate animationName="fadeInDown" delay={0.5}>
          <span className={styles.accent}>{header}</span>
        </Animate>
        <Animate animationName="fadeInDown" delay={0.7}>
          <h2>{subHeader}</h2>
        </Animate>
        <Animate animationName="fadeInDown" delay={0.9}>
          <p>{description}</p>
        </Animate>
        <Animate animationName="fadeInDown" delay={1.1}>
          <Button link={link} title={t("common", "buttonLabel")}></Button>
        </Animate>
      </div>

      <div className={styles.picture}>
        <Animate animationName="fadeInDown" delay={0.9}>
          <Image
            className={classes(styles.mainLogo)}
            priority
            src={pictureUrl}
            alt={header}
          />
        </Animate>
      </div>
    </div>
  );
};
