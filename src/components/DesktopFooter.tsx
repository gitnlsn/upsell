import React from "react";

import styles from "./DesktopFooter.module.css";
import Image from "next/image";

export const DesktopFooter: React.FC = () => {
  return (
    <div className={styles.container}>
      <p>Copyright (C) 2023 | clarifionsupport@clarifion.com</p>

      <div className={styles.row}>
        <Image src={"/lock-icon.svg"} alt="lock-icon" width={20} height={20} />
        <p>Secure 256-bit SSL encryption.</p>
      </div>
    </div>
  );
};
