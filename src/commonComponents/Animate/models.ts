import { ReactNode } from "react";

type Animation = "fadeInDown";

export interface IAnimate {
  children?: ReactNode | undefined;
  animationName: Animation;
  duration?: number;
  delay?: number;
  initiallyVisible?: boolean;
}
