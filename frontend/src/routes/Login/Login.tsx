import React, { FC, useState } from "react";
import "./Login.scss";
import { VscFlame } from "react-icons/vsc";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
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
      login: "",
      password: "",
    },
  });

  const watchLogin = watch("login");
  const watchPassword = watch("password");

  const onLoginUser = async (values) => {
    axios.post("http://localhost:8080/api/users", values).then((res) => {
      console.log(values);
      console.log(res.data);
    });
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
            name="login"
            placeholder="Login"
            uiType="data"
            register={register}
            inputValue={watchLogin}
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
