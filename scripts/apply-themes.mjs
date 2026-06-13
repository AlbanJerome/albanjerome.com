/**
 * Add theme frontmatter to essays that lack themes.
 *
 * Usage: node scripts/apply-themes.mjs
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const WRITING_ROOT = join(__dirname, "../src/content/writing");

const STARTUP_KEYWORDS =
  /\b(founder|startup|fundraising|valuation|cap table|series [a-b]|venture|investor)\b/i;
const EDUCATION_KEYWORDS =
  /\b(school|student|classroom|education|learning|k-12|curriculum|teacher)\b/i;
const SCIENCE_KEYWORDS =
  /\b(neural|protein|algorithm|science|biology|technology|innovation)\b/i;

/** Relative path under writing/ → theme name */
function inferTheme(relPath, title, bodyPreview) {
  const text = `${title} ${bodyPreview}`.toLowerCase();
  const normalized = relPath.replace(/\\/g, "/");

  if (normalized.startsWith("archive/2025/")) {
    if (STARTUP_KEYWORDS.test(text)) return "Capital";
    return "Education";
  }
  if (normalized.startsWith("archive/2024/")) return "Science & Technology";
  if (normalized.startsWith("archive/2023/")) return "Science & Technology";
  if (normalized.startsWith("archive/2019-and-pre/")) return "Entrepreneurship";

  if (normalized.includes("global-mobility") || /\bcross-border\b/i.test(text)) {
    return "Cross-border";
  }
  if (/\bgovernance\b/i.test(text)) return "Governance";
  if (/\bcapital\b/i.test(text)) return "Capital";
  if (STARTUP_KEYWORDS.test(text)) return "Capital";
  if (EDUCATION_KEYWORDS.test(text)) return "Education";
  if (SCIENCE_KEYWORDS.test(text)) return "Science & Technology";

  return "Capital";
}

function walk(dir, base = "", files = []) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path, join(base, name), files);
    else if (name.endsWith(".md")) files.push({ path, rel: join(base, name).replace(/\\/g, "/") });
  }
  return files;
}

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return null;
  return { yaml: match[1], body: match[2] };
}

function hasTheme(yaml) {
  return /^themes?:\s*.+/m.test(yaml);
}

function extractTitle(yaml) {
  const m = yaml.match(/^title:\s*["']?(.+?)["']?\s*$/m);
  return m ? m[1].trim() : "";
}

let updated = 0;
const files = walk(WRITING_ROOT);

for (const { path: filePath, rel } of files) {
  const content = readFileSync(filePath, "utf8");
  const parsed = parseFrontmatter(content);
  if (!parsed) continue;
  if (hasTheme(parsed.yaml)) continue;

  const title = extractTitle(parsed.yaml);
  const theme = inferTheme(rel, title, parsed.body.slice(0, 800));
  const newYaml = `${parsed.yaml.trimEnd()}\ntheme: "${theme}"`;
  const newContent = `---\n${newYaml}\n---\n${parsed.body}`;
  writeFileSync(filePath, newContent, "utf8");
  updated++;
  console.log(`${rel} → ${theme}`);
}

console.log(`\nDone. Added themes to ${updated} files.`);
