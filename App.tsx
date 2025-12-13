import React, { useState, useEffect } from 'react';
import { ViewState, WikiEntry } from './types';
import { fetchTretasFromGitHub, getStaticTretas } from './services/githubService';

// Components
import { Layout } from './components/Layout';
import { Landing } from './components/Landing';
import { TretaList } from './components/TretaList';
import { Contributing } from './components/Contributing';
import { About } from './components/About';
import { MarkdownRenderer } from './components/MarkdownRenderer';

// Icons
import { ArrowLeft, Tag, Github, Radio, Database } from 'lucide-react';

const App: React.FC = () => {
  // Navigation State
  const [view, setView] = useState<ViewState>('LANDING');
  const [selectedEntry, setSelectedEntry] = useState<WikiEntry | null>(null);

  // Data State
  const [staticTretas, setStaticTretas] = useState<WikiEntry[]>([]);
  const [liveTretas, setLiveTretas] = useState<WikiEntry[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Pre-fetch data on mount
  useEffect(() => {
    const initData = async () => {
      setStaticTretas(getStaticTretas());
      const liveData = await fetchTretasFromGitHub();
      setLiveTretas(liveData);
    };
    initData();
  }, []);

  const handleOpenEntry = (entry: WikiEntry) => {
    setSelectedEntry(entry);
    setView('WIKI_ENTRY');
  };

  const handleTagClick = (tag: string) => {
    setSearchTerm(tag);
    if (view === 'WIKI_ENTRY') {
      setView(selectedEntry?.source === 'GITHUB' ? 'LIVE' : 'HOME');
    }
  };

  // If we are on Landing page, show it without layout
  if (view === 'LANDING') {
    return <Landing onEnter={() => setView('HOME')} />;
  }

  return (
    <Layout currentView={view} onChangeView={setView}>
      {view === 'HOME' && (
        <TretaList 
          entries={staticTretas} 
          source="LOCAL" 
          onOpenEntry={handleOpenEntry} 
          onTagClick={handleTagClick}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      )}

      {view === 'LIVE' && (
        <TretaList 
          entries={liveTretas} 
          source="GITHUB" 
          onOpenEntry={handleOpenEntry} 
          onTagClick={handleTagClick}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      )}

      {view === 'CONTRIBUTING' && <Contributing />}
      
      {view === 'ABOUT' && <About />}

      {view === 'WIKI_ENTRY' && selectedEntry && (
         <div className="max-w-4xl mx-auto animate-fade-in pb-20 pt-16 md:pt-0">
          <button 
            onClick={() => setView(selectedEntry.source === 'GITHUB' ? 'LIVE' : 'HOME')} 
            className="flex items-center gap-2 text-acid-green hover:text-white mb-8 font-mono text-sm group border-b border-transparent hover:border-white w-fit pb-1"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            cd ..
          </button>
          
          <div className="bg-void-black border-2 border-white shadow-hard relative overflow-hidden">
             {/* Header Pattern */}
             <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${selectedEntry.source === 'GITHUB' ? 'from-acid-green via-blue-500 to-white' : 'from-acid-green via-acid-purple to-white'}`}></div>
             
             <div className="p-8 md:p-12 border-b-2 border-white bg-[#0a0a0a]">
               <div className="flex flex-wrap gap-3 mb-6">
                  <span className={`flex items-center gap-1 text-xs font-mono font-bold text-black px-2 py-1 border border-black ${selectedEntry.source === 'GITHUB' ? 'bg-acid-green' : 'bg-acid-purple text-white'}`}>
                     {selectedEntry.source === 'GITHUB' ? <Radio size={12} className="animate-pulse" /> : <Database size={12} />}
                     {selectedEntry.source === 'GITHUB' ? 'LIVE_STREAM' : 'SIMULATION_MODE'}
                  </span>
                  {selectedEntry.tags.map(tag => (
                    <button 
                      key={tag} 
                      onClick={() => handleTagClick(tag)}
                      className="flex items-center gap-1 text-xs font-mono font-bold bg-white text-black px-2 py-1 border border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.5)] hover:bg-acid-green transition-colors"
                    >
                      <Tag size={10} />
                      {tag.toUpperCase()}
                    </button>
                  ))}
               </div>
               <h1 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter leading-none break-words">
                 {selectedEntry.title}
               </h1>
               <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm font-mono text-gray-400 mt-6 border-l-4 border-acid-green pl-4">
                 <span>INITIATOR: <span className="text-white">{selectedEntry.author}</span></span>
                 <span className="hidden md:inline">//</span>
                 <span>TIMESTAMP: {selectedEntry.date}</span>
               </div>
             </div>

             <div className="p-8 md:p-12">
                <MarkdownRenderer content={selectedEntry.content} />
             </div>

             <div className="bg-gray-900 p-4 border-t-2 border-white flex justify-between items-center text-xs font-mono text-acid-green">
                <div className="flex gap-4">
                  {selectedEntry.prLink && (
                    <a href={selectedEntry.prLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline hover:text-white">
                       <Github size={14} />
                       VIEW SOURCE (GITHUB)
                    </a>
                  )}
                </div>
                <div className="uppercase font-bold tracking-widest">
                   SEV: {selectedEntry.severity}
                </div>
             </div>
          </div>
       </div>
      )}
    </Layout>
  );
};

export default App;
