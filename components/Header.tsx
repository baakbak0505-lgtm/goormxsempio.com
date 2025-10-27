
import React, { useState, useEffect } from 'react';
import { SempioLogo, GoormLogo } from './Icons';

const SempioGoormLogo: React.FC = () => (
    <div className="flex items-center space-x-3">
        <SempioLogo className="h-5" />
        <span className="text-slate-300 font-light text-xl">|</span>
        <GoormLogo className="h-5" />
    </div>
);


const Header: React.FC<{ onContactClick: () => void }> = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-md border-b border-slate-200/60' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <SempioGoormLogo />
        <button
          onClick={onContactClick}
          className="bg-indigo-800 text-white font-semibold px-4 py-2 rounded-lg hover:bg-indigo-900 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 shadow-sm hover:shadow-md"
        >
          상담 신청
        </button>
      </div>
    </header>
  );
};

export default Header;
