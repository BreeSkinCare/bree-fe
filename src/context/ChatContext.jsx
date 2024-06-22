import React, { createContext, useState, useContext } from 'react';

const ChatContext = createContext();

export const useChat = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [activeUser, setActiveUser] = useState(null);

  const sendMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage, activeUser, setActiveUser }}>
      {children}
    </ChatContext.Provider>
  );
};
