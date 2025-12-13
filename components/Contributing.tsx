import React from 'react';
import { Github, AlertTriangle, ArrowRight, FileText, Tag, CheckSquare } from 'lucide-react';

export const Contributing: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-fade-in pb-12">
      <div className="border-b-4 border-acid-green pb-6">
        <h2 className="text-5xl md:text-7xl font-sans font-black text-white mb-4 uppercase tracking-tighter">
          CONTRIBUTING<span className="text-acid-green">.sh</span>
        </h2>
        <p className="font-mono text-acid-purple text-lg">
          // COMO INJETAR CAOS NO SISTEMA (GUIA COMPLETO)
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

      {/* QUICK START SECTION */}
      <div className="bg-gradient-to-br from-acid-green/10 to-transparent border-l-4 border-acid-green p-8">
        <h3 className="text-3xl font-black text-white mb-4 uppercase flex items-center gap-3">
          <Github size={32} />
          Quick Start: Método da Issue (Recomendado)
        </h3>
        <p className="font-mono text-gray-300 mb-6 text-lg">
          Não quer abrir PR? Tem medo de conflito no Git? Acha que <span className="text-acid-green">git rebase</span> é feitiçaria? 
          Use GitHub Issues - é literalmente só preencher um formulário.
        </p>
        <p className="font-mono text-gray-400 mb-4">
          Usamos a API do GitHub para ler <strong className="text-white">ISSUES</strong> como se fossem posts de blog. 
          É tecnologia de ponta (gambiarra aprovada pela NASA).
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* STEP BY STEP GUIDE */}
        <div className="lg:col-span-2 bg-white text-black p-8 border-4 border-white shadow-hard-green space-y-8">
            <h3 className="font-black text-4xl mb-6 uppercase flex items-center gap-2">
                <FileText size={36} />
                Passo a Passo Detalhado
            </h3>
            
            {/* STEP 1 */}
            <div className="border-l-4 border-black pl-6 space-y-3">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-black text-white px-3 py-1 font-black text-xl">1</span>
                <h4 className="font-black text-2xl">Acesse a página de Issues</h4>
              </div>
              <p className="font-mono text-sm">
                Vá para o repositório no GitHub e clique na aba <strong>Issues</strong>.
              </p>
              <a 
                href="https://github.com/bmsrk/BolhaDevTretasWiki/issues" 
                target="_blank" 
                rel="noreferrer"
                className="inline-block bg-black text-acid-green px-4 py-2 font-mono font-bold hover:bg-gray-800 transition-colors"
              >
                ir para Issues {'->'}
              </a>
            </div>

            {/* STEP 2 */}
            <div className="border-l-4 border-black pl-6 space-y-3">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-black text-white px-3 py-1 font-black text-xl">2</span>
                <h4 className="font-black text-2xl">Crie uma Nova Issue</h4>
              </div>
              <p className="font-mono text-sm">
                Clique no botão verde <strong>"New Issue"</strong> no canto superior direito.
              </p>
              <a 
                href="https://github.com/bmsrk/BolhaDevTretasWiki/issues/new" 
                target="_blank" 
                rel="noreferrer"
                className="inline-block bg-acid-green text-black px-4 py-2 font-mono font-bold hover:bg-black hover:text-white transition-colors border-2 border-black"
              >
                Criar Issue Agora {'->'}
              </a>
            </div>

            {/* STEP 3 */}
            <div className="border-l-4 border-black pl-6 space-y-3">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-black text-white px-3 py-1 font-black text-xl">3</span>
                <h4 className="font-black text-2xl">Escreva o Título</h4>
              </div>
              <p className="font-mono text-sm mb-2">
                O título deve ser <strong>descritivo e chamativo</strong>. Este será o título da treta no feed.
              </p>
              <div className="bg-gray-100 border-2 border-black p-3 font-mono text-sm space-y-1">
                <p className="text-green-700">✓ BOM: "O dia que o NPM quebrou a internet inteira"</p>
                <p className="text-green-700">✓ BOM: "Senior de 2 anos cagando regra sobre arquitetura"</p>
                <p className="text-red-700">✗ RUIM: "Treta"</p>
                <p className="text-red-700">✗ RUIM: "Issue #123"</p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="border-l-4 border-black pl-6 space-y-3">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-black text-white px-3 py-1 font-black text-xl">4</span>
                <h4 className="font-black text-2xl">Escreva o Conteúdo</h4>
              </div>
              <p className="font-mono text-sm mb-2">
                Use <strong>Markdown</strong> para formatar. O conteúdo deve contar a história completa.
              </p>
              <div className="bg-gray-900 border-2 border-black p-4 font-mono text-xs text-green-400 space-y-2 overflow-x-auto">
                <div className="text-gray-500">{'## Contexto'}</div>
                <div className="text-white">Explique o que aconteceu, quando e onde.</div>
                <div className="text-gray-500 mt-3">{'## A Treta'}</div>
                <div className="text-white">Descreva o conflito, as reações, os memes.</div>
                <div className="text-gray-500 mt-3">{'## Veredito'}</div>
                <div className="text-white">Sua opinião ou conclusão sobre o caso.</div>
                <div className="text-gray-500 mt-3">{'---'}</div>
                <div className="text-gray-500">{'**Links relacionados:**'}</div>
                <div className="text-white">- [Tweet original](URL)</div>
                <div className="text-white">- [Discussão no Reddit](URL)</div>
              </div>
              <p className="font-mono text-xs text-gray-700 mt-2">
                💡 Dica: Veja os posts de exemplo clicando em "README.md" no menu (banco de dados local) para ver a estrutura completa.
              </p>
            </div>

            {/* STEP 5 */}
            <div className="border-l-4 border-acid-green pl-6 space-y-3 bg-acid-green/10 -mx-8 px-8 py-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-acid-green text-black px-3 py-1 font-black text-xl">5</span>
                <h4 className="font-black text-2xl">Adicione Labels (OBRIGATÓRIO)</h4>
              </div>
              <p className="font-mono text-sm mb-3">
                As labels são <strong className="bg-black text-white px-1">essenciais</strong> para que sua issue apareça no feed e seja categorizada corretamente.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h5 className="font-bold font-mono mb-2 flex items-center gap-2">
                    <CheckSquare size={16} />
                    Label Obrigatória:
                  </h5>
                  <div className="bg-black text-acid-green px-3 py-2 font-mono text-sm inline-block border-2 border-acid-green">
                    treta
                  </div>
                  <p className="text-xs font-mono mt-1 text-gray-700">
                    Sem essa label, sua issue NÃO aparecerá no LIVE_FEED.log
                  </p>
                </div>

                <div>
                  <h5 className="font-bold font-mono mb-2 flex items-center gap-2">
                    <CheckSquare size={16} />
                    Label de Severidade (Recomendado):
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-400 text-black px-2 py-1 text-xs font-mono border border-black">severity:LOW</span>
                    <span className="bg-yellow-400 text-black px-2 py-1 text-xs font-mono border border-black">severity:MEDIUM</span>
                    <span className="bg-orange-500 text-black px-2 py-1 text-xs font-mono border border-black">severity:HIGH</span>
                    <span className="bg-red-500 text-white px-2 py-1 text-xs font-mono border border-black">severity:CRITICAL</span>
                    <span className="bg-red-700 text-white px-2 py-1 text-xs font-mono border border-black">severity:NUCLEAR</span>
                  </div>
                  <p className="text-xs font-mono mt-1 text-gray-700">
                    Escolha uma que represente a gravidade da treta.
                  </p>
                </div>

                <div>
                  <h5 className="font-bold font-mono mb-2 flex items-center gap-2">
                    <Tag size={16} />
                    Tags Adicionais (Opcional):
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white text-black px-2 py-1 text-xs font-mono border border-black">javascript</span>
                    <span className="bg-white text-black px-2 py-1 text-xs font-mono border border-black">backend</span>
                    <span className="bg-white text-black px-2 py-1 text-xs font-mono border border-black">frontend</span>
                    <span className="bg-white text-black px-2 py-1 text-xs font-mono border border-black">burnout</span>
                    <span className="bg-white text-black px-2 py-1 text-xs font-mono border border-black">clean-code</span>
                  </div>
                  <p className="text-xs font-mono mt-1 text-gray-700">
                    Adicione quantas quiser para categorizar melhor. Use kebab-case (palavras-separadas-por-hifen).
                  </p>
                </div>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="border-l-4 border-black pl-6 space-y-3">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-black text-white px-3 py-1 font-black text-xl">6</span>
                <h4 className="font-black text-2xl">Submeta a Issue</h4>
              </div>
              <p className="font-mono text-sm">
                Clique em <strong>"Submit new issue"</strong>. Sua treta aparecerá no <span className="text-acid-green">LIVE_FEED.log</span> em alguns segundos!
              </p>
              <p className="font-mono text-xs text-gray-700">
                ⚡ A API do GitHub é consultada em tempo real. Não precisa fazer nada além de criar a issue.
              </p>
            </div>

            {/* CTA BUTTON */}
            <div className="pt-4 border-t-4 border-black">
              <a 
                href="https://github.com/bmsrk/BolhaDevTretasWiki/issues/new" 
                target="_blank" 
                rel="noreferrer"
                className="block w-full bg-acid-green text-black font-black uppercase text-center py-5 text-xl border-4 border-black hover:bg-black hover:text-white hover:shadow-[8px_8px_0px_0px_#ccff00] transition-all"
              >
                🚀 Criar Minha Primeira Treta {'->'}
              </a>
            </div>
        </div>

        {/* SIDEBAR INFO */}
        <div className="space-y-6">
            <div className="bg-void-black border-2 border-gray-700 p-6 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                    <AlertTriangle className="text-error-red" size={48} />
                 </div>
                 <h4 className="text-acid-purple font-bold font-mono mb-2 uppercase">// Regras de Engajamento</h4>
                 <ul className="space-y-2 font-mono text-sm text-gray-400">
                    <li>- Sem doxxing (censura nomes se não for figura pública).</li>
                    <li>- Tem que ser engraçado ou trágico.</li>
                    <li>- Se for fake news, o Admin vai te banir.</li>
                    <li>- Markdown é seu amigo (use headings, listas, etc).</li>
                    <li>- Adicione links para fontes quando possível.</li>
                 </ul>
            </div>

            <div className="bg-void-black border-2 border-gray-700 p-6">
                 <h4 className="text-acid-green font-bold font-mono mb-2 uppercase">// Como funciona a mágica?</h4>
                 <div className="bg-black p-4 border border-gray-800 font-mono text-xs text-green-500 overflow-x-auto">
                    <p>GET https://api.github.com/repos/bmsrk/BolhaDevTretasWiki/issues</p>
                    <p className="text-gray-500">...fetching</p>
                    <p className="text-gray-500">...parsing markdown</p>
                    <p className="text-gray-500">...filtering labels</p>
                    <p className="text-gray-500">...injecting sarcasm</p>
                    <p className="text-white">STATUS: 200 OK (Talvez)</p>
                 </div>
            </div>

            <div className="bg-acid-green/10 border-2 border-acid-green p-6">
                 <h4 className="text-acid-green font-bold font-mono mb-2 uppercase">💡 Dica Pro</h4>
                 <p className="text-gray-300 font-mono text-sm">
                    Quer ver exemplos prontos? Clique em <strong className="text-white">README.md</strong> no menu 
                    para ver os posts do banco de dados local. Eles mostram a estrutura ideal que sua issue deve ter!
                 </p>
            </div>

            <div className="bg-void-black border-2 border-gray-700 p-6">
                 <h4 className="text-white font-bold font-mono mb-3 uppercase">📚 Exemplo de Issue</h4>
                 <div className="space-y-2 font-mono text-xs">
                    <div className="text-gray-500">Title:</div>
                    <div className="bg-gray-800 p-2 text-white">O dia que o NPM quebrou</div>
                    
                    <div className="text-gray-500 mt-3">Labels:</div>
                    <div className="flex flex-wrap gap-1">
                      <span className="bg-acid-green text-black px-2 py-0.5">treta</span>
                      <span className="bg-orange-500 text-black px-2 py-0.5">severity:HIGH</span>
                      <span className="bg-white text-black px-2 py-0.5">javascript</span>
                      <span className="bg-white text-black px-2 py-0.5">npm</span>
                    </div>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};