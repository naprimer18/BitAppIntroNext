// react
import React, { FC, useEffect, useRef, useState } from "react";
import { useElementOnScreen } from "../../utils/useElementOnScreen";


// models, constants
import { IAnimate } from "./models";
import {
  ANIMATION_STATUS,
  DEFAULT_ANIMATION_DELAY,
  DEFAULT_ANIMATION_DURATION,
  VISIBILITY_STATE,
} from "./constants";

export const Animate: FC<IAnimate> = ({
  children,
  animationName,
  duration = DEFAULT_ANIMATION_DURATION,
  delay = DEFAULT_ANIMATION_DELAY,
  initiallyVisible,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);
  const [animationStatus, setAnimationStatus] = useState(
    ANIMATION_STATUS.NOT_TRIGGERED
  );

  const [visibilityState, setVisibilityState] = useState(
    initiallyVisible ? VISIBILITY_STATE.SHOWN : VISIBILITY_STATE.HIDDEN
  );

  const handleAnimationStart = () => {
    setAnimationStatus(ANIMATION_STATUS.STARTED);
    setVisibilityState(VISIBILITY_STATE.SHOWN);
  };

  useEffect(() => {
    if (!onScreen && animationStatus === ANIMATION_STATUS.STARTED) {
      setAnimationStatus(ANIMATION_STATUS.FINISHED);
    }
  }, [animationStatus, onScreen]);

  const handleAnimationEnd = () =>
    setAnimationStatus(ANIMATION_STATUS.FINISHED);

  const containerStyles: React.CSSProperties =
    onScreen && animationStatus !== ANIMATION_STATUS.FINISHED
      ? {
          animationName: animationName,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        }
      : {};
  
  return (
    <div
      ref={ref}
      style={containerStyles}
      onAnimationStart={handleAnimationStart}
      onAnimationEnd={handleAnimationEnd}
      className={visibilityState}
    >
      {children}
    </div>
  );
};
