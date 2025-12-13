import React from 'react';
import { TretaSeverity, WikiEntry } from '../types';
import { Hash, ExternalLink } from 'lucide-react';

interface TretaCardProps {
  entry: WikiEntry;
  onClick: (entry: WikiEntry) => void;
  onTagClick: (tag: string) => void;
}

export const TretaCard: React.FC<TretaCardProps> = ({ entry, onClick, onTagClick }) => {
  const getSeverityStyles = (severity: string) => {
    switch (severity) {
      case TretaSeverity.NUCLEAR: return 'bg-red-500 text-black border-black shadow-hard';
      case TretaSeverity.CRITICAL: return 'bg-orange-500 text-black border-black shadow-hard';
      case TretaSeverity.HIGH: return 'bg-acid-green text-black border-acid-green shadow-hard text-black';
      default: return 'bg-transparent text-gray-400 border-gray-700';
    }
  };

  const handleTagClickInternal = (e: React.MouseEvent, tag: string) => {
    e.stopPropagation();
    onTagClick(tag);
  };

  return (
    <div 
      onClick={() => onClick(entry)}
      className="relative bg-void-black border-2 border-white p-6 cursor-pointer group transition-all duration-200 
                 hover:-translate-y-1 hover:border-acid-green 
                 hover:shadow-[4px_4px_0px_0px_#ccff00,0_0_20px_rgba(204,255,0,0.3)]
                 flex flex-col h-full overflow-hidden"
    >
      {/* Tape Effect - Sticky note vibe */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white/20 w-16 h-6 rotate-[-2deg] backdrop-blur-sm z-20"></div>

      {/* Glitch Background Overlay - visible on hover */}
      <div className="absolute inset-0 bg-acid-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-100 pointer-events-none z-0"></div>
      
      {/* Content Container - shakes/glitches on hover using the global @keyframes glitch */}
      <div className="relative z-10 flex flex-col h-full group-hover:animate-[glitch_0.2s_ease-in-out_infinite]">
        
        <div className="flex justify-between items-start mb-4 border-b border-dashed border-gray-700 pb-2 group-hover:border-acid-green/50 transition-colors">
          <div className="font-mono text-xs text-acid-purple flex flex-col">
            <span className="font-bold">ID: {entry.id}</span>
            <span className="text-gray-500 group-hover:text-gray-400">{entry.date}</span>
          </div>
          <div className={`text-[10px] px-2 py-1 font-mono uppercase font-black border ${getSeverityStyles(entry.severity)}`}>
             {Object.keys(TretaSeverity).find(key => TretaSeverity[key as keyof typeof TretaSeverity] === entry.severity) || 'BUG'}
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-sans font-bold text-white mb-3 leading-tight group-hover:text-acid-green transition-colors uppercase">
          {entry.title}
        </h3>

        <div className="flex items-center gap-2 mb-4 font-mono text-xs text-gray-500">
          <span className="bg-gray-800 px-1 text-white group-hover:bg-acid-green group-hover:text-black transition-colors">USER:</span> {entry.author}
        </div>

        <p className="text-sm text-gray-300 line-clamp-3 mb-6 font-mono border-l-2 border-acid-purple pl-3 opacity-80 group-hover:opacity-100 group-hover:border-acid-green transition-all">
          {entry.content.substring(0, 150).replace(/[#*]/g, '')}...
        </p>

        <div className="mt-auto pt-4 border-t-2 border-white group-hover:border-acid-green transition-colors flex justify-between items-end">
          <div className="flex flex-wrap gap-2">
            {entry.tags.map(tag => (
              <button 
                key={tag} 
                onClick={(e) => handleTagClickInternal(e, tag)}
                className="flex items-center gap-1 text-[10px] font-bold text-black bg-white px-1 py-0.5 border border-black hover:bg-acid-green hover:scale-105 transition-transform"
              >
                <Hash size={8} />
                {tag.toUpperCase()}
              </button>
            ))}
          </div>
          <ExternalLink size={16} className="text-white group-hover:text-acid-green" />
        </div>
      </div>
    </div>
  );
};