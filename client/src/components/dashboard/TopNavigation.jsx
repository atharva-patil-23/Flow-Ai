import React, { useState } from 'react';
import { Search, Bell, Plus, Menu, MessageSquare, User, Settings, LogOut } from 'lucide-react';

const TopNavigation = ({
  onToggleSidebar,
  onToggleRightPanel,
  onNewTask,
}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleNewTask = () => {
    if (onNewTask) {
      onNewTask();
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      {/* Left section */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
        >
          <Menu className="h-5 w-5 text-black" />
        </button>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search task..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="pl-10 pr-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent w-64"
          />
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-2">
        <button
          onClick={handleNewTask}
          className="flex items-center gap-2 bg-black hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span className="hidden sm:inline">New Task</span>
        </button>

        <button
          onClick={onToggleRightPanel}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <MessageSquare className="h-5 w-5 text-black" />
        </button>

        <div className="relative">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="h-5 w-5 text-black" />
          </button>
          {/* <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            
          </span> */}
        </div>

        {/* User dropdown */}
        <div className="relative">
          <button
            className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => {
             
            }}
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-black" />
            </div>
        
          </button>

          
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50 hidden">
            <div className="px-4 py-2 border-b border-gray-100">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-500">john@example.com</p>
            </div>
            <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center gap-2">
              <User className="h-4 w-4" />
              Profile
            </button>
            <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </button>
            <div className="border-t border-gray-100 mt-1 pt-1">
              <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center gap-2 text-red-600">
                <LogOut className="h-4 w-4" />
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;