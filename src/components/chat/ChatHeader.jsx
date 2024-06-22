import React from 'react';
import { useChat } from '../../context/ChatContext';

const ChatHeader = () => {
  const { activeUser } = useChat();

  return (
    <div className="flex flex-row items-center justify-between border-b border-gray-200 pb-3">
      <div className="flex items-center space-x-4">
        <div className="text-2xl font-bold">{activeUser}</div>
      </div>
    </div>
  );
};

export default ChatHeader;
