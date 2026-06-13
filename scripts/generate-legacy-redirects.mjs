/**
 * Helper: list slug diffs between the legacy React bundle and current Astro slugs.
 * Use the output to populate new batches in src/data/redirects.ts.
 *
 * Usage:
 *   node scripts/generate-legacy-redirects.mjs
 *
 * Requires legacy/index-BCqhcmYe.js (restore from git if missing).
 */
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const bundlePath = join(root, "legacy", "index-BCqhcmYe.js");

if (!existsSync(bundlePath)) {
  console.error("Missing legacy bundle. Restore with:");
  console.error("  git show HEAD:assets/index-BCqhcmYe.js > legacy/index-BCqhcmYe.js");
  process.exit(1);
}

const bundle = readFileSync(bundlePath, "utf8");

const oldSlug = (filename) =>
  filename.replace(/\.md$/, "").replace(/\s+/g, "-").toLowerCase();

const newSlug = (filepath) =>
  filepath
    .split("/")
    .pop()
    .replace(/\.md$/i, "")
    .replace(/-alban-jerome.*$/i, "")
    .replace(/\s+/g, "-")
    .toLowerCase();

const mapPattern =
  /"\.\.\/\.\.\/\.\.\/content\/writing\/([^"]+\.md)":([A-Za-z_$][\w$]*)/g;

const redirects = [];
let match;

while ((match = mapPattern.exec(bundle)) !== null) {
  const filepath = match[1];
  const from = `/writing/${oldSlug(filepath.split("/").pop())}`;
  const to = `/writing/${newSlug(filepath)}`;
  if (from !== to) {
    redirects.push({
      from,
      to,
      year: filepath.match(/\/(\d{4})\//)?.[1] ?? "earlier",
    });
  }
}

console.log(`Found ${redirects.length} slug diffs. Add to src/data/redirects.ts:\n`);
for (const r of redirects) {
  console.log(`  "${r.from}": "${r.to}",  // ${r.year}`);
}
