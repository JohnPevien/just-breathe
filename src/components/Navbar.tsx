import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-center w-full px-4 py-3 bg-white shadow-xs">
      <div className="container max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-gray-600 font-bold">JB</span>
          </div>
          <span className="ml-3 text-xl font-bold">Just Breathe</span>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">Box Breathing</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">4-7-8 Breathing</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
