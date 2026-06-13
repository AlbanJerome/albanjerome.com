/**
 * Normalize frontmatter in migrated markdown files.
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const contentRoot = join(import.meta.dirname, "../src/content/writing");

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) {
      walk(path);
      continue;
    }
    if (!entry.endsWith(".md")) continue;
    normalizeFile(path);
  }
}

function normalizeFile(path) {
  const raw = readFileSync(path, "utf8");
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return;

  const [, frontmatter, body] = match;
  const lines = frontmatter.split(/\r?\n/);
  const normalized = lines.map((line) => {
    const colon = line.indexOf(":");
    if (colon === -1) return line;

    const key = line.slice(0, colon).trim();
    let value = line.slice(colon + 1).trim();

    if (key === "original_url" && !value) return "";
    if (key === "original_url" && value && !value.startsWith('"')) {
      return `original_url: "${value}"`;
    }

    if (key === "title") {
      const unquoted = value.replace(/^["']|["']$/g, "");
      if (unquoted.includes(":") || unquoted.includes("#")) {
        return `title: "${unquoted.replace(/"/g, '\\"')}"`;
      }
    }

    if (key === "theme" && value && !value.startsWith('"')) {
      return `theme: "${value.replace(/"/g, '\\"')}"`;
    }

    return line;
  }).filter((line) => line !== "");

  const output = `---\n${normalized.join("\n")}\n---\n\n${body.replace(/^\n+/, "")}`;
  writeFileSync(path, output, "utf8");
  console.log(`Normalized: ${path}`);
}

walk(contentRoot);
console.log("Done.");
