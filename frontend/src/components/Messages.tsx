import React, { useRef, useEffect } from 'react';
import { Message } from '../types';
import { parseMessageText } from '../utils/parseMessageText';

interface MessagesProps {
  messages: Message[];
  isDarkMode: boolean;
}

const Messages: React.FC<MessagesProps> = ({ messages, isDarkMode }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className={`flex-grow overflow-y-auto p-4 space-y-4 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {messages.map((msg) => (
        <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
          <div
            className={`px-4 py-3 rounded-2xl max-w-[80%] shadow-md ${
              msg.sender === 'user'
                ? isDarkMode
                  ? 'bg-blue-800 text-white'
                  : 'bg-blue-500 text-white'
                : isDarkMode
                ? 'bg-gray-800 text-gray-200'
                : 'bg-white text-gray-800'
            }`}
          >
            {parseMessageText(msg.text)}
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Messages;
