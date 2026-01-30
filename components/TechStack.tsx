
import React from 'react';
import { Skill } from '../types';

const skills: Skill[] = [
  { name: 'React', icon: '⚛️', color: 'bg-sky-500/10 text-sky-400' },
  { name: 'Next.js', icon: '▲', color: 'bg-white/10 text-white' },
  { name: 'TypeScript', icon: 'TS', color: 'bg-blue-500/10 text-blue-500' },
  { name: 'Tailwind', icon: '🌊', color: 'bg-teal-500/10 text-teal-400' },
  { name: 'Framer', icon: '✨', color: 'bg-purple-500/10 text-purple-400' },
  { name: 'D3.js', icon: '📊', color: 'bg-orange-500/10 text-orange-400' },
  { name: 'Rust', icon: '🦀', color: 'bg-red-500/10 text-red-400' },
  { name: 'Docker', icon: '🐳', color: 'bg-blue-600/10 text-blue-300' },
];

const TechStack: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-2 h-full">
      {skills.map((skill, idx) => (
        <div 
          key={idx} 
          className={`flex items-center space-x-2 p-2 rounded-xl border border-slate-700/20 ${skill.color} transition-all hover:scale-[1.02] cursor-default`}
        >
          <span className="text-xs font-bold font-mono">{skill.icon}</span>
          <span className="text-[11px] font-medium truncate">{skill.name}</span>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
