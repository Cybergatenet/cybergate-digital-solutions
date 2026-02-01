// src/components/common/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-royal-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold">
              CYBERGATE<br/>DIGITAL SOLUTIONS
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-royal-blue-200 transition">Home</a>
            <a href="/programs" className="hover:text-royal-blue-200 transition">Programs</a>
            <a href="/accessories" className="hover:text-royal-blue-200 transition">Accessories</a>
            <a href="/about" className="hover:text-royal-blue-200 transition">About Us</a>
            <a href="/contact" className="hover:text-royal-blue-200 transition">Contact</a>
            <a href="/register" className="bg-white text-royal-blue-800 px-4 py-2 rounded-lg hover:bg-royal-blue-100 transition">
              Register Now
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;