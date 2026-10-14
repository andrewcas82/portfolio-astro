// src/data/profile.ts

export type Profile = {
  fullName: string;
  headline: string;
  titles: string[];
  location?: string;
  languages: { name: string; level?: string }[];
  summary: string;
  valueProposition: string[];
  focusAreas: string[];
  education: { name: string; status?: string; notes?: string }[];
  certifications?: { name: string; issuer?: string; year?: string }[];
  availability?: { type?: string; notes?: string };
  contact: {
    email?: string;
    website?: string;
    github?: string;
    linkedin?: string;
  };
  highlights: {
    label: string;
    items: string[];
  }[];
};

export const profile: Profile = {
  fullName: "Andres Castrillon Montoya",
  headline:
    "Software Engineer | AI, Simulation & XR Development | Systems Integration",
  titles: [
    "Software Engineer",
    "AI & Systems Integration",
    "XR Developer (VR/AR/MR)",
    "Aviation Maintenance Engineer",
  ],
  location: "Abu Dhabi, UAE | Open to relocate to Medellin, Colombia",
  languages: [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "Advanced" },
  ],
  summary:
    "Software Engineer with a professional background in the aviation sector since 2013 and a focus on AI-assisted software development, immersive simulation, and systems integration. Currently developing VR and AI solutions for aviation training, including an AI-assisted air traffic control simulator integrated with Microsoft Flight Simulator and Meta Quest 3. Hands-on experience with RAG, LLM APIs, FastAPI, MongoDB, AI agents, and custom MCP integrations.",
  valueProposition: [
    "Bridge between aviation operations (processes, safety) and cutting-edge technology (AI, XR, Simulation).",
    "Modular architecture & integration: Python, FastAPI, REST APIs, MongoDB, and workflow automation (n8n, Docker).",
    "AI-driven solutions: Implementation of RAG, LLM APIs, AI agents, and custom MCP integrations.",
  ],
  focusAreas: [
    "AI Engineering (RAG, LLM APIs, AI Agents, OpenClaw, MCP)",
    "Simulation & XR (Microsoft Flight Simulator, Meta Quest 3, VR Training)",
    "Backend & Integration (Python, JavaScript, FastAPI, MongoDB)",
    "Workflow Automation (n8n, Docker, Git)",
  ],
  education: [
    {
      name: "Master's Degree in International Management",
      status: "Completed",
      notes: "Politecnico Grancolombiano (2025)",
    },
    {
      name: "Software Engineer",
      status: "Completed",
      notes: "Politecnico Grancolombiano (2022)",
    },
  ],
  certifications: [
    { name: "Business Continuity Management System", issuer: "GAL", year: "2026" },
    { name: "Microsoft Copilot: The Art of Prompting", issuer: "LinkedIn Learning", year: "2026" },
    { name: "Human Factors Refresher Training - EASA Part 145", issuer: "GAL / AMMROC", year: "2023" },
    { name: "Initiating and Planning Projects", issuer: "University of California, Irvine - Coursera", year: "2022" },
  ],
  availability: {
    type: "Open to international opportunities",
    notes:
      "Target roles: Software Engineer, AI Engineer, XR Developer, Systems Integrator.",
  },
  contact: {
    email: "andrescastrillon82@hotmail.com",
    website: "https://andrescasportafolio.vercel.app/",
    github: "https://github.com/andrewcas82",
    linkedin: "https://www.linkedin.com/in/andres-castrillon-montoya-7a8bb8a5/",
  },
  highlights: [
    {
      label: "Core Strengths",
      items: [
        "AI Engineering: RAG, LLM integration, AI agents, custom MCP servers, OpenAI/Gemini/Anthropic APIs.",
        "Simulation & XR: MSFS, Meta Quest 3, VR/XR prototyping, aviation training simulation.",
        "Backend & Integration: Python, JavaScript, FastAPI, REST APIs, MongoDB, system integration.",
        "Infrastructure & Automation: Docker, Git, Kubernetes basics, n8n, local/offline application workflows.",
        "Aviation Domain: Aircraft maintenance, quality control, calibration, and safety-critical environments.",
      ],
    },
    {
      label: "Selected Projects",
      items: [
        "AI Lite ATC Simulation: AI-assisted air traffic control simulator integrated with MSFS for aviation training.",
        "Immersive Aviation Training: VR/AR training concepts translated into technical prototypes using Meta Quest 3.",
        "AI Agents & MCP Integrations: Configured OpenClaw skills, heartbeat workflows, and custom MCP connections for Blender.",
      ],
    },
  ],
};

export default profile;

