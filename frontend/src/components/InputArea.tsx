import React from 'react';
import Select, { SingleValue } from 'react-select';
import { Send } from 'lucide-react';
import { ModelOption, ModelType } from '../types';
import { customSelectStyles } from '../utils/selectStyles';

interface InputAreaProps {
  input: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSendMessage: () => void;
  onSearch: (searchTerm: string) => void;
  isDarkMode: boolean;
  selectedModel: ModelOption;
  onModelChange: (selectedOption: SingleValue<ModelOption>) => void;
  selectedModelType: ModelType;
  onTypeChange: (selectedOption: SingleValue<ModelType>) => void;
  modelOptions: ModelOption[];
  modelTypes: ModelType[];
}

const InputArea: React.FC<InputAreaProps> = ({
  input,
  onInputChange,
  onSendMessage,
  isDarkMode,
  selectedModel,
  onModelChange,
  selectedModelType,
  onTypeChange,
  modelOptions,
  modelTypes,
}) => {
  return (
    <div
      className={`p-4 border-t flex items-center space-x-2 ${
        isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      }`}
    >
      <input
        type="text"
        value={input}
        onChange={onInputChange}
        onKeyPress={(e) => e.key === 'Enter' && onSendMessage()}
        placeholder={`Ask me anything => ${selectedModel.label}`}
        className={`flex-grow p-3 rounded-xl ${
          isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'border-gray-300'
        }`}
      />
      <button
        onClick={onSendMessage}
        className={`p-3 rounded-xl text-white ${
          isDarkMode ? 'bg-blue-700' : 'bg-blue-500'
        }`}
      >
        <Send size={20} />
      </button>
      <Select
        value={selectedModel}
        onChange={onModelChange}
        options={modelOptions}
        styles={customSelectStyles(isDarkMode)}
        menuPlacement="top"
      />
      <Select
        value={selectedModelType}
        onChange={onTypeChange}
        options={modelTypes}
        styles={customSelectStyles(isDarkMode)}
        menuPlacement="top"
      />
    </div>
  );
};

export default InputArea;
