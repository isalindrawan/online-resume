export type Lang = 'id' | 'en';

export interface Social {
  id: string;
  label: string;
  url: string;
  icon: string;
}

export interface Platform {
  title: string;
  url: string | null;
  status?: string;
}

export interface Project {
  title: string;
  description: string;
  platform: Platform[];
}

export interface PortfolioCategory {
  category: string;
  projects: Project[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  stack: string[];
}

export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillGroup {
  label: string;
  items: SkillItem[];
}

export interface Skills {
  headline: string;
  groups: SkillGroup[];
}

export interface Summary {
  headline: string;
  body: string;
  stats?: { value: string; label: string }[];
}

export interface Education {
  institution: string;
  degree: string;
  concentration: string;
  period: string;
  location: string;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  avatar: string;
  available: boolean;
  tagline: string;
}

export const LANGS: Lang[] = ['id', 'en'];
