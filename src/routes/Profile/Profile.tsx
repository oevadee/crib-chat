import React, { FC } from "react";
import "./Profile.scss";

interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
  return (
    <div className="profile">
      <div className="profile__settings">
        <h1>Settings</h1>
        <div className="card">
          <h3>Profile Informations</h3>
          <small>Complete your profile to unlock all features</small>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
