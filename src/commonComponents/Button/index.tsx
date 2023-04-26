// React
import React from "react";

// utils
import { classes } from "../../utils/classes";

// styles
import styles from "./styles/index.module.scss";

interface IButtonProps {
  className?: string;
  title: string;
  link: string;
}

export const Button: React.FC<IButtonProps> = ({ link, title, className }) => {
  return (
    <a href={link} className={classes(className, styles.linkButton)} target="_blank">
      <span>{title}</span>
    </a>
  );
};
