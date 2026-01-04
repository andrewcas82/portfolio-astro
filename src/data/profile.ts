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
    "Ingeniero de software y desarrollador XR con experiencia en Unity (XR Interaction Toolkit, OpenXR, Input System) y desarrollo móvil con Flutter, complementado por experiencia sólida en mantenimiento aeronáutico, control de calidad, calibración y entornos safety-critical. Enfocado en construir sistemas de entrenamiento inmersivo (VR/AR/MR) para aviación con arquitectura modular, documentación técnica y enfoque en métricas.",
  valueProposition: [
    "Puente entre ingeniería aeronáutica (procesos, trazabilidad, seguridad) y desarrollo XR (Unity) para entrenamiento inmersivo.",
    "Arquitectura modular y mantenible: SOLID, patrones, desacoplamiento de input y movimiento, componentes testeables.",
    "Orientación a resultados: documentación clara, KPIs, gestión de riesgos y mejora continua.",
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
      status: "In progress",
      notes: "Completion expected 2025",
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
    email: "YOUR_EMAIL_HERE",
    website: "YOUR_DOMAIN_HERE",
    github: "https://github.com/YOUR_GITHUB",
    linkedin: "https://www.linkedin.com/in/YOUR_LINKEDIN",
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
