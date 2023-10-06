import Image from "next/image";
import React from "react";

import styles from "./BadgesHero.module.css";

export const BadgesHero: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <Image
          alt="clarifion-logo"
          src="/clarifion-logo.svg"
          width={192}
          height={36}
        />
      </div>
      <div className={styles["badge-container"]}>
        <Image
          alt="mcafee-logo"
          src="/mcafee-logo.svg"
          width={88}
          height={32}
        />
        <Image
          alt="norton-logo"
          src="/norton-logo.svg"
          width={82}
          height={32}
        />
      </div>
    </div>
  );
};
