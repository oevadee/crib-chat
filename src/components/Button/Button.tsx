import React, { FC } from "react";
import "./Button.scss";

export interface ButtonProps {
  text: string;
  uiType: string;
  bgColor: string;
  color: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  text,
  uiType,
  bgColor,
  color,
  onClick,
  disabled,
}) => {
  return (
    <button
      className={`button ${uiType} ${bgColor}`}
      onClick={onClick}
      disabled={disabled}
    >
      <p style={{ color: color }}>{text}</p>
    </button>
  );
};

export default Button;
