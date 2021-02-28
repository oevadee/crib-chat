import React, { FC, useState } from "react";
import "./ChatRoom.scss";
import Message from "../../components/Message";
import MessageInput from "../../components/MessageInput";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import { ICombinedReducers } from "../../store";

const ChatRoom: FC = () => {
  const user = useSelector((state: ICombinedReducers) => state.user.user);
  const [newMessage, setNewMessage] = useState("");

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
        <MessageInput onPost={setNewMessage} />
      </div>
    </div>
  );
};

export default ChatRoom;
