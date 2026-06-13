import { getCollection, type CollectionEntry } from "astro:content";
import {
  LIST_EXCERPT_MAX,
  META_DESCRIPTION_MAX,
  truncateMetaDescription,
} from "./seo";

export type WritingEntry = CollectionEntry<"writing">;

let writingCache: WritingEntry[] | null = null;

export function toSlug(id: string): string {
  const filename = id.split("/").pop() ?? id;
  return filename
    .replace(/\.md$/i, "")
    .replace(/-alban-jerome.*$/i, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

export function isArchive(entry: WritingEntry): boolean {
  return (
    entry.data.status === "archive" ||
    entry.id.toLowerCase().includes("/archive/")
  );
}

export async function getAllWriting(): Promise<WritingEntry[]> {
  if (writingCache) return writingCache;

  const posts = await getCollection("writing");
  writingCache = posts.sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );
  return writingCache;
}

export async function getCurrentWriting(): Promise<WritingEntry[]> {
  return (await getAllWriting()).filter((post) => !isArchive(post));
}

export async function getArchivedWriting(): Promise<WritingEntry[]> {
  return (await getAllWriting()).filter((post) => isArchive(post));
}

export async function getWritingBySlug(
  slug: string,
): Promise<WritingEntry | undefined> {
  const posts = await getAllWriting();
  return posts.find((post) => toSlug(post.id) === slug);
}

export type FeaturedWritingResult = {
  posts: WritingEntry[];
  /** True when posts were selected via `featured: true`; false when using recent fallback. */
  isCurated: boolean;
};

const sortByDateDesc = (a: WritingEntry, b: WritingEntry) =>
  b.data.date.getTime() - a.data.date.getTime();

/**
 * Essays for the homepage featured section.
 * Prefers entries with `featured: true` (newest first, up to `limit`).
 * Falls back to the most recent current (non-archive) essays when none are featured.
 */
export async function getFeaturedWriting(
  limit = 4,
): Promise<FeaturedWritingResult> {
  const posts = await getAllWriting();
  const featured = posts
    .filter((post) => post.data.featured)
    .sort(sortByDateDesc)
    .slice(0, limit);

  if (featured.length > 0) {
    return { posts: featured, isCurated: true };
  }

  const fallback = (await getCurrentWriting()).slice(0, limit);
  return { posts: fallback, isCurated: false };
}

export async function getWritingByTheme(
  theme: string,
): Promise<WritingEntry[]> {
  const normalized = theme.toLowerCase();
  return (await getAllWriting()).filter((post) =>
    post.data.themes.some((t) => t.toLowerCase() === normalized),
  );
}

export async function getRelatedWriting(
  entry: WritingEntry,
  limit = 3,
): Promise<WritingEntry[]> {
  const posts = await getAllWriting();
  const slug = toSlug(entry.id);
  const candidates = posts.filter((post) => toSlug(post.id) !== slug);

  if (entry.data.themes.length > 0) {
    const primary = entry.data.themes[0]!.toLowerCase();
    const themed = candidates.filter((post) =>
      post.data.themes.some((t) => t.toLowerCase() === primary),
    );
    if (themed.length > 0) return themed.slice(0, limit);
  }

  return candidates.slice(0, limit);
}

export async function getAllThemes(): Promise<
  { name: string; count: number }[]
> {
  const posts = await getAllWriting();
  const counts = new Map<string, number>();

  for (const post of posts) {
    for (const theme of post.data.themes) {
      const key = theme.trim();
      if (!key) continue;
      counts.set(key, (counts.get(key) ?? 0) + 1);
    }
  }

  return Array.from(counts.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export async function getArchiveYears(): Promise<
  { year: number; count: number }[]
> {
  const posts = await getArchivedWriting();
  const counts = new Map<number, number>();

  for (const post of posts) {
    const year = post.data.year;
    if (!year || year <= 1970) continue;
    counts.set(year, (counts.get(year) ?? 0) + 1);
  }

  return Array.from(counts.entries())
    .map(([year, count]) => ({ year, count }))
    .sort((a, b) => b.year - a.year);
}

export async function getWritingByYear(year: number): Promise<WritingEntry[]> {
  return (await getArchivedWriting()).filter(
    (post) => post.data.year === year,
  );
}

export function formatDate(date: Date): string | null {
  if (!date || Number.isNaN(date.getTime()) || date.getTime() === 0) {
    return null;
  }
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/** Strip common markdown syntax for plain-text excerpts. */
function stripMarkdown(text: string): string {
  return text
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/(\*\*|__)(.*?)\1/g, "$2")
    .replace(/(\*|_)(.*?)\1/g, "$2")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/^>\s*/gm, "")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Extracts the first meaningful paragraph from the essay body.
 * Skips headings, images, very short lines, and common boilerplate.
 */
function extractFirstParagraph(body: string): string {
  if (!body) return "";

  const blocks = body
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  for (const block of blocks) {
    // Skip headings
    if (block.startsWith("#")) continue;

    // Skip image-only blocks
    if (/^!\[.*?\]\(.*?\)$/.test(block)) continue;

    // Skip very short lines and common boilerplate
    if (block.length < 50) continue;
    if (block.startsWith("*Written in") || block.startsWith("---")) continue;

    const cleaned = stripMarkdown(block);
    if (cleaned.length > 40) {
      return cleaned;
    }
  }

  return "";
}

/**
 * Meta description for an essay.
 * Priority: frontmatter `description` → first real paragraph from body.
 */
export function getPostDescription(entry: WritingEntry): string {
  if (entry.data.description?.trim()) {
    return truncateMetaDescription(entry.data.description, META_DESCRIPTION_MAX);
  }

  const firstParagraph = extractFirstParagraph(entry.body ?? "");
  if (firstParagraph) {
    return truncateMetaDescription(firstParagraph, META_DESCRIPTION_MAX);
  }

  return "Writing on capital, governance, and cross-border networks.";
}

/**
 * Longer excerpt for list cards (homepage, writing index).
 * Prefers frontmatter `description`, then body excerpt.
 */
export function getPostExcerpt(
  entry: WritingEntry,
  max = LIST_EXCERPT_MAX,
): string {
  if (entry.data.description?.trim()) {
    return truncateMetaDescription(entry.data.description, max);
  }
  return excerptFromBody(entry.body ?? "", max);
}

/** 
 * Build a plain-text excerpt from raw markdown body.
 * Used as fallback for getPostExcerpt().
 */
function excerptFromBody(body: string, max = META_DESCRIPTION_MAX): string {
  const text = body
    .split("\n")
    .map((line) => line.trim())
    .filter(
      (line) =>
        line &&
        !line.startsWith("#") &&
        !line.startsWith("*Written in") &&
        !line.startsWith("---") &&
        !line.startsWith("!["),
    )
    .join(" ");

  const cleaned = stripMarkdown(text);
  if (!cleaned) return "";
  return truncateMetaDescription(cleaned, max);
}

export function themeToSlug(theme: string): string {
  return encodeURIComponent(theme);
}

export function slugToTheme(slug: string): string {
  return decodeURIComponent(slug);
}