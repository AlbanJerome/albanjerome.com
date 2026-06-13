import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Essay collection schema.
 *
 * `description` is optional but strongly recommended for SEO.
 * Best practices:
 * - Write 1–2 sentences (120–160 characters ideal for meta tags).
 * - Summarize the essay's argument, not the title rephrased.
 * - Include a concrete hook: what problem, insight, or question it addresses.
 * - Avoid markdown; plain text only.
 *
 * When omitted, the site generates a fallback excerpt from the essay body.
 *
 * `featured` controls homepage curation. Set `featured: true` on 3–4 essays
 * you want highlighted in the homepage "Featured" section. Omit the field or
 * set `featured: false` on everything else. When no essays are featured, the
 * homepage falls back to the most recent current essays automatically.
 */
const writing = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/writing" }),
  schema: z
    .object({
      title: z.string(),
      date: z.coerce.date().optional(),
      original_publish_date: z.coerce.date().optional(),
      description: z
        .string()
        .optional()
        .transform((value) => {
          const trimmed = value?.trim();
          return trimmed ? trimmed : undefined;
        }),
      theme: z.string().optional(),
      themes: z.array(z.string()).optional(),
      source: z.string().optional(),
      original_url: z
        .union([z.string(), z.null()])
        .optional()
        .transform((value) =>
          typeof value === "string" && value.trim() ? value.trim() : undefined,
        ),
      // Homepage curation — see collection comment above.
      featured: z.union([z.boolean(), z.literal("true"), z.literal("false")]).optional(),
      /** Optional OG image path (e.g. /images/essay-cover.png). */
      ogImage: z.string().optional(),
      status: z.string().optional(),
    })
    .transform((data) => {
      const date = data.date ?? data.original_publish_date ?? new Date(0);
      const themes =
        data.themes ?? (data.theme ? [data.theme] : []);
      const featured =
        data.featured === true || data.featured === "true";
      const normalizedStatus = (data.status ?? "current").toLowerCase();

      return {
        title: data.title,
        date,
        description: data.description,
        themes,
        source: data.source ?? "",
      original_url: data.original_url,
      ogImage: data.ogImage,
      featured,
        status: normalizedStatus === "archive" ? "archive" : "current",
        year: date.getFullYear(),
      };
    }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    /** Intro copy shown above channel cards (contact page). */
    intro: z.string().optional(),
  }),
});

export const collections = { writing, pages };
