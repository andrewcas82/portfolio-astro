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
  fullName: "Andres Castrillon",
  headline:
    "Software Engineer / XR Developer / Aviation Maintenance Engineer — MBI & MBA",
  titles: [
    "Software Engineer",
    "XR Developer (Unity / OpenXR / XRI)",
    "Aviation Maintenance Engineer",
    "XR Training Architect (Aviation)",
  ],
  location: "UAE (Asia/Dubai)",
  languages: [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "Professional working proficiency" }, // ajusta si deseas
  ],
  summary:
    "Software engineer and XR engineer with experience in Unity (XR Interaction Toolkit, OpenXR, Input System) and mobile development with Flutter, complemented by solid experience in aircraft maintenance, quality control, calibration, and safety-critical environments. Focused on building immersive training systems (VR/AR/MR) for aviation with modular architecture, technical documentation, and a focus on metrics.",
  valueProposition: [
    "Bridge between aeronautical engineering (processes, traceability, safety) and XR development (Unity) for immersive training.",
    "Modular and maintainable architecture: SOLID, patterns, input and movement decoupling, testable components.",
    "Results-oriented delivery: clear documentation, KPIs, risk management and continuous improvement.",
  ],
  focusAreas: [
    "XR Training Systems (VR/AR/MR) para aviación",
    "Unity 6 + XR Interaction Toolkit + OpenXR",
    "Flutter (Android/iOS) + Integración REST",
    "Automatización y tooling (Git, Docker, scripts)",
    "Data structuring y análisis (SQL, métricas, RCA)",
  ],
  education: [
    {
      name: "MBI & MBA (Master’s Degree)",
      status: "Completed",
      notes: "2025",
    },
  ],
  certifications: [
    // Opcional. Completa si tienes certificaciones concretas.
    // { name: "Certification Name", issuer: "Issuer", year: "2024" }
  ],
  availability: {
    type: "Open to opportunities",
    notes:
      "Roles objetivo: XR Technical Lead, Software Engineer, Engineering Manager, XR Training Architect (Aviation).",
  },
  contact: {
    email: "c2developers@outlook.com",
    website: "https://andrescasportafolio.vercel.app/",
    github: "https://github.com/andrewcas82",
    linkedin: "https://www.linkedin.com/in/andres-castrillon-montoya-7a8bb8a5/",
  },
  highlights: [
    {
      label: "Core Strengths",
      items: [
        "Software Architecture & Modular Design (SOLID, Patterns, Clean Code)",
        "Unity XR (XRI, OpenXR, Input System, Rig Architecture)",
        "Flutter cross-platform apps (Android/iOS) + REST integrations",
        "Aviation domain expertise (QC, calibration, compliance, traceability)",
        "Leadership: KPIs, risk registers, mentoring, stakeholder communication",
      ],
    },
    {
      label: "Proof-oriented delivery",
      items: [
        "README-driven development y documentación técnica en Markdown",
        "Diseño orientado a métricas (KPIs) y trazabilidad (entornos críticos)",
        "Enfoque en performance y estabilidad (XR en Quest + PC workflows)",
      ],
    },
  ],
};

export default profile;

