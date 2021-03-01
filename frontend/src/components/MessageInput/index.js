import { useState } from "react";
import "./MessageInput.scss";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Controller, useForm } from "react-hook-form";

const MessageInput = ({ onPost, control }) => {
  const [messageInputInnerHTML, setMessageInputInnerHTML] = useState("");

  const handleMessageAdd = () => {
    onPost(messageInputInnerHTML);
  };

  return (
    <div className="messageInput">
      <Controller
        control={control}
        name="message"
        render={(
          { onChange, onBlur, value, name, ref },
          { invalid, isTouched, isDirty }
        ) => (
          <CKEditor
            editor={ClassicEditor}
            data="<p></p>"
            onChange={(event, editor) => {
              const data = editor.getData();
              setMessageInputInnerHTML(data);
            }}
          />
        )}
      />
      <div className="messageInput__postButton">
        {messageInputInnerHTML.length >= 12 && <button>Post</button>}
      </div>
    </div>
  );
};

export default MessageInput;
