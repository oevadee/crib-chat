import React, { FC } from "react";
import "./Message.scss";

export interface MessageProps {
  onClick?: () => void;
}

const Message: FC<MessageProps> = ({ ...props }) => {
  return (
    <div className="message">
      <img
        src="https://avatars.githubusercontent.com/u/62460030?s=460&u=1bea4d850a2fd895c6954f10196dfb0ab4cbbb3e&v=4"
        alt="avatar"
      />
      <div className="message__body">
        <div className="message__body__header">
          <h3>Adrian Szczechura</h3>
          <div className="message__body__header__dot"></div>
          <small>4:20pm</small>
        </div>
        <p className="message__body__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          nobis, illo officiis natus sequi est nulla qui odit expedita pariatur
          totam perspiciatis asperiores obcaecati voluptatum.
        </p>
      </div>
    </div>
  );
};

export default Message;
