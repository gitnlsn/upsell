import Image from "next/image";
import React from "react";

import styles from "./StepCard.module.css";

interface StepCardProps {
  text: string;
  icon: string;
}

export const StepCard: React.FC<StepCardProps> = ({ icon, text }) => {
  return (
    <div className={styles.container}>
      <Image alt={text} src={icon} width={40} height={40} />
      <p className={styles.text}>{text}</p>
    </div>
  );
};
