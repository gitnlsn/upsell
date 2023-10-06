import Image from "next/image";
import styles from "./HeaderItem.module.css";

export interface HeaderItemProps {
  text: string;
  icon: string;
}

export const HeaderItem: React.FC<HeaderItemProps> = ({ icon, text }) => {
  return (
    <div className={styles.container}>
      <Image alt={text} src={icon} width={20} height={20} />
      <p>{text}</p>
    </div>
  );
};
