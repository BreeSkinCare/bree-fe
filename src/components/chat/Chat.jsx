import React from "react";
import Message from "./ChatMessage";

const Chat = ({messages}) => {

    if (!Array.isArray(messages)) {
        try {
            messages = JSON.parse(messages);
        } catch (error) {
            console.error('Error parsing messages:', error);
            messages = [];
        }
    }


    return (
        <div className="chat">
            {Array.isArray(messages) && messages.map((message, index) => (
                <Message key={index} role={message.role} content={message.content} />
            ))}
        </div>

    );
};

export default Chat;
