// react
import React from "react";
import Image from 'next/image';

// styles
import styles from "./styles/index.module.scss";

interface IFeatureCard {
  text: string;
  iconUrl: string;
}

export const FeatureCard: React.FC<IFeatureCard> = ({ text, iconUrl }) => {
  return (
    <div className={styles.mainFeature}>
      <Image
        priority
        src={iconUrl}
        alt="feature"
      />
      <span>{text}</span>
    </div>
  );
};
