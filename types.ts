
import React from 'react';

export interface BentoItemProps {
  className?: string;
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export interface Skill {
  name: string;
  icon: string;
  color: string;
}
