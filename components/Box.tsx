import React, { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: ReactNode;
  className?: string;
};

const Box: FC<Props> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        `
        bg-neutral-900
        rounded-xl
        h-fit
        w-full
        `,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Box;
