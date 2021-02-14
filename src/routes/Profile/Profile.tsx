import React, { FC } from "react";
import { Route, Router, Switch, useRouteMatch } from "react-router-dom";
import Button from "../../components/Button/Button";
import Checkbox from "../../components/Checkbox/Checkbox";
import Input from "../../components/Input/Input";
import "./Profile.scss";

interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
  const { path, url } = useRouteMatch();

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
        <Switch>
          <Route path={`${path}/personal-informations`}>
            <div className="profile__actions__personalInformations">
              <h3>Personal Informations</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <div className="profile__actions__personalInformations__nameInputs">
                <Input placeholder="First Name" uiType="data" />
                <Input placeholder="Last Name" uiType="data" />
              </div>
              <Input placeholder="Email Adress" uiType="data" />
            </div>
          </Route>
          <Route path={`${path}/notifications`}>
            <div className="profile__actions__notifications">
              <h3>Notifications</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <div className="profile__actions__notifications__checkBoxes">
                <Checkbox label="Weekly Report" />
                <Checkbox label="New message" />
              </div>
            </div>
          </Route>
        </Switch>
        <div className="profile__actions__buttons">
          <Button
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
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
