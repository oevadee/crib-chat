import React, { FC } from "react";
import "./ChatRoom.scss";
import { VscPinned } from "react-icons/vsc";
import { AiOutlineInfoCircle, AiOutlineStar } from "react-icons/ai";
import { IconContext } from "react-icons";
import Message from "../../components/Message/Message";
import MessageInput from "../../components/MessageInput/MessageInput";

const ChatRoom: FC = () => {
  return (
    <div className="chatRoom">
      <div className="chatRoom__header">
        <div className="chatRoom__header__roomInfo">
          <h2>
            <span>#</span>
            PFD room
          </h2>
          <div className="chatRoom__header__roomInfo__members">
            <small>6 members</small>
            <button>+ Add member</button>
          </div>
        </div>
        <IconContext.Provider value={{ size: "1.25rem" }}>
          <div className="chatRoom__header__options">
            <VscPinned />
            <AiOutlineInfoCircle />
            <div className="chatRoom__header__options__line"></div>
            <div className="chatRoom__header__options__favourite">
              <AiOutlineStar />
            </div>
          </div>
        </IconContext.Provider>
      </div>
      <div className="chatRoom__messages">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <div className="chatRoom__messageInput">
        <MessageInput />
      </div>
    </div>
  );
};

export default ChatRoom;
