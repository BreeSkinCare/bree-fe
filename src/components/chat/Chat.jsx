import React from "react";
import Message from "./ChatMessage";
import Animation from "./Animation";

const Chat = ({ messages }) => {
  if (!Array.isArray(messages)) {
    try {
      messages = messages ? JSON.parse(messages) : [];
    } catch (error) {
      console.error("Error parsing messages:", error);
      messages = [];
    }
  }

  return (
    <>
      {(!messages || messages.length === 0) && <Animation />}
      <div className="chat">
        {Array.isArray(messages) &&
          messages.map((message, index) => (
            <Message key={index} role={message.role} content={message.content} />
          ))}
      </div>
    </>
  );
};

export default Chat;
