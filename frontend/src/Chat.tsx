import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Messages from './components/Messages';
import InputArea from './components/InputArea';
import { MODEL_OPTIONS, MODEL_TYPE } from './constants/models';
import { Message } from './types';
import axios from 'axios';

const AIChatLayout: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi there! I'm your AI assistant.", sender: 'ai' },
  ]);
  const [input, setInput] = useState('');
  const [selectedModel, setSelectedModel] = useState(MODEL_OPTIONS[0]);
  const [selectedModelType, setSelectedModelType] = useState(MODEL_TYPE[0]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    try {
      const response = await axios.post(
        'https://3000-idx-ai-chat-1737835155004.cluster-23wp6v3w4jhzmwncf7crloq3kw.cloudworkstations.dev/ai',
        {
          prompt: input,
          model: selectedModel.value,
          model_type: selectedModelType.value,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Origin': 'https://5173-idx-ai-chat-1737835155004.cluster-23wp6v3w4jhzmwncf7crloq3kw.cloudworkstations.dev',
          },
        }
      );

      const newMessages:any = [
        ...messages,
        { id: messages.length + 1, text: input, sender: 'user' },
        { id: messages.length + 2, text: response.data.message, sender: 'ai' },
      ];

      setMessages(newMessages);
      setInput('');
    } catch (error) {
      console.error('Message send error:', error);
    }
  };

  const handleSearch = async (searchTerm: string) => {
    if (!searchTerm.trim()) return;

    try {
      const response = await axios.post(
        'https://3000-idx-ai-chat-1737835155004.cluster-23wp6v3w4jhzmwncf7crloq3kw.cloudworkstations.dev/ai',
        {
          prompt: searchTerm,
          model: selectedModel.value,
          model_type: selectedModelType.value,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Origin': 'https://5173-idx-ai-chat-1737835155004.cluster-23wp6v3w4jhzmwncf7crloq3kw.cloudworkstations.dev',
          },
        }
      );

      const searchResults:any = [
        ...messages,
        { id: messages.length + 1, text: `Search: ${searchTerm}`, sender: 'user' },
        { id: messages.length + 2, text: response.data.message, sender: 'ai' },
      ];

      setMessages(searchResults);
      setInput('');
    } catch (error) {
      console.error('Search request failed:', error);
    }
  };

  return (
    <div className={`flex h-screen overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/*<Sidebar isDarkMode={isDarkMode} isSidebarOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />*/}
      <div className="flex flex-col flex-grow">
        <Header
          isDarkMode={isDarkMode}
          onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
          onOpenSidebar={() => setIsSidebarOpen(true)}
        />
        <Messages messages={messages} isDarkMode={isDarkMode} />
        <InputArea
          input={input}
          onInputChange={(e) => setInput(e.target.value)}
          onSendMessage={handleSendMessage}
          onSearch={handleSearch}
          isDarkMode={isDarkMode}
          selectedModel={selectedModel}
          onModelChange={(option) => option && setSelectedModel(option)}
          selectedModelType={selectedModelType}
          onTypeChange={(option) => option && setSelectedModelType(option)}
          modelOptions={MODEL_OPTIONS}
          modelTypes={MODEL_TYPE}
        />
      </div>
    </div>
  );
};

export default AIChatLayout;
