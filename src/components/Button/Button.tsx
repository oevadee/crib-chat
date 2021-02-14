import React, { FC } from "react";
import "./Button.scss";

export interface ButtonProps {
  text: string;
  uiType: string;
}

const Button: FC<ButtonProps> = ({ text, uiType }) => {
  return (
    <button className={`button ${uiType}`}>
      <p>{text}</p>
    </button>
  );
};

export default Button;
