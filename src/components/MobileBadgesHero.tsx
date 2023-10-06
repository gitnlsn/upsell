import Image from "next/image";
import React from "react";

import styles from "./MobileBadgesHero.module.css";

export const MobileBadgesHero: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <Image
          alt="clarifion-logo"
          src="/clarifion-logo.svg"
          width={106}
          height={20}
        />
      </div>

      <div className={styles["badge-container"]}>
        <Image
          alt="mcafee-logo"
          src="/mcafee-logo.svg"
          width={44}
          height={16}
        />
        <Image
          alt="norton-logo"
          src="/norton-logo.svg"
          width={41}
          height={16}
        />
      </div>
    </div>
  );
};
