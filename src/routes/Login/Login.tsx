import React, { FC } from "react";
import "./Login.scss";
import { VscFlame } from "react-icons/vsc";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  return (
    <div className="login">
      <div className="login__header">
        <VscFlame color="rgb(250, 250, 250)" size="6rem" />
        <h1>Sign In</h1>
        <p>Hello there! Sign in and start managing your account</p>
      </div>
      <div className="login__inputs">
        <Input placeholder="Login" uiType="data" />
        <Input placeholder="Password" uiType="data" />
      </div>
      <div className="login__button">
        <Button
          text="SIGN IN NOW"
          uiType="shortBulky"
          bgColor="white"
          color="#333"
        />
      </div>
      <div className="login__passwordReset">
        <small>Forgot Password?</small>
        <button>Reset</button>
      </div>
    </div>
  );
};

export default Login;
