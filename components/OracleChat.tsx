import React, { useState, useRef, useEffect } from 'react';
import { chatWithArchivist } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Send, Bot, User, Loader2 } from 'lucide-react';

export const OracleChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Olá. Eu sou o Arquivista. Eu vi linguagens nascerem e frameworks morrerem em questão de semanas. O que você quer saber sobre a insignificância da sua stack?',
      timestamp: Date.now()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setLoading(true);

    try {
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      const response = await chatWithArchivist(history, userMsg.text);
      
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: response || 'O sistema crashou de tanto cringe.',
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col bg-git-header border border-git-border rounded-lg overflow-hidden">
      <div className="p-4 border-b border-git-border bg-git-bg flex items-center justify-between">
         <h2 className="font-mono font-bold text-white flex items-center gap-2">
           <Bot className="text-git-accent" />
           Senior_Architect_AI.exe
         </h2>
         <span className="text-xs text-green-500 font-mono animate-pulse">● Online</span>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth" ref={scrollRef}>
        {messages.map((msg) => (
          <div key={msg.id} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-git-accent text-white' : 'bg-git-border text-gray-300'}`}>
              {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
            </div>
            <div className={`max-w-[80%] rounded-lg p-3 text-sm whitespace-pre-wrap ${
              msg.role === 'user' 
                ? 'bg-git-accent/10 border border-git-accent/30 text-white' 
                : 'bg-git-bg border border-git-border text-gray-300'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
           <div className="flex gap-3">
             <div className="w-8 h-8 rounded-full bg-git-border text-gray-300 flex items-center justify-center">
               <Bot size={16} />
             </div>
             <div className="bg-git-bg border border-git-border rounded-lg p-3 flex items-center gap-2">
               <Loader2 className="animate-spin text-git-accent" size={16} />
               <span className="text-xs text-gray-400 font-mono">Consultando stack overflow...</span>
             </div>
           </div>
        )}
      </div>

      <div className="p-4 bg-git-bg border-t border-git-border">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Pergunte sobre tabs vs spaces..."
            className="flex-1 bg-git-header border border-git-border rounded-md px-4 py-2 text-white focus:outline-none focus:border-git-accent font-mono text-sm"
          />
          <button 
            onClick={handleSend}
            disabled={loading || !inputValue.trim()}
            className="bg-git-success hover:bg-green-700 text-white p-2 rounded-md disabled:opacity-50 transition-colors"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};