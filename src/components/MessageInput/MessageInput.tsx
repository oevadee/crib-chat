import React, { ChangeEvent, FC, useState } from "react";
import "./MessageInput.scss";
import { AiOutlineBold, AiOutlineItalic } from "react-icons/ai";
import { IconContext } from "react-icons";

export interface MessageInputProps {}

const MessageInput: FC<MessageInputProps> = ({ ...props }) => {
  const [messageInputRows, setMessageInputRows] = useState(2);
  const [messageInputValue, setMessageInputValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const messageMinInputRows = 2;
    const messageMaxInputRows = 8;
    const textareaLineHeight = 20;

    const previousRows = e.target.rows;
    e.target.rows = messageMinInputRows; // reset number of rows in textarea

    const currentRows = e.target.scrollHeight / textareaLineHeight;

    if (currentRows === previousRows) {
      e.target.rows = currentRows;
    }

    if (currentRows >= messageMaxInputRows) {
      e.target.rows = messageMaxInputRows;
      e.target.scrollTop = e.target.scrollHeight;
    }

    setMessageInputRows(
      currentRows < messageMaxInputRows ? currentRows : messageMaxInputRows
    );
    setMessageInputValue(e.target.value);
  };

  return (
    <div className="messageInput">
      <textarea
        name="messageInput"
        id="messageInput"
        wrap="soft"
        rows={messageInputRows}
        onChange={handleInputChange}
        value={messageInputValue}
      />
      <IconContext.Provider value={{ size: "1.25rem" }}>
        <div className="messageInput__options">
          <AiOutlineBold />
          <AiOutlineItalic />
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default MessageInput;
