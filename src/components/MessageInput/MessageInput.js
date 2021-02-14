import { useState } from "react";
import "./MessageInput.scss";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const MessageInput = () => {
  const [messageInputInnerHTML, setMessageInputInnerHTML] = useState("");

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
        {messageInputInnerHTML.length >= 12 && <button>Post</button>}
      </div>
    </div>
  );
};

export default MessageInput;
