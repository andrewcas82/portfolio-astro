export type Locale = "en" | "es";

export const UI = {
  en: {
    nav: { home: "Home", projects: "Projects", about: "About", contact: "Contact" },
    common: { backToProjects: "← Back to Projects", links: "Links", highlights: "Highlights", stack: "Stack" },
  },
  es: {
    nav: { home: "Inicio", projects: "Proyectos", about: "Sobre mí", contact: "Contacto" },
    common: { backToProjects: "← Volver a Proyectos", links: "Enlaces", highlights: "Logros", stack: "Tecnologías" },
  },
} as const;

export function getLocaleFromAstro(currentLocale: string | undefined): Locale {
  return currentLocale === "es" ? "es" : "en";
}
