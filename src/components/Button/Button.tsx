import React, { FC } from "react";
import "./Button.scss";

export interface ButtonProps {
  text: string;
  uiType: string;
  bgColor: string;
  color: string;
}

const Button: FC<ButtonProps> = ({ text, uiType, bgColor, color }) => {
  return (
    <button className={`button ${uiType} ${bgColor}`}>
      <p style={{ color: color }}>{text}</p>
    </button>
  );
};

export default Button;
