import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../../actions/userActions";
import Button from "../../../../components/Button";
import "./Buttons.scss";

export interface ButtonsProps {}

const Buttons: FC<ButtonsProps> = () => {
  const userDispatch = useDispatch();

  return (
    <div className="buttons">
      <Button
        type="submit"
        text="Save Changes"
        uiType="shortBulky"
        bgColor="accent"
        color="rgb(250, 250, 250)"
      />
      <Button
        text="Sign Out"
        uiType="shortBulky"
        bgColor="transparent"
        color="rgb(250, 250, 250)"
        onClick={() => userDispatch(logoutUser())}
      />
    </div>
  );
};

export default Buttons;
