import React, { FC, useState } from "react";
import "./Login.scss";
import { VscFlame } from "react-icons/vsc";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser } from "../../actions/userActions";

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const userDispatch = useDispatch();

  const onLoginUser = () => {
    axios.get("http://localhost:8080/users").then((res) => {
      const data = res.data;
      data.some(
        (user: { login: string; password: string }) =>
          user.login === login &&
          user.password === password &&
          userDispatch(loginUser(user))
      );
    });
  };

  return (
    <div className="login">
      <div className="login__header">
        <VscFlame color="rgb(250, 250, 250)" size="6rem" />
        <h1>Sign In</h1>
        <p>Hello there! Sign in and start managing your account</p>
      </div>
      <div className="login__inputs">
        <Input
          placeholder="Login"
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
      </div>
      <div className="login__button">
        <Button
          disabled={!login || !password}
          onClick={onLoginUser}
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
      <div className="login__signUp">
        <small>Don't have an account?</small>
        <Link to="register">
          <button>Sign up</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;