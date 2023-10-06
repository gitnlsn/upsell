import { useState } from "react";

interface useCarosselProps {
  max: number;
}

export const useCarossel = ({ max }: useCarosselProps) => {
  const [index, setIndex] = useState<number>(0);

  const onClickLeft = () => {
    setIndex((current) => {
      if (current === 0) {
        return max - 1;
      }

      return current - 1;
    });
  };

  const onClickRight = () => {
    setIndex((current) => {
      if ((current === max - 1)) {
        return 0;
      }

      return current + 1;
    });
  };

  return {
    index,
    onClickLeft,
    onClickRight,
  };
};
