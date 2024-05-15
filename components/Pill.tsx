import React from "react";

type PillProps = {
  label: string;
  className?: string;
  variant: "pill-light" | "pill-dark";
};

const Pill = ({ label, variant, className }: PillProps) => {
  return (
    <div className={`${variant} ${className} bold-15 lg:bold-20`}>{label}</div>
  );
};

export default Pill;
