import React from "react";

type PillProps = {
  variant: "pill-light" | "pill-dark";
};

const PillSection = ({ variant }: PillProps) => {
  return <div className={`${variant} px-1`}>PillSection</div>;
};

export default PillSection;
