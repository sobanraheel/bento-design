
import React, { useRef, useState } from 'react';
import { BentoItemProps } from '../types';

const BentoItem: React.FC<BentoItemProps> = ({ className = '', children, title, description }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`bento-card rounded-2xl p-4 flex flex-col relative overflow-hidden group ${className}`}
      style={{ '--mouse-x': `${mousePos.x}px`, '--mouse-y': `${mousePos.y}px` } as React.CSSProperties}
    >
      <div className="card-glow" />
      
      {title && (
        <div className="mb-2 relative z-10">
          <h3 className="text-sm font-bold text-slate-100 tracking-tight leading-none">{title}</h3>
          {description && <p className="text-[10px] text-slate-500 mt-1 leading-none">{description}</p>}
        </div>
      )}
      
      <div className="flex-grow flex flex-col justify-center relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BentoItem;
