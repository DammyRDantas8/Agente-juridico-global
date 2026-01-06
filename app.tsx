import React, { useState } from 'react';
import { Mic, Volume2, Globe, Search, BookOpen, Layers } from 'lucide-react';

const IDIOMAS = [
  { code: 'zh-CN', label: 'Mandarim 🇨🇳', voice: 'zh-CN', prompt: 'Ensine vocabulário em Mandarim (Hanzi/Pinyin) e Direito Chinês.' },
  { code: 'en-US', label: 'Inglês (US) 🇺🇸', voice: 'en-US', prompt: 'Ensine vocabulário técnico em Inglês Jurídico (Common Law) e Tech.' },
  { code: 'ru-RU', label: 'Russo 🇷🇺', voice: 'ru-RU', prompt: 'Ensine vocabulário em Russo (Alfabeto Cirílico) e geopolítica.' },
  { code: 'de-DE', label: 'Alemão 🇩🇪', voice: 'de-DE', prompt: 'Ensine vocabulário jurídico em Alemão (Civil Law).' },
  { code: 'fr-FR', label: 'Francês 🇫🇷', voice: 'fr-FR', prompt: 'Ensine vocabulário jurídico internacional e diplomacia.' },
  { code: 'it-IT', label: 'Italiano 🇮🇹', voice: 'it-IT', prompt: 'Ensine vocabulário jurídico clássico e Romano.' },
  { code: 'es-ES', label: 'Espanhol 🇪🇸', voice: 'es-ES', prompt: 'Ensine vocabulário jurídico do Mercosul e América Latina.' },
  { code: 'th-TH', label: 'Tailandês 🇹🇭', voice: 'th-TH', prompt: 'Ensine vocabulário e escrita Tailandesa com foco em tecnologia.' },
];

export default function App() {
  const [tema, setTema] = useState('');
  const [resultado, setResultado] = useState('');
  const [loading, setLoading] = useState(false);
  const [idiomaAtual, setIdiomaAtual] = useState(IDIOMAS[0]);
  const [textoParaFalar, setTextoParaFalar] = useState('');

  const handlePesquisa = async () => {
    if (!tema) return;
    setLoading(true);
    setResultado("🔄 O Agente Dammy está analisando bases de dados internacionais...");
    
    // Simulação da resposta da IA para o Portfólio
    setTimeout(() => {
        setResultado(## ⚖️ Análise Jurídica: ${tema}\n\n**Contexto Internacional:**\nNo sistema ${idiomaAtual.label}, este conceito é fundamental para o entendimento de...\n\n### 📚 Vocabulário Técnico\n* **Termo Chave 1**: Definição no idioma nativo.\n* **Termo Chave 2**: Aplicação prática.);
        setLoading(false);
    }, 2000);
  };

  const handleFalar = () => {
    if (!textoParaFalar) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(textoParaFalar);
    utterance.lang = idiomaAtual.voice;
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-4 md:p-8">
      <header className="max-w-5xl mx-auto mb-8 border-b border-slate-800 pb-6 flex items-center gap-4">
        <div className="bg-blue-600 p-3 rounded-xl"><Layers size={32} color="white" /></div>
        <div>
          <h1 className="text-2xl font-bold text-blue-400">DAMMY PRIVATE AGENT</h1>
          <p className="text-slate-400 text-sm">Juridical Intelligence & Polyglot Hub</p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-slate-900/50 p-5 rounded-2xl border border-slate-800">
            <label className="flex items-center gap-2 text-blue-300 mb-4 font-semibold"><Globe size={16} /> Idioma</label>
            <div className="grid grid-cols-2 gap-2">
              {IDIOMAS.map((lang) => (
                <button key={lang.code} onClick={() => setIdiomaAtual(lang)}
                  className={p-2 text-xs rounded-lg border ${idiomaAtual.code === lang.code ? 'bg-blue-600 border-blue-500' : 'bg-slate-800 border-slate-700'}}>
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
          <div className="bg-slate-900/50 p-5 rounded-2xl border border-slate-800 border-l-4 border-l-emerald-500">
            <label className="flex items-center gap-2 text-emerald-400 mb-3 font-semibold"><Mic size={16} /> Pronúncia</label>
            <textarea className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-sm text-slate-200" rows={4}
              placeholder="Cole o texto aqui..." value={textoParaFalar} onChange={(e) => setTextoParaFalar(e.target.value)} />
            <button onClick={handleFalar} className="w-full mt-3 bg-emerald-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 font-bold">
              <Volume2 size={18} /> OUVIR
            </button>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-4 text-slate-500" />
            <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-2xl py-4 pl-12 pr-4 text-lg"
              placeholder="Pesquisar..." value={tema} onChange={(e) => setTema(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handlePesquisa()} />
          </div>
          <div className="bg-slate-900/80 rounded-2xl p-6 border border-slate-800 min-h-[500px]">
            {loading ? <p className="text-center mt-20 text-slate-400">Processando...</p> : 
             <div className="prose prose-invert max-w-none whitespace-pre-wrap">{resultado || <div className="text-center mt-20 text-slate-500"><BookOpen size={48} className="mx-auto mb-4 opacity-20"/><p>Aguardando pesquisa.</p></div>}</div>}
          </div>
        </div>
      </main>
    </div>
  );
}
