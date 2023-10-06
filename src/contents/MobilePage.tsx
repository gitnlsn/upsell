import React from "react";
import { MobileHeader } from "../components/MobileHeader";
import { headerItems } from "../constants/headerItems";
import { MobileFooter } from "../components/MobileFooter";
import { MobileBadgesHero } from "../components/MobileBadgesHero";

import styles from "./MobilePage.module.css";
import Image from "next/image";

export const MobilePage: React.FC = () => {
  return (
    <div>
      <MobileHeader items={headerItems} />
      <div className={styles.badgesHeroSpacing}>
        <MobileBadgesHero />
      </div>

      <div className={styles.content}>
        <Image
          alt="mobile-main-content"
          src="/mobile-main-content.svg"
          width={320}
          height={1251}
        />
      </div>

      <MobileFooter />
    </div>
  );
};
