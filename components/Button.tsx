import { ReactNode } from "react";

type ButtonProps = {
  className?: string;
  icon?: ReactNode;
  label: string;
  type: "submit" | "button";
  variant?: "btn-light" | "btn-dark" | "btn-outline-dark" | "btn-outline-light";
  onClick: () => void;
};

const Button = ({
  className,
  icon,
  label,
  onClick,
  type,
  variant,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${variant} ${className} flexCenter gap-1 cursor-pointer`}
      onClick={onClick}
    >
      {icon}
      <label>{label}</label>
    </button>
  );
};

export default Button;
