// React
import React from "react";
import Marquee from "react-fast-marquee";

// components
import { Animate } from "../../commonComponents/Animate";
import LogosSvg from "../../../public/assets/icons/logos.svg";
import Image from 'next/image';

// styles
import styles from "./styles/index.module.scss";
import { classes } from "@/utils/classes";

export const MarqueeLine = () => {
  return (
    <Marquee className={styles.marquee} gradient={false} speed={40}>
      <Animate animationName="fadeInDown" delay={0.7}>
        <Image
          className={classes(styles.mainLogo)}
          priority
          src={LogosSvg}
          alt="LogosSvg"
        />
      </Animate>
    </Marquee>
  );
};
