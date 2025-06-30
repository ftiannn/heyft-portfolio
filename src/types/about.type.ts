import { LucideIcon } from "lucide-react";

export interface QuickFact {
  icon: string;
  text: string;
}

export interface ProfessionalExperience {
  period: string;
  title: string;
  company: string;
  type: string;
  description: string | string[];
  achievements: string[];
  technologies: string[];
  color: string;
  icon: string;
  mood: string;
}

export interface Skill {
  name: string;
  level: number;
  description: string;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  skills: Skill[];
}

export interface PersonalInterest {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  details: string;
  link: string;
}

export interface DrivingPrinciple {
  icon: string;
  title: string;
  description: string;
}
