export const SITE = {
  name: "Alban Jerome",
  title: "Alban Jerome",
  description:
    "Writing on capital, governance, and cross-border networks.",
  url: "https://albanjerome.com",
  tagline: "Structure is what satisfies when everything else shifts.",
  subtagline:
    "Writing on capital, governance, cross-border complexity, and the systems that carry them.",
  locale: "en_US",
  twitter: "@albanjerome",
} as const;

export const META_DESCRIPTION_MAX = 160;
export const LIST_EXCERPT_MAX = 240;

export type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  publishedTime?: string;
  modifiedTime?: string;
  /** When true, emit WebSite JSON-LD (homepage only). */
  includeWebsiteSchema?: boolean;
};

/** Truncate text for meta description tags without breaking mid-word. */
export function truncateMetaDescription(
  text: string,
  max = META_DESCRIPTION_MAX,
): string {
  const trimmed = text.trim();
  if (trimmed.length <= max) return trimmed;
  return `${trimmed.slice(0, max).replace(/\s+\S*$/, "")}...`;
}

export function pageTitle(title?: string): string {
  if (!title || title === SITE.title) return SITE.title;
  return `${title} · ${SITE.name}`;
}

export function canonicalUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, SITE.url).toString();
}

export function absoluteImage(path = "/images/aj-logo.png"): string {
  return new URL(path, SITE.url).toString();
}
