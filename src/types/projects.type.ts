export interface ProjectSection {
  heading?: string;
  content: string[];
}

export type ProjectCategory =
  | "All"
  | "Featured"
  | "Professional"
  | "Learning"
  | "Fun"
  | "Coming Soon"
  | "Needs Love";

export type ProjectStatus =
  | "Live"
  | "In Progress"
  | "Complete"
  | "Learning Project"
  | "Needs Revamp"
  | "Planning";

export type ProjectComplexity = "Simple" | "Moderate" | "Complex";
export type ProjectImpact = "Learning" | "Personal" | "Professional" | "Production";

export interface Project {
id: number;
title: string;
slug?: string;
tagline: string;
description: string;
details: ProjectSection[];
image: string;
stack: string[];
github: string;
demo: string;
category: ProjectCategory;
status: ProjectStatus;
featured: boolean;
complexity: ProjectComplexity;
impact: ProjectImpact;

timeInvested: string;
lessonsLearned: string;
wouldBuildAgain: string;
metrics?: Record<string, string>;
isClientWork?: boolean;
year?: string;
teamSize?: string;
role?: string;
tags?: string[];
designTools?: string[];
videoDemo?: string;
slidesLink?: string;
testimonials?: {
  name: string;
  quote: string;
}[];
}
