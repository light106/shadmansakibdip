import React from 'react';

export interface Project {
  id: number;
  title: string;
  category: string;
  role: string;
  description: string;
  deliverables: string[];
  date: string;
}

export interface Skill {
  category: string;
  items: { name: string; level: number }[];
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
  techFocus: string[];
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  year: string;
  color?: string;
}

export interface Certification {
  title: string;
  organization: string;
  details: string;
  icon: React.ReactNode;
  color?: string;
}

export interface Award {
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}