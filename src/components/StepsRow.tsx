import React from "react";
import { StepCard } from "./StepCard";

import styles from "./StepsRows.module.css";

export const StepsRow: React.FC = () => {
  return (
    <div className={styles.container}>
      <StepCard text="Step 1: Cart Review" icon="/checked-green-icon.svg" />
      <StepCard text="Step 1: Checkout" icon="/checked-green-icon.svg" />
      <StepCard text="Step 1: Special Offer" icon="/three-blue-icon.svg" />
      <StepCard text="Step 1: Confirmation" icon="/four-white-icon.svg" />
    </div>
  );
};
