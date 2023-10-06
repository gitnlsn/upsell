import React from "react";
import { HeaderItem, HeaderItemProps } from "./Headeritem";

import styles from "./DesktopHeader.module.css";
import { useCarossel } from "../hooks/useCarossel";
import Image from "next/image";

interface MobileHeaderProps {
  items: HeaderItemProps[];
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({ items }) => {
  const { index, onClickLeft, onClickRight } = useCarossel({
    max: items.length,
  });

  const selectedItem = items[index];

  return (
    <div className={styles.container}>
      <div className={styles.clickable} onClick={onClickLeft}>
        <Image
          alt="left-chevron-icon"
          src="/chevron-left-icon.svg"
          width={20}
          height={20}
        />
      </div>

      <HeaderItem
        key={`${selectedItem.text}-${selectedItem.icon}`}
        {...selectedItem}
      />

      <div className={styles.clickable} onClick={onClickRight}>
        <Image
          alt="right-chevron-icon"
          src="/chevron-right-icon.svg"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};
