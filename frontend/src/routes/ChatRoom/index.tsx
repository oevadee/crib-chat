import React, { FC, useState } from "react";
import "./ChatRoom.scss";
import Message from "../../components/Message";
import MessageInput from "../../components/MessageInput";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import { ICombinedReducers } from "../../store";
import axios from "axios";
import { useForm } from "react-hook-form";

const ChatRoom: FC = () => {
  const user = useSelector((state: ICombinedReducers) => state.user.user);
  const [newMessage, setNewMessage] = useState("");
  const { watch, handleSubmit, control } = useForm();

  const watchMessage = watch("message");

  console.log(watchMessage);

  const handlePost = async () => {
    if (user) {
      const { data } = await axios.post("http://localhost:8080/api/posts", {
        postCreator: `${user.firstName} ${user.lastName}`,
        postHTML: newMessage,
      });

      console.log(data);
    }
  };

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
        <form onSubmit={handleSubmit(handlePost)}>
          <MessageInput onPost={setNewMessage} control={control} />
        </form>
      </div>
    </div>
  );
};

export default ChatRoom;
