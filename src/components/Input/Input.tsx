import React, { ChangeEvent, FC, useState } from "react";
import "./Input.scss";
import { AiOutlineSearch } from "react-icons/ai";

export interface InputProps {
  placeholder: string;
  uiType: string;
}

const Input: FC<InputProps> = ({ placeholder = "", uiType, ...props }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className={`input ${uiType}`} {...props}>
      {uiType === "search" && <AiOutlineSearch size="1.25rem" />}
      {uiType === "data" && (
        <label className={inputValue && "input__label-active"}>
          {placeholder}
        </label>
      )}
      <input
        placeholder={uiType === "data" ? "" : placeholder}
        value={inputValue}
        onInput={(e: ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.target.value)
        }
      />
    </div>
  );
};

export default Input;
