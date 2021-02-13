import React, { FC } from "react";
import "./ChatRoom.scss";
import Message from "../../components/Message/Message";
import MessageInput from "../../components/MessageInput/MessageInput";
import Header from "../../components/Header/Header";

const ChatRoom: FC = () => {
  return (
    <div className="chatRoom">
      <Header />
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
