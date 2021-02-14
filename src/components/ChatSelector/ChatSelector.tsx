import React, { FC } from "react";
import { FiHash } from "react-icons/fi";
import "./ChatSelector.scss";

export interface ChatSelectorProps {
  favorite?: boolean;
  direct?: boolean;
}

const ChatSelector: FC<ChatSelectorProps> = ({
  favorite = false,
  direct = false,
}) => {
  return (
    <div className={`chatSelector ${favorite && "favorite"}`}>
      {direct ? (
        <img
          src="https://avatars.githubusercontent.com/u/62460030?s=460&u=1bea4d850a2fd895c6954f10196dfb0ab4cbbb3e&v=4"
          alt="avatar"
        />
      ) : (
        <FiHash />
      )}
      <p>Pelican room</p>
    </div>
  );
};

export default ChatSelector;
