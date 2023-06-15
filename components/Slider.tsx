"use client";

import React, { FC } from "react";
import * as RadixSlide from "@radix-ui/react-slider";

type Props = {
  value?: number;
  onChange?: (value: number) => void;
};

const Slider: FC<Props> = ({ value = 1, onChange }) => {
  const handleChange = (newValue: number[]) => {
    onChange?.(newValue[0]);
  };
  return (
    <RadixSlide.Root
      className="
        relative
        flex
        items-center
        select-none
        touch-none
        w-full
        h-10
        "
      defaultValue={[1]}
      value={[value]}
      onValueChange={handleChange}
      max={1}
      step={0.1}
      aria-label="Volume"
    >
      <RadixSlide.Track
        className="
            bg-neutral-600
            relative
            grow
            rounded-full
            h-[3px]
        "
      >
        <RadixSlide.Range
          className="
            absolute
            bg-white
            rounded-full
            h-full
            "
        />
      </RadixSlide.Track>
    </RadixSlide.Root>
  );
};

export default Slider;
