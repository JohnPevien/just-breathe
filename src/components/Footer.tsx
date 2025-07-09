import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-4 bg-white shadow-xs mt-auto">
      <div className="container max-w-6xl mx-auto">
        <p className="text-center text-gray-600">
          © {new Date().getFullYear()} Just Breathe.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
