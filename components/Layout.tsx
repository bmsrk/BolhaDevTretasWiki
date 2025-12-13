import React from 'react';
import { Sidebar } from './Sidebar';
import { ViewState } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentView, onChangeView }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen font-sans overflow-x-hidden selection:bg-acid-green selection:text-black">
      <Sidebar currentView={currentView} onChangeView={onChangeView} />
      
      <main className="flex-1 p-4 md:p-12 overflow-y-auto h-screen relative bg-grid-pattern">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};