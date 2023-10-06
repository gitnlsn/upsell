import { HeaderItem, HeaderItemProps } from "./Headeritem";

import styles from "./DesktopHeader.module.css";

interface HeaderProps {
  items: HeaderItemProps[];
}

export const DesktopHeader: React.FC<HeaderProps> = ({ items }) => {
  return (
    <div className={styles.container}>
      {items.map((item) => (
        <HeaderItem key={`${item.text}-${item.icon}`} {...item} />
      ))}
    </div>
  );
};
