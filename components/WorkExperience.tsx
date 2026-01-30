
import React from 'react';

const WorkExperience: React.FC = () => {
  const experiences = [
    { role: 'Product Designer', company: 'Linear', period: '22-Now', current: true },
    { role: 'UI Engineer', company: 'Vercel', period: '20-22', current: false },
    { role: 'Designer', company: 'Stripe', period: '18-20', current: false },
    { role: 'Developer', company: 'GitHub', period: '16-18', current: false },
  ];

  return (
    <div className="space-y-2">
      {experiences.map((exp, i) => (
        <div key={i} className="flex items-center justify-between group/item">
          <div className="flex flex-col">
            <span className={`text-[11px] font-bold ${exp.current ? 'text-indigo-400' : 'text-slate-200'}`}>
              {exp.role}
            </span>
            <span className="text-[9px] text-slate-500">{exp.company}</span>
          </div>
          <div className="text-[9px] font-mono text-slate-600 bg-slate-900/50 px-1.5 py-0.5 rounded">
            {exp.period}
          </div>
        </div>
      ))}
      <div className="pt-2 flex items-center justify-between border-t border-slate-800/50 mt-1">
        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Full CV</span>
        <svg className="w-3 h-3 text-slate-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  );
};

export default WorkExperience;
