import React, { ChangeEvent, FC } from "react";
import "./Input.scss";
import { AiOutlineSearch } from "react-icons/ai";

export interface InputProps {
  name: string;
  type?: string;
  placeholder: string;
  uiType: string;
  register: any;
  inputValue: any;
  onInput?: () => void;
  error?: any;
  style?: any;
}

const Input: FC<InputProps> = ({
  name,
  type = "text",
  placeholder = "Placeholder...",
  uiType,
  register,
  inputValue,
  onInput,
  error,
  ...props
}) => {
  return (
    <div className={`input ${uiType}`} {...props}>
      {uiType === "search" && <AiOutlineSearch size="1.25rem" />}
      {uiType === "data" && (
        <label className={inputValue && "input__label-active"}>
          {placeholder}
        </label>
      )}
      <input
        type={type}
        name={name}
        ref={register}
        onInput={onInput}
        placeholder={uiType === "data" ? "" : placeholder}
      />
    </div>
  );
};

export default Input;
