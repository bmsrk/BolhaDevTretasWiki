import React from 'react';
import { Info, Terminal, Coffee, Heart, ShieldAlert, Cpu } from 'lucide-react';

export const About: React.FC = () => {
  const maintainers = [
    { name: 'ADMIN_ROOT', role: 'Dictator', description: 'Rejeita PRs sem testes', color: 'border-acid-purple text-acid-purple' },
    { name: 'BOT_01', role: 'CronJob', description: 'Coleta tretas automaticamente', color: 'border-acid-green text-acid-green' },
    { name: 'COMMUNITY', role: 'Chaos_Agents', description: 'Gera o conteúdo', color: 'border-white text-white' },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-fade-in pb-12">
      <div className="border-b-4 border-white pb-6">
        <h2 className="text-5xl md:text-7xl font-sans font-black text-white mb-4 uppercase tracking-tighter">
          WHOAMI<span className="text-acid-green">.exe</span>
        </h2>
        <p className="font-mono text-gray-500 text-lg uppercase">
          // Manifesto & Propaganda
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-8">
          <div className="bg-void-black border-2 border-white p-8 shadow-hard">
            <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3 uppercase decoration-acid-green underline decoration-4 underline-offset-4">
              <Terminal size={24} />
              O Manifesto
            </h3>
            <div className="font-mono text-gray-300 text-sm leading-relaxed space-y-4">
              <p>
                A <strong className="text-white bg-gray-800 px-1">BolhaDev Wiki</strong> não é um produto. É um sintoma.
              </p>
              <p>
                Nasceu da necessidade urgente de catalogar a insanidade coletiva da nossa área antes que ela se perca no feed infinito das redes sociais. Se você não documenta o erro, você vira Tech Lead dele.
              </p>
              <p className="border-l-4 border-acid-green pl-4 italic text-white">
                "Quem não conhece a história do left-pad está condenado a repeti-la."
              </p>
              <p>
                Este é um projeto Open Source, estático e brutalista. Lemos diretamente do GitHub Issues. Sem banco de dados, sem backend, apenas vibes ruins e HTML cru.
              </p>
            </div>
          </div>

          <div className="bg-red-900/10 border-2 border-red-500 p-6">
            <h3 className="text-xl font-bold text-red-500 mb-2 flex items-center gap-2 uppercase">
              <ShieldAlert size={20} />
              Disclaimer Jurídico
            </h3>
            <p className="text-red-400 font-mono text-xs">
              Todo o conteúdo é para fins humorísticos. Qualquer semelhança com Tech Leads reais, CTOs visionários ou Juniors que deletaram o banco de produção é mera coincidência. Não nos processe, não temos dinheiro (somos devs JS).
            </p>
          </div>
        </div>

        {/* Sidebar / Stats */}
        <div className="space-y-6">
          <div className="bg-white text-black border-2 border-black p-4 shadow-hard-purple">
            <h4 className="font-black text-lg uppercase mb-4 border-b-2 border-black pb-2">Tech Stack</h4>
            <ul className="space-y-2 text-xs font-mono font-bold">
              <li className="flex justify-between">
                <span>LIB:</span> <span>REACT 19</span>
              </li>
              <li className="flex justify-between">
                <span>CSS:</span> <span>TAILWIND</span>
              </li>
              <li className="flex justify-between">
                <span>CMS:</span> <span>GITHUB API</span>
              </li>
              <li className="flex justify-between">
                <span>SOUL:</span> <span>NONE</span>
              </li>
            </ul>
          </div>

          <div className="bg-void-black border-2 border-gray-700 p-4">
            <h4 className="font-mono text-xs text-gray-500 uppercase mb-4">/MAINTAINERS/</h4>
            <div className="space-y-4">
              {maintainers.map((m) => (
                <div key={m.name} className={`p-3 border-l-4 bg-gray-900/50 ${m.color}`}>
                  <div className="font-black text-sm">{m.name}</div>
                  <div className="text-[10px] opacity-80 font-mono">{m.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};