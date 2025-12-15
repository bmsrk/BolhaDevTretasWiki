import React, { useState } from 'react';
import { TretaCard } from './TretaCard';
import { WikiEntry, ViewState } from '../types';
import { Search, X, Database, AlertTriangle } from 'lucide-react';

interface TretaListProps {
  entries: WikiEntry[];
  source: 'LOCAL' | 'GITHUB';
  onOpenEntry: (entry: WikiEntry) => void;
  onTagClick: (tag: string, fromEntryView?: boolean) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const TretaList: React.FC<TretaListProps> = ({ 
  entries, 
  source, 
  onOpenEntry, 
  onTagClick,
  searchTerm,
  setSearchTerm
}) => {
  const isLive = source === 'GITHUB';

  const filteredEntries = entries.filter(t => 
    t.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    t.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-12 pt-16 md:pt-0 animate-fade-in">
      {/* Simulation Warning Banner */}
      {!isLive && (
        <div className="bg-stripes p-4 border-2 border-acid-purple flex items-start gap-4">
          <Database className="text-acid-purple shrink-0 mt-1" size={24} />
          <div>
            <h3 className="text-acid-purple font-black uppercase text-lg">Modo de Simulação</h3>
            <p className="text-gray-400 font-mono text-sm">
              Você está visualizando o <span className="text-white">DATABASE LOCAL (MOCK)</span>. 
              Estes são os "Greatest Hits" compilados para demonstração. 
              <br/>
              Para drama fresco e orgânico, clique em <strong className="text-acid-green">LIVE_FEED.log</strong> no menu.
            </p>
          </div>
        </div>
      )}

      {/* Header & Search */}
      <div className={`flex flex-col md:flex-row justify-between items-end gap-6 border-b-4 ${isLive ? 'border-acid-green' : 'border-white'} pb-6`}>
        <div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-2 hover-glitch cursor-default break-words">
            {isLive ? 'LIVE_FEED' : 'README'}
            <span className={isLive ? 'text-white' : 'text-acid-green'}>{isLive ? '.log' : '.md'}</span>
          </h2>
          <div className="flex items-center gap-2 text-gray-400 font-mono text-xs md:text-sm uppercase tracking-widest">
            {isLive ? (
              <span className="flex items-center gap-2 text-acid-green animate-pulse">
                <div className="w-2 h-2 bg-acid-green rounded-full"></div>
                CONECTADO API GITHUB
              </span>
            ) : (
              <span className="flex items-center gap-2 text-gray-500">
                <Database size={12} />
                DATABASE LOCAL
              </span>
            )}
          </div>
        </div>
        
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-black" size={20} />
          <input 
            type="text" 
            placeholder={isLive ? "FILTRAR PACOTES..." : "GREP 'DRAMA'..."}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full bg-white border-2 border-white rounded-none pl-10 pr-10 py-3 text-sm font-mono font-bold text-black focus:outline-none focus:shadow-hard-green focus:border-acid-green placeholder-gray-500 transition-all ${isLive ? 'focus:shadow-hard-red focus:border-red-500' : ''}`}
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-black hover:text-error-red"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Tag Results Indicator */}
      {searchTerm && (
        <div className="flex items-center gap-2 font-mono text-sm text-gray-400">
          <span>Filtrando por:</span>
          <span className="bg-acid-green text-black px-2 py-0.5 font-bold flex items-center gap-1">
            {searchTerm}
            <button onClick={() => setSearchTerm('')} className="hover:text-error-red"><X size={12}/></button>
          </span>
          <span className="ml-2 text-xs opacity-50">// {filteredEntries.length} resultados</span>
        </div>
      )}

      {/* Empty States */}
      {isLive && filteredEntries.length === 0 && !searchTerm && (
        <div className="bg-gray-900/50 border-2 border-dashed border-gray-700 p-8 text-center font-mono space-y-4">
            <AlertTriangle className="mx-auto text-yellow-500 mb-2" size={48} />
            <h3 className="text-xl text-white font-bold">NENHUM SINAL DE VIDA DETECTADO</h3>
            <p className="text-gray-400 text-sm">
              A comunidade está codando em vez de brigar? Impossível.<br/>
              Verifique se o repo tem issues abertas.
            </p>
            <button onClick={() => window.open('https://github.com/bmsrk/BolhaDevTretasWiki/issues', '_blank')} className="text-acid-green hover:underline">
              Checar GitHub {'->'}
            </button>
        </div>
      )}

      {filteredEntries.length === 0 && searchTerm && (
        <div className="col-span-full py-32 text-center border-4 border-dashed border-gray-800 rounded-none bg-gray-900/50">
          <p className="font-mono text-acid-purple text-xl mb-4">ERROR 404: TRETA_NOT_FOUND</p>
          <p className="text-sm font-mono text-gray-500 mb-6">
            A busca por "{searchTerm}" não retornou nada. <br/>
            Talvez você deva criar o caos você mesmo?
          </p>
          <button onClick={() => setSearchTerm('')} className="bg-white text-black px-4 py-2 font-mono font-bold hover:bg-acid-green">
            RESET_SEARCH()
          </button>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEntries.map(treta => (
            <TretaCard 
              key={treta.id} 
              entry={treta} 
              onClick={onOpenEntry}
              onTagClick={(tag) => onTagClick(tag)}
            />
          ))}
      </div>
    </div>
  );
};