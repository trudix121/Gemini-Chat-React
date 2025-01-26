import React from 'react';
import { Sparkles, Menu } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, onToggleDarkMode, onOpenSidebar }) => {
  return (
    <header className={`p-4 border-b ${isDarkMode ? 'bg-gray-800 text-orange-400 border-gray-700' : 'bg-white border-gray-200'}`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <button onClick={onOpenSidebar} className="p-2 rounded-full hover:bg-opacity-20">
            <Menu size={20} />
          </button>
          <Sparkles size={24} />
          <h1 className="text-xl font-semibold">AI Assistant</h1>
        </div>

        <button onClick={onToggleDarkMode} className="p-2 rounded-full hover:bg-opacity-20">
          {isDarkMode ? 'Light' : 'Dark'}
        </button>
      </div>
    </header>
  );
};

export default Header;
