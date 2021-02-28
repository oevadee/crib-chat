import React, { FC } from "react";
import "./Checkbox.scss";

export interface CheckboxProps {
  label: string;
}

const Checkbox: FC<CheckboxProps> = ({ label }) => {
  return (
    <div className="checkbox">
      <div className="checkbox__input">
        <input type="checkbox" name="checkbox" />
        <span className="checkbox__control">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              d="M1.73 12.91l6.37 6.37L22.79 4.59"
            />
          </svg>
        </span>
      </div>
      <label className="radio__label">{label}</label>
    </div>
  );
};

export default Checkbox;
