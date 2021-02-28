import React, { FC, useState } from "react";
import "./Register.scss";
import { VscFlame } from "react-icons/vsc";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

interface RegisterProps {}

const Register: FC<RegisterProps> = () => {
  const { register, handleSubmit, errors, watch } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const watchEmail = watch("email");
  const watchPassword = watch("password");
  const watchConfirmPassword = watch("confirmPassword");

  const handleRegister = async (values) => {
    await axios.post("http://localhost:8080/api/users/register", values);
  };

  return (
    <div className="register">
      <div className="register__header">
        <VscFlame color="rgb(250, 250, 250)" size="6rem" />
        <h1>Sign Up</h1>
        <p>Hello there! Sign up by creating new account</p>
      </div>
      <form onSubmit={handleSubmit(handleRegister)}>
        <div className="register__inputs">
          <Input
            placeholder="Email"
            uiType="data"
            name="email"
            register={register}
            inputValue={watchEmail}
          />
          <Input
            placeholder="Password"
            uiType="data"
            name="password"
            register={register}
            inputValue={watchPassword}
          />
          <Input
            placeholder="Confirm Password"
            uiType="data"
            name="confirmPassword"
            register={register}
            inputValue={watchConfirmPassword}
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
      </form>
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
