// React
import React from "react";

// components
import FooterLogoSVG from "../../../public/assets/icons/footer-logo.svg";
import Image from 'next/image';

// styles
import styles from "./styles/index.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Image
            priority
            src={FooterLogoSVG}
            alt="FooterLogoSVG"
          />
      </div>
    </footer>
  );
};
