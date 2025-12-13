
import React, { useState } from 'react';
import { ViewState } from '../types';
import { Book, Skull, Terminal, Share2, Zap, Radio, Menu, X } from 'lucide-react';

interface SidebarProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onChangeView }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'HOME', label: './README.md', icon: Book, desc: 'Local Database' },
    { id: 'LIVE', label: './LIVE_FEED.log', icon: Radio, desc: 'GitHub Stream' },
    { id: 'CONTRIBUTING', label: './CONTRIBUTING.sh', icon: Share2, desc: 'Inject Chaos' },
    { id: 'ABOUT', label: './WHOAMI.exe', icon: Skull, desc: 'Manifesto' },
  ];

  const handleNavClick = (view: ViewState) => {
    onChangeView(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Header Bar */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50 bg-void-black border-b-2 border-white p-4 flex justify-between items-center shadow-hard">
        <div className="flex items-center gap-2 text-acid-green">
          <Terminal size={20} strokeWidth={3} />
          <span className="font-bold font-sans tracking-tighter uppercase">BolhaDev</span>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white hover:text-acid-green transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Container */}
      <aside className={`
        fixed inset-0 z-40 bg-void-black/95 backdrop-blur-md transition-transform duration-300 ease-in-out md:translate-x-0
        md:relative md:w-72 md:bg-void-black md:border-r-2 md:border-white md:flex md:flex-col md:h-screen md:backdrop-blur-none
        ${isMobileMenuOpen ? 'translate-x-0 pt-20' : '-translate-x-full md:pt-0'}
      `}>
        
        {/* Desktop Header (Hidden on Mobile) */}
        <div className="hidden md:block p-6 border-b-2 border-white bg-acid-green text-black selection:bg-black selection:text-white">
          <div className="flex items-center gap-3 mb-2">
            <Terminal size={28} strokeWidth={3} />
            <h1 className="font-bold text-2xl tracking-tighter uppercase font-sans">
              Bolha<span className="italic">Dev</span>
            </h1>
          </div>
          <p className="text-xs font-mono font-bold border-t border-black pt-2 flex justify-between">
            <span>MEM: 64KB</span>
            <span>V.0.6.6.6</span>
          </p>
        </div>

        <nav className="flex-1 p-4 space-y-4 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id as ViewState)}
              className={`w-full group relative flex items-center gap-3 px-4 py-4 border-2 transition-all font-mono font-bold text-sm uppercase text-left ${
                currentView === item.id
                  ? 'bg-white text-black border-white shadow-hard-purple translate-x-[-2px] translate-y-[-2px]'
                  : 'bg-transparent text-gray-500 border-gray-800 hover:border-acid-green hover:text-acid-green hover:shadow-hard-green'
              }`}
            >
              <div className="relative">
                <item.icon size={20} className={currentView === item.id ? "animate-pulse" : ""} />
                {currentView === item.id && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-error-red rounded-full animate-ping" />
                )}
              </div>
              <div className="flex flex-col">
                <span>{item.label}</span>
                <span className="text-[10px] opacity-60 font-normal normal-case">{item.desc}</span>
              </div>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t-2 border-white mt-auto">
          <div className="bg-gray-900 p-4 border border-gray-700 font-mono text-[10px] text-acid-green space-y-1">
            <div className="flex items-center gap-2 mb-2 text-white border-b border-gray-700 pb-1">
              <Zap size={12} className="fill-current" />
              <span className="font-bold uppercase">System Diagnostic</span>
            </div>
            <p>> CAFFEINE_LEVEL: CRITICAL</p>
            <p>> DRAMA_DETECTOR: <span className="text-red-500 bg-red-900/30 px-1 animate-pulse">OVER 9000</span></p>
            <p>> DEPLOY: GITHUB_PAGES</p>
            <p>> VIEW: {currentView}</p>
          </div>
        </div>
      </aside>
    </>
  );
};
