import React, { FC } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./Profile.scss";

interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
  return (
    <div className="profile">
      <div className="profile__settings">
        <h1>Settings</h1>
        <div className="profile__settings__card">
          <img src="/img/abstract-bg2.svg" alt="" />
          <h3>Profile Informations</h3>
          <small>Complete your profile to unlock all features</small>
          <Button
            text="Complete Your Profile"
            uiType="longSlim"
            bgColor="white"
            color="rgb(12, 99, 159)"
          />
        </div>
      </div>
      <div className="profile__actions">
        <div className="profile__actions__header">
          <h2>Account Settings</h2>
        </div>
        <div className="profile__actions__personalInformations">
          <h3>Personal Informations</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <div className="profile__actions__personalInformations__nameInputs">
            <Input placeholder="First Name" uiType="data" />
            <Input placeholder="Last Name" uiType="data" />
          </div>
          <Input placeholder="Email Adress" uiType="data" />
        </div>
        <div className="profile__actions__notifications">
          <h3>Notifications</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <div className="profile__actions__notifications__checkBoxes">
            <input type="checkbox" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
