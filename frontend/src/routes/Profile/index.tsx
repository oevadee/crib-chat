import React, { FC, useEffect, useState } from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import "./Profile.scss";
import { IconContext } from "react-icons";
import { BsPersonFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineBell } from "react-icons/ai";
import { useSelector } from "react-redux";
import { ICombinedReducers } from "../../store";
import PersonalInformationsForm from "./components/PersonalInformationsForm";

interface ProfileProps {}

const profileRoutes = [
  {
    linkTo: "personal-informations",
    h3: "Account Settings",
    p: "Personal Informations, Email",
    icon: <BsPersonFill />,
  },
  {
    linkTo: "notifications",
    h3: "Notifications",
    p: "Type of notifications you want to receive",
    icon: <AiOutlineBell />,
  },
];

const Profile: FC<ProfileProps> = () => {
  const user = useSelector((state: ICombinedReducers) => state.user.user);
  const { path, url } = useRouteMatch();
  const [defaults, setDefaults] = useState({
    firstName: '',
    lastName: '',
    email: '',
    id: user?.id
  });

  useEffect(() => {
    if (user) {
      setDefaults({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        id: user.id
      });
    }
  }, [user]);
  
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

        <IconContext.Provider value={{ size: "1.25rem" }}>
          <div className="profile__settings__options">
            {profileRoutes.map((route) => (
              <Link
                key={route.h3}
                to={`${url}/${route.linkTo}`}
                style={{ textDecoration: "none" }}
              >
                <div className="profile__settings__options__button">
                  <div className="profile__settings__options__button__icon">
                    {route.icon}
                  </div>
                  <div className="profile__settings__options__button__body">
                    <h3>{route.h3}</h3>
                    <p>{route.p}</p>
                  </div>
                  <IoIosArrowForward size="1.5rem" color="rgb(250, 250, 250)" />
                </div>
              </Link>
            ))}
          </div>
        </IconContext.Provider>
      </div>
      <div className="profile__actions">
        <div className="profile__actions__header">
          <h2>Account Settings</h2>
        </div>
        <Switch>
          <Route exact path={path}>
            <div className="profile__actions__intro">
              <img src="/img/Phone.svg" alt="phone" />
              <p>You can edit your profile by choosing an option on the left</p>
            </div>
          </Route>
          <Route path={`${path}/personal-informations`}>
            <PersonalInformationsForm defaults={defaults} />
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
      </div>
    </div>
  );
};

export default Profile;
