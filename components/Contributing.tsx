import React from 'react';
import { Github, AlertTriangle, ArrowRight } from 'lucide-react';

export const Contributing: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-fade-in pb-12">
      <div className="border-b-4 border-acid-green pb-6">
        <h2 className="text-5xl md:text-7xl font-sans font-black text-white mb-4 uppercase tracking-tighter">
          CONTRIBUTING<span className="text-acid-green">.sh</span>
        </h2>
        <p className="font-mono text-acid-purple text-lg">
          // COMO INJETAR CAOS NO SISTEMA
        </p>
      </div>

      {/* ASCII ARTISH BANNER */}
      <div className="font-mono text-[10px] md:text-xs leading-none text-gray-600 select-none overflow-hidden whitespace-pre">
        {`
   _____ ____  _   _ _______ _____  _____ ____  _    _ _______ ______ 
  / ____/ __ \\| \\ | |__   __|  __ \\|_   _|  _ \\| |  | |__   __|  ____|
 | |   | |  | |  \\| |  | |  | |__) | | | | |_) | |  | |  | |  | |__   
 | |   | |  | | . \` |  | |  |  _  /  | | |  _ <| |  | |  | |  |  __|  
 | |___| |__| | |\\  |  | |  | | \\ \\ _| |_| |_) | |__| |  | |  | |____ 
  \\_____\\____/|_| \\_|  |_|  |_|  \\_\\_____|____/ \\____/   |_|  |______|
        `}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white text-black p-8 border-4 border-white shadow-hard-green">
            <h3 className="font-black text-3xl mb-6 uppercase flex items-center gap-2">
                <Github size={32} />
                Método Preguiçoso
            </h3>
            <p className="font-mono mb-6 font-bold">
                Não quer abrir PR? Tem medo de conflito no Git? Acha que `git rebase` é feitiçaria? 
            </p>
            <p className="font-mono mb-6">
                Usamos a API do GitHub para ler ISSUES como se fossem posts de blog. É tecnologia de ponta (gambiara).
            </p>
            
            <ol className="list-decimal list-inside space-y-4 font-mono text-sm border-t-2 border-black pt-4">
                <li className="pl-2">
                    Vá para a aba <strong>ISSUES</strong> do repositório.
                </li>
                <li className="pl-2">
                    Crie uma Issue com o título da Treta.
                </li>
                <li className="pl-2">
                    Adicione a label <span className="bg-black text-white px-1">treta</span> (Obrigatório).
                </li>
                <li className="pl-2">
                    Escreva o Post-Mortem no corpo (Markdown aceito).
                </li>
                <li className="pl-2">
                    Adicione labels de severidade ex: <span className="bg-black text-white px-1">severity:HIGH</span>.
                </li>
            </ol>

            <a 
                href="https://github.com/bmsrk/BolhaDevTretasWiki/issues/new" 
                target="_blank" 
                rel="noreferrer"
                className="mt-8 block w-full bg-acid-green text-black font-black uppercase text-center py-4 border-2 border-black hover:bg-black hover:text-white hover:shadow-[4px_4px_0px_0px_#ccff00] transition-all"
            >
                Abrir Issue Agora {'->'}
            </a>
        </div>

        <div className="space-y-8">
            <div className="bg-void-black border-2 border-gray-700 p-6 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                    <AlertTriangle className="text-error-red" size={48} />
                 </div>
                 <h4 className="text-acid-purple font-bold font-mono mb-2 uppercase">// Regras de Engajamento</h4>
                 <ul className="space-y-2 font-mono text-sm text-gray-400">
                    <li>- Sem doxxing (censura nomes se não for figura pública).</li>
                    <li>- Tem que ser engraçado ou trágico.</li>
                    <li>- Se for fake news, o Admin vai te banir.</li>
                 </ul>
            </div>

            <div className="bg-void-black border-2 border-gray-700 p-6">
                 <h4 className="text-acid-green font-bold font-mono mb-2 uppercase">// Como funciona a mágica?</h4>
                 <div className="bg-black p-4 border border-gray-800 font-mono text-xs text-green-500 overflow-x-auto">
                    <p>GET https://api.github.com/repos/bmsrk/BolhaDevTretasWiki/issues</p>
                    <p className="text-gray-500">...fetching</p>
                    <p className="text-gray-500">...parsing markdown</p>
                    <p className="text-gray-500">...injecting sarcasm</p>
                    <p className="text-white">STATUS: 200 OK (Talvez)</p>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};