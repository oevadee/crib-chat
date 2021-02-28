import React, { FC } from "react";
import "./PersonalInformationsForm.scss";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Input from "../../../../components/Input";
import Buttons from "../Buttons";
import axios from "axios";
import { useSelector } from "react-redux";
import { ICombinedReducers } from "../../../../store";
import schema from "./schema";

export interface PersonalInformationsFormProps {
  defaults: {
    firstName: string;
    lastName: string;
    email: string;
  };
}

const PersonalInformationsForm: FC<PersonalInformationsFormProps> = ({
  defaults,
}) => {
  const user = useSelector((state: ICombinedReducers) => state.user.user);
  const { register, watch, handleSubmit, errors, setError } = useForm({
    defaultValues: defaults,
    resolver: joiResolver(schema),
  });
  const watchFirstName = watch("firstName");
  const watchLastName = watch("lastName");
  const watchEmail = watch("email");

  const handleProfileUpdate = async (values) => {
    console.log({ values, user });
    const { data } = await axios.put(
      "http://localhost:8080/api/users/update-profile",
      {
        values,
        user,
      }
    );
  };

  return (
    <div className="personalInformations">
      <h3>Personal Informations</h3>
      <p className="personalInformations__description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>
      <form onSubmit={handleSubmit(handleProfileUpdate)}>
        <div className="personalInformations__nameInputs">
          <Input
            name="firstName"
            placeholder="First Name"
            uiType="data"
            inputValue={watchFirstName}
            register={register}
            error={errors}
          />
          <Input
            name="lastName"
            placeholder="Last Name"
            uiType="data"
            inputValue={watchLastName}
            register={register}
            error={errors}
          />
        </div>
        <Input
          name="email"
          register={register}
          placeholder="Email Adress"
          uiType="data"
          inputValue={watchEmail}
          error={errors}
          style={{ marginBottom: 40 }}
        />
        <Buttons />
      </form>
    </div>
  );
};

export default PersonalInformationsForm;
