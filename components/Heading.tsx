import React from "react";

type PillProps = {
  label: string;
  className?: string;
  variant: "header-light" | "header-dark";
};

const Heading = ({ label, variant, className }: PillProps) => {
  return (
    <p
      className={`flex items-center gap-4 text-[18px] uppercase mb-4 ${className}`}
    >
      <span className={`${variant} h-[5px] rounded-sm w-20`}></span>
      {label}
    </p>
  );
};

export default Heading;
