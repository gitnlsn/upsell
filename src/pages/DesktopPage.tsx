import React from "react";
import { DefinedDesktopHeader } from "../components/DefinedDesktopHeader";
import { DesktopFooter } from "../components/DesktopFooter";
import { BadgesHero } from "../components/BadgesHero";
import { TitleHero } from "../components/TitleHero";
import { StepsRow } from "../components/StepsRow";
import Image from "next/image";

import styles from "./DesktopPage.module.css";

export const DesktopPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <DefinedDesktopHeader />
      <div className={styles.badgesHeroSpacing}>
        <BadgesHero />
      </div>
      <TitleHero />
      <div className={styles.stepsRowSpacing}>
        <StepsRow />
      </div>
      <div className={styles.content}>
        <Image
          alt="desktop-main-frame"
          src="/desktop-main-frame.svg"
          width={1245}
          height={879}
        />
      </div>

      <DesktopFooter />
    </div>
  );
};
