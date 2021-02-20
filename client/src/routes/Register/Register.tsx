import React, { FC, useState } from "react";
import "./Register.scss";
import { VscFlame } from "react-icons/vsc";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

interface RegisterProps {}

const Register: FC<RegisterProps> = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="register">
      <div className="register__header">
        <VscFlame color="rgb(250, 250, 250)" size="6rem" />
        <h1>Sign Up</h1>
        <p>Hello there! Sign up by creating new account</p>
      </div>
      <div className="register__inputs">
        <Input
          placeholder="Register"
          uiType="data"
          onInput={setLogin}
          inputValue={login}
        />
        <Input
          placeholder="Password"
          uiType="data"
          onInput={setPassword}
          inputValue={password}
        />
        <Input
          placeholder="Confirm Password"
          uiType="data"
          onInput={setConfirmPassword}
          inputValue={confirmPassword}
        />
      </div>
      <div className="register__button">
        <Button
          text="SIGN IN NOW"
          uiType="shortBulky"
          bgColor="white"
          color="#333"
        />
      </div>
      <div className="register__passwordReset">
        <small>Already have an account?</small>
        <Link to="login">
          <button>Sign in</button>
        </Link>
      </div>
    </div>
  );
};

export default Register;