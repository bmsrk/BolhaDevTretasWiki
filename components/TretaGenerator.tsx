import React, { useState } from 'react';
import { generateWikiEntry } from '../services/geminiService';
import { TretaSeverity, WikiEntry } from '../types';
import { Loader2, Save, Wand2 } from 'lucide-react';

interface TretaGeneratorProps {
  onSave: (entry: WikiEntry) => void;
  onCancel: () => void;
}

export const TretaGenerator: React.FC<TretaGeneratorProps> = ({ onSave, onCancel }) => {
  const [topic, setTopic] = useState('');
  const [context, setContext] = useState('');
  const [loading, setLoading] = useState(false);
  const [generatedEntry, setGeneratedEntry] = useState<Partial<WikiEntry> | null>(null);

  const handleGenerate = async () => {
    if (!topic) return;
    setLoading(true);
    try {
      const result = await generateWikiEntry(topic, context);
      setGeneratedEntry(result);
    } catch (e) {
      alert("O Arquivista estava tomando café e ignorou sua solicitação. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmSave = () => {
    if (generatedEntry && generatedEntry.title && generatedEntry.content) {
      const newEntry: WikiEntry = {
        id: crypto.randomUUID(),
        title: generatedEntry.title,
        content: generatedEntry.content,
        severity: (generatedEntry.severity as TretaSeverity) || TretaSeverity.MEDIUM,
        date: new Date().toISOString().split('T')[0],
        author: 'A Comunidade (via IA)',
        tags: generatedEntry.tags || ['caos', 'bolhadev'],
        likes: 0,
        source: 'LOCAL'
      };
      onSave(newEntry);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="border-b border-git-border pb-4">
        <h2 className="text-2xl font-bold text-white mb-2">Nova Issue (Treta)</h2>
        <p className="text-gray-400">Descreva o caos e deixe que o Arquivista documente para a posteridade.</p>
      </div>

      {!generatedEntry ? (
        <div className="space-y-4 bg-git-header p-6 rounded-lg border border-git-border">
          <div>
            <label className="block text-sm font-mono text-gray-300 mb-2">Título do Incidente</label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Ex: Primo Rico vs Devs, Vaga de R$1000 PJ..."
              className="w-full bg-git-bg border border-git-border rounded p-3 text-white focus:border-git-accent focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-mono text-gray-300 mb-2">Logs do Erro (Contexto/Fofoca)</label>
            <textarea
              value={context}
              onChange={(e) => setContext(e.target.value)}
              placeholder="Cole aqui os tweets, o print ou descreva o que aconteceu..."
              rows={5}
              className="w-full bg-git-bg border border-git-border rounded p-3 text-white focus:border-git-accent focus:outline-none resize-none"
            />
          </div>
          <div className="flex justify-end gap-3 pt-4">
            <button onClick={onCancel} className="px-4 py-2 text-gray-400 hover:text-white font-mono text-sm">
              git restore .
            </button>
            <button
              onClick={handleGenerate}
              disabled={loading || !topic}
              className="flex items-center gap-2 bg-git-success hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-2 rounded font-bold transition-colors"
            >
              {loading ? <Loader2 className="animate-spin" size={18} /> : <Wand2 size={18} />}
              {loading ? 'Compilando Drama...' : 'Gerar Relatório'}
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-6 animate-fade-in">
          <div className="bg-git-bg border border-git-border rounded-lg p-8 markdown-body">
             <div className="mb-6 border-b border-git-border pb-4">
               <span className="text-xs font-mono text-git-accent mb-2 block">PREVIEW DA WIKI</span>
               <h1 className="text-3xl font-bold text-white">{generatedEntry.title}</h1>
               <div className="mt-2 flex gap-2">
                 {generatedEntry.tags?.map(t => (
                   <span key={t} className="text-xs bg-git-header border border-git-border px-2 py-1 rounded text-gray-400">{t}</span>
                 ))}
               </div>
             </div>
             <div className="prose prose-invert prose-p:text-gray-300 prose-headings:text-white max-w-none font-sans whitespace-pre-line">
               {generatedEntry.content}
             </div>
          </div>

          <div className="flex justify-end gap-3">
             <button onClick={() => setGeneratedEntry(null)} className="px-4 py-2 text-gray-400 hover:text-white font-mono text-sm">
              Rejeitar Pull Request
            </button>
            <button
              onClick={handleConfirmSave}
              className="flex items-center gap-2 bg-git-accent hover:bg-blue-600 text-white px-6 py-2 rounded font-bold transition-colors"
            >
              <Save size={18} />
              Merge to Master (Salvar)
            </button>
          </div>
        </div>
      )}
    </div>
  );
};