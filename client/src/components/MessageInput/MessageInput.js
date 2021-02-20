import { useState } from "react";
import "./MessageInput.scss";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const MessageInput = ({ onPost }) => {
  const [messageInputInnerHTML, setMessageInputInnerHTML] = useState("");

  const handleMessageAdd = () => {
    onPost(messageInputInnerHTML);
  };

  return (
    <div className="messageInput">
      <CKEditor
        editor={ClassicEditor}
        data="<p></p>"
        onChange={(event, editor) => {
          const data = editor.getData();
          setMessageInputInnerHTML(data);
        }}
      />
      <div className="messageInput__postButton">
        {messageInputInnerHTML.length >= 12 && (
          <button onClick={handleMessageAdd}>Post</button>
        )}
      </div>
    </div>
  );
};

export default MessageInput;
