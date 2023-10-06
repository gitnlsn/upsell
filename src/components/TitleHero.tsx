import React from "react";

import styles from "./TitleHero.module.css";

export const TitleHero: React.FC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Wait ! your order in progress.</p>
      <p className={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing
      </p>
    </div>
  );
};
