import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),

    // Opcionales (para no romper tus MD actuales si no los tienen)
    role: z.string().optional(),
    stack: z.array(z.string()).default([]),
    highlights: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),

    status: z.enum(["active", "completed", "archived"]).optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),

    links: z
      .object({
        repo: z.string().url().optional(),
        demo: z.string().url().optional(),
        docs: z.string().url().optional(),
        video: z.string().url().optional(),
      })
      .optional(),

    images: z
      .object({
        hero: z.string().optional(),
        gallery: z.array(z.string()).optional(),
      })
      .optional(),
  }),
});

export const collections = { projects };
