
import React from 'react';
import BentoSection from './components/BentoSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-indigo-500/30">
      <header className="pt-12 pb-8 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-slate-500 tracking-tighter">
              Alex Rivers.
            </h1>
            <p className="mt-2 text-slate-500 text-base md:text-lg font-medium leading-tight">
              Design-driven Engineer building products that define the <span className="text-white">modern web</span>.
            </p>
          </div>
          <div className="flex space-x-2">
             <button className="px-5 py-2.5 bg-white text-slate-950 rounded-xl font-bold text-sm hover:scale-105 transition-transform active:scale-95">
               Start project
             </button>
             <button className="px-5 py-2.5 bg-slate-900 border border-slate-800 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors">
               Contact
             </button>
          </div>
        </div>
      </header>
      
      <main className="px-4 pb-4">
        <BentoSection />
      </main>
    </div>
  );
};

export default App;
