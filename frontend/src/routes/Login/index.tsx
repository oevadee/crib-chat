import React, { FC, useState } from "react";
import "./Login.scss";
import { VscFlame } from "react-icons/vsc";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser } from "../../actions/userActions";
import { useForm } from "react-hook-form";

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const userDispatch = useDispatch();
  const { register, handleSubmit, errors, watch } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const watchEmail = watch("email");
  const watchPassword = watch("password");

  const onLoginUser = async (values) => {
    const res = await axios.post("http://localhost:8080/api/users/login", values);
    const data = await res.data
    userDispatch(loginUser(data))
  };

  return (
    <div className="login">
      <div className="login__header">
        <VscFlame color="rgb(250, 250, 250)" size="6rem" />
        <h1>Sign In</h1>
        <p>Hello there! Sign in and start managing your account</p>
      </div>
      <form onSubmit={handleSubmit(onLoginUser)}>
        <div className="login__inputs">
          <Input
            name="email"
            placeholder="Email"
            uiType="data"
            register={register}
            inputValue={watchEmail}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            uiType="data"
            register={register}
            inputValue={watchPassword}
          />
        </div>
        <div className="login__button">
          <Button
            text="SIGN IN NOW"
            uiType="shortBulky"
            bgColor="white"
            color="#333"
          />
        </div>
      </form>
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
