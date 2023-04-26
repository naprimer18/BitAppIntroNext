// React
import React from "react";


// components
import { Animate } from "../../commonComponents/Animate";
import { Button } from "../../commonComponents/Button";
import useTranslation from "@/hooks/useTranslation";

// styles
import styles from "./styles/index.module.scss";


interface IPaymentCardProps {
  price: string;
  descriptionList: string[];
  link: string;
}

export const PaymentCard: React.FC<IPaymentCardProps> = ({
  link,
  price,
  descriptionList,
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.paymentCard}>
      <Animate animationName="fadeInDown" delay={0.7}>
        <span
          className={styles.price}
          dangerouslySetInnerHTML={{ __html: price }}
        />
      </Animate>

      <Animate animationName="fadeInDown" delay={0.9}>
        <ul>
          {descriptionList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </Animate>

      <Animate animationName="fadeInDown" delay={1.2}>
        <Button link={link} title={t("common", "buttonLabel")} />
      </Animate>
    </div>
  );
};
