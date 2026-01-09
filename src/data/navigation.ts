// src/data/navigation.ts
export type NavItem = { key: "home" | "projects" | "about" | "contact"; href: string };

const navigation: NavItem[] = [
  { key: "home", href: "/" },
  { key: "projects", href: "/projects/" },
  { key: "about", href: "/about/" },
  { key: "contact", href: "/contact/" },
];

export default navigation;

