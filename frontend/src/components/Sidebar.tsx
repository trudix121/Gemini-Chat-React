import React from 'react';
import { User, Settings, LogOut } from 'lucide-react';

interface SidebarProps {
  isDarkMode: boolean;
  isSidebarOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isDarkMode, isSidebarOpen, onClose }) => {
  const navItems = [
    { icon: <User size={16} />, text: 'Profile' },
    { icon: <Settings size={16} />, text: 'Settings' },
    { icon: <LogOut size={16} />, text: 'Logout', className: 'text-red-500 hover:bg-red-100' },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 p-4 z-30 transition-transform duration-300 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'}`}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">AI Chat</h2>
        <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-700">
          Close
        </button>
      </div>

      <nav className="space-y-2">
        {navItems.map(({ icon, text, className }) => (
          <button
            key={text}
            className={`w-full text-left p-2 rounded flex items-center space-x-2 ${
              isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
            } ${className || ''}`}
          >
            {icon}
            <span>{text}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
