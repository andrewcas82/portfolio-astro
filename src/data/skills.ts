// src/data/skills.ts

export type SkillLevel = "Advanced" | "Intermediate" | "Familiar";

export type Skill = {
  name: string;
  level?: SkillLevel;
  tags?: string[];
};

export type SkillGroup = {
  title: string;
  subtitle?: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Software Engineering & Architecture",
    subtitle: "Modular design, maintainability, and clean delivery.",
    skills: [
      { name: "Software Architecture & Modular Design", level: "Advanced" },
      { name: "Object-Oriented Programming (OOP)", level: "Advanced" },
      { name: "SOLID Principles", level: "Advanced" },
      { name: "Design Patterns", level: "Intermediate" },
      { name: "Clean Code & Refactoring", level: "Advanced" },
      { name: "Technical Documentation (Markdown, README-driven)", level: "Advanced" },
    ],
  },
  {
    title: "XR / Unity / Immersive Technologies",
    subtitle: "XR systems for training and simulation.",
    skills: [
      { name: "Unity 6", level: "Advanced" },
      { name: "XR Interaction Toolkit", level: "Advanced" },
      { name: "OpenXR", level: "Advanced" },
      { name: "Unity Input System", level: "Advanced" },
      { name: "XR Rig Architecture", level: "Advanced" },
      { name: "Scene & Camera Management", level: "Intermediate" },
      { name: "Performance Optimization for XR", level: "Intermediate" },
      { name: "Meta Quest 3", level: "Intermediate" },
      { name: "Vuforia (optional integration)", level: "Intermediate" },
    ],
  },
  {
    title: "Mobile & Cross-Platform Development",
    subtitle: "Flutter apps with scalable architecture and integrations.",
    skills: [
      { name: "Flutter", level: "Advanced" },
      { name: "Dart", level: "Advanced" },
      { name: "App Architecture & State Management", level: "Intermediate" },
      { name: "REST API Integration", level: "Intermediate" },
      { name: "Android / iOS Cross-platform delivery", level: "Intermediate" },
      { name: "Tooling via VS Code", level: "Advanced" },
    ],
  },
  {
    title: "DevOps, Tooling & Automation",
    subtitle: "Automation-first mindset for delivery and reliability.",
    skills: [
      { name: "Git", level: "Advanced" },
      { name: "GitHub (workflows/collaboration)", level: "Intermediate" },
      { name: "Docker / Dockerfiles", level: "Intermediate" },
      { name: "Basic Kubernetes concepts", level: "Familiar" },
      { name: "Workflow automation (n8n)", level: "Intermediate" },
      { name: "Python scripting for automation", level: "Intermediate" },
    ],
  },
  {
    title: "Aviation Engineering & Simulation",
    subtitle: "Safety-critical discipline and traceability as a differentiator.",
    skills: [
      { name: "Aircraft Maintenance Processes", level: "Advanced" },
      { name: "Component Repair & Overhaul", level: "Advanced" },
      { name: "Calibration of Tools & Equipment", level: "Advanced" },
      { name: "Quality Control & Compliance", level: "Advanced" },
      { name: "Technical Documentation & Traceability", level: "Advanced" },
      { name: "XR-based Aviation Training Systems", level: "Intermediate" },
    ],
  },
  {
    title: "Leadership & Technical Management",
    subtitle: "Metrics, standards, and cross-functional alignment.",
    skills: [
      { name: "Technical Decision-Making", level: "Advanced" },
      { name: "Architecture Ownership", level: "Advanced" },
      { name: "Code Review & Standards", level: "Intermediate" },
      { name: "Mentoring Junior Developers", level: "Intermediate" },
      { name: "KPI Definition & Tracking", level: "Intermediate" },
      { name: "Risk Register Design", level: "Intermediate" },
      { name: "Stakeholder Communication (ES/EN)", level: "Advanced" },
    ],
  },
];

// Extra: habilidades “long tail” para /about (si las quieres mostrar completas)
export const extendedSkills: Skill[] = [
  { name: "Python (backend/automation)", level: "Intermediate" },
  { name: "TypeScript / JavaScript", level: "Intermediate" },
  { name: "SQL (basic to intermediate)", level: "Intermediate" },
  { name: "Requirements Analysis", level: "Intermediate" },
  { name: "Root Cause Analysis", level: "Intermediate" },
  { name: "Process Mapping & Optimization", level: "Intermediate" },
  { name: "Usability Testing (XR contexts)", level: "Intermediate" },
  { name: "Scenario-based Training Design", level: "Intermediate" },
];
