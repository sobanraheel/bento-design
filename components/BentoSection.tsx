
import React from 'react';
import BentoItem from './BentoItem';
import WorkExperience from './WorkExperience';
import TechStack from './TechStack';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const data = [
  { value: 40 }, { value: 35 }, { value: 55 }, { value: 45 }, { value: 70 }, { value: 65 }, { value: 85 }
];

const BentoSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 auto-rows-[150px]">
      
      {/* 1. Hero / Intro (2x2) */}
      <BentoItem 
        className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-indigo-600/10 to-transparent border-indigo-500/20" 
      >
        <div className="flex flex-col h-full justify-between py-1">
          <div>
            <div className="inline-flex items-center px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-3">
              <span className="flex h-1.5 w-1.5 rounded-full bg-indigo-500 mr-2 animate-pulse"></span>
              <span className="text-[9px] font-bold text-indigo-400 uppercase tracking-widest">Active Now</span>
            </div>
            <h2 className="text-3xl font-black text-white leading-none mb-3">
              Building the next <br/><span className="text-indigo-500">digital frontier</span>.
            </h2>
            <p className="text-slate-400 text-sm max-w-sm leading-snug">
              I'm a Full-stack Engineer & Product Designer focused on crafting high-performance, aesthetically pleasing user interfaces.
            </p>
          </div>
          <div className="flex -space-x-2 overflow-hidden items-center mt-4">
            {[1, 2, 3, 4, 5].map(i => (
              <img key={i} className="inline-block h-7 w-7 rounded-full ring-2 ring-slate-950" src={`https://picsum.photos/id/${i+50}/100/100`} alt="Team Member" />
            ))}
            <div className="flex items-center justify-center h-7 w-7 rounded-full bg-slate-800 ring-2 ring-slate-950 ml-1">
              <span className="text-[9px] font-bold text-slate-300">+12</span>
            </div>
          </div>
        </div>
      </BentoItem>

      {/* 2. Work Experience (1x2) */}
      <BentoItem className="lg:row-span-2 lg:col-span-1 md:col-span-1" title="Background" description="Career history.">
        <WorkExperience />
      </BentoItem>

      {/* 3. Location / Time (1x1) */}
      <BentoItem className="col-span-1 bg-slate-900/20">
        <div className="flex flex-col h-full items-center justify-center">
          <span className="text-2xl mb-1">🇺🇸</span>
          <span className="text-lg font-black text-white leading-tight">San Francisco</span>
          <span className="text-[9px] font-mono text-slate-500 uppercase">GMT-7 • 12:45 PM</span>
        </div>
      </BentoItem>

      {/* 4. Tech Stack (1x2) */}
      <BentoItem className="lg:row-span-2 lg:col-span-1 md:col-span-1" title="Toolbox" description="Technologies.">
        <TechStack />
      </BentoItem>

      {/* 5. Metrics / Stats (1x1) */}
      <BentoItem title="Performance" description="Lighthouse avg.">
        <div className="h-full w-full -ml-4 -mb-2 mt-auto">
          <ResponsiveContainer width="100%" height="70%">
            <AreaChart data={data}>
              <Area type="monotone" dataKey="value" stroke="#6366f1" fillOpacity={0.1} fill="#6366f1" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
          <div className="absolute top-10 right-6">
            <span className="text-3xl font-black text-white">99</span>
          </div>
        </div>
      </BentoItem>

      {/* 6. Recent Project Spotlight (2x1) - NO CROP IMAGE */}
      <BentoItem className="md:col-span-2 group" title="Latest Work" description="Synthetix Dashboard UI.">
        <div className="relative w-full h-full mt-2 rounded-xl overflow-hidden bg-slate-950/50 border border-slate-800/50 flex items-center justify-center p-2">
           {/* Aspect-ratio handling: using object-contain to ensure no cropping */}
           <img 
            src="https://picsum.photos/id/2/800/400" 
            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" 
            alt="Work Spotlight" 
           />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent pointer-events-none"></div>
           <div className="absolute bottom-2 left-3 flex items-center space-x-2">
             <div className="w-6 h-6 rounded bg-indigo-500/20 backdrop-blur-md flex items-center justify-center border border-indigo-500/30">
               <svg className="w-3 h-3 text-indigo-400" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" /><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" /></svg>
             </div>
             <p className="text-[10px] font-bold text-white uppercase tracking-wider">Web3 Project</p>
           </div>
        </div>
      </BentoItem>

      {/* 7. Social Links (1x1) */}
      <BentoItem className="col-span-1">
        <div className="flex flex-col h-full space-y-1 justify-center">
          <a href="#" className="flex items-center px-4 py-3 bg-slate-900/60 rounded-xl space-x-3 hover:bg-slate-800 transition-colors border border-slate-800/50">
            <div className="w-5 h-5 rounded bg-slate-950 flex items-center justify-center text-[9px] font-bold">𝕏</div>
            <span className="text-[11px] font-semibold text-slate-300">Twitter</span>
          </a>
          <a href="#" className="flex items-center px-4 py-3 bg-indigo-900/20 rounded-xl space-x-3 hover:bg-indigo-900/40 transition-colors border border-indigo-800/20">
            <div className="w-5 h-5 rounded bg-indigo-600 flex items-center justify-center text-[9px] font-bold text-white">in</div>
            <span className="text-[11px] font-semibold text-slate-300">LinkedIn</span>
          </a>
        </div>
      </BentoItem>

    </div>
  );
};

export default BentoSection;
