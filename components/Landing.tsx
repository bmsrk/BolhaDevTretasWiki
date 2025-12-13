import React, { useState } from 'react';
import { Terminal, Database, ShieldAlert, ChevronRight, Cpu } from 'lucide-react';

interface LandingProps {
  onEnter: () => void;
}

export const Landing: React.FC<LandingProps> = ({ onEnter }) => {
  const [booting, setBooting] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  const handleEnter = async () => {
    setBooting(true);
    const bootSequence = [
      "INITIALIZING KERNEL...",
      "MOUNTING /dev/null...",
      "LOADING SARCASM MODULES...",
      "BYPASSING HR FILTERS...",
      "CONNECTING TO BOLHADEV NETWORK...",
      "ACCESS GRANTED."
    ];

    for (let i = 0; i < bootSequence.length; i++) {
      setLogs(prev => [...prev, bootSequence[i]]);
      await new Promise(r => setTimeout(r, Math.random() * 300 + 200));
    }
    
    await new Promise(r => setTimeout(r, 500));
    onEnter();
  };

  if (booting) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8 font-mono text-acid-green">
        <div className="w-full max-w-lg space-y-4">
          <Terminal size={48} className="mb-8 animate-pulse" />
          <div className="space-y-2">
             {logs.map((log, i) => (
               <div key={i} className="border-l-2 border-acid-green pl-3 animate-fade-in">
                 <span className="opacity-50 text-xs mr-4">[{new Date().toISOString().split('T')[1].slice(0,8)}]</span>
                 {log}
               </div>
             ))}
          </div>
          <div className="h-1 w-full bg-gray-800 mt-8 relative overflow-hidden">
             <div className="absolute top-0 left-0 h-full bg-acid-green animate-[width_2s_ease-out_forwards]" style={{ width: '100%' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-void-black text-white relative overflow-hidden flex flex-col">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none z-0 opacity-50"></div>
      
      <header className="relative z-10 p-6 md:p-12 border-b border-gray-800 flex justify-between items-center bg-black/50 backdrop-blur-sm">
        <div className="flex items-center gap-2 text-acid-green">
          <Terminal size={24} strokeWidth={3} />
          <span className="font-bold font-sans tracking-tighter uppercase text-xl">BolhaDev<span className="text-white">_Wiki</span></span>
        </div>
        <div className="text-xs font-mono text-gray-500 hidden md:block">
          SYS.STATUS: <span className="text-green-500">UNSTABLE</span>
        </div>
      </header>

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center p-6 md:p-12 max-w-5xl mx-auto w-full">
        <div className="text-center space-y-8 mb-16">
          <div className="inline-block border border-acid-purple text-acid-purple px-3 py-1 rounded-full text-xs font-mono font-bold mb-4 uppercase tracking-widest animate-pulse">
            Acesso Público Liberado v0.6.6
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] hover-glitch">
            O Arquivo Definitivo<br />
            do <span className="text-transparent bg-clip-text bg-gradient-to-r from-acid-green to-emerald-500">Caos Tech</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-gray-400 font-mono text-sm md:text-base leading-relaxed">
            Bem-vindo à <strong>BolhaDev Wiki</strong>. Um compêndio colaborativo e cínico documentando as maiores tretas, polêmicas, takes errados e crimes de engenharia da comunidade de desenvolvimento brasileira.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-16">
          <FeatureCard 
            icon={<Database className="text-acid-green" />}
            title="Banco de Dados Estático"
            desc="Uma coleção curada dos maiores clássicos, desde 'PHP Morreu' até 'Clean Code no Button'."
          />
          <FeatureCard 
            icon={<Cpu className="text-acid-purple" />}
            title="Live Feed via GitHub"
            desc="Conexão direta com a API do GitHub para renderizar Issues da comunidade em tempo real."
          />
          <FeatureCard 
            icon={<ShieldAlert className="text-error-red" />}
            title="IA Cínica Integrada"
            desc="O 'Arquivista' analisa e julga suas stacks com base em milhões de linhas de código ruim."
          />
        </div>

        <button 
          onClick={handleEnter}
          className="group relative px-8 py-4 bg-acid-green text-black font-black font-mono uppercase tracking-widest text-lg overflow-hidden transition-transform active:scale-95"
        >
          <span className="relative z-10 flex items-center gap-3">
            Acessar Sistema <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay"></div>
          <div className="absolute bottom-0 left-0 h-1 w-full bg-black group-hover:h-2 transition-all"></div>
        </button>

        <div className="mt-12 text-[10px] text-gray-600 font-mono text-center max-w-md">
          AVISO: Este sistema contém sarcasmo não supervisionado, referências a JavaScript e opiniões fortes sobre arquitetura de software. Prossiga por sua conta e risco.
        </div>
      </main>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="bg-gray-900/50 border border-gray-800 p-6 hover:border-white transition-colors group">
    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
    <h3 className="text-white font-bold font-sans uppercase mb-2 text-lg">{title}</h3>
    <p className="text-gray-500 font-mono text-xs leading-relaxed">{desc}</p>
  </div>
);