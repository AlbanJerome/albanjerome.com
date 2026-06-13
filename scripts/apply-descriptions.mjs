/**
 * Add description frontmatter to writing essays that lack one.
 * Uses the same excerpt logic as src/lib/posts.ts.
 *
 * Usage: node scripts/apply-descriptions.mjs
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const WRITING_ROOT = join(__dirname, "../src/content/writing");
const META_DESCRIPTION_MAX = 160;

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path, files);
    else if (name.endsWith(".md")) files.push(path);
  }
  return files;
}

function stripMarkdown(text) {
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

function truncateMetaDescription(text, max = META_DESCRIPTION_MAX) {
  const trimmed = text.trim();
  if (trimmed.length <= max) return trimmed;
  return `${trimmed.slice(0, max).replace(/\s+\S*$/, "")}...`;
}

function extractFirstParagraph(body) {
  const blocks = body
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  for (const block of blocks) {
    if (block.startsWith("#")) continue;
    if (/^!\[.*?\]\(.*?\)$/.test(block)) continue;
    if (block.length < 50) continue;
    if (block.startsWith("*Written in") || block.startsWith("---")) continue;

    const cleaned = stripMarkdown(block);
    if (cleaned.length > 40) return cleaned;
  }
  return "";
}

function escapeYaml(value) {
  if (/[:#\n"'&<>]/.test(value) || value.includes('"')) {
    return `"${value.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
  }
  return `"${value}"`;
}

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return null;
  return { yaml: match[1], body: match[2], raw: match[0] };
}

function hasDescription(yaml) {
  return /^description:\s*.+/m.test(yaml);
}

let updated = 0;
const files = walk(WRITING_ROOT);

for (const filePath of files) {
  const content = readFileSync(filePath, "utf8");
  const parsed = parseFrontmatter(content);
  if (!parsed) continue;
  if (hasDescription(parsed.yaml)) continue;

  const excerpt = extractFirstParagraph(parsed.body);
  if (!excerpt) continue;

  const description = truncateMetaDescription(excerpt);
  const newYaml = `${parsed.yaml.trimEnd()}\ndescription: ${escapeYaml(description)}`;
  const newContent = `---\n${newYaml}\n---\n${parsed.body}`;
  writeFileSync(filePath, newContent, "utf8");
  updated++;
  console.log(`Updated: ${filePath.replace(WRITING_ROOT + "/", "")}`);
}

console.log(`\nDone. Added descriptions to ${updated} files.`);
