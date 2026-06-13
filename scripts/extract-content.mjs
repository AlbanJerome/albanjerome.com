/**
 * Extract markdown from legacy Vite bundle by resolving variable references.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const bundle = readFileSync(join(root, "legacy", "index-BCqhcmYe.js"), "utf8");

function extractTemplateLiteral(source, startIndex) {
  if (source[startIndex] !== "`") return null;
  let i = startIndex + 1;
  let result = "";
  while (i < source.length) {
    const ch = source[i];
    if (ch === "\\") {
      result += source[i + 1] ?? "";
      i += 2;
      continue;
    }
    if (ch === "`") {
      return { value: result, end: i + 1 };
    }
    result += ch;
    i++;
  }
  return null;
}

function findVariableValue(source, varName) {
  const patterns = [
    `,${varName}=\``,
    `const ${varName}=\``,
    `let ${varName}=\``,
    `var ${varName}=\``,
    `${varName}=\``,
  ];

  for (const pattern of patterns) {
    const idx = source.indexOf(pattern);
    if (idx === -1) continue;
    const litStart = idx + pattern.length - 1;
    const lit = extractTemplateLiteral(source, litStart);
    if (lit) return lit.value;
  }
  return null;
}

function normalizeContent(raw) {
  let content = raw;
  content = content.replace(/^```(?:markdown|md|yaml|text)?\s*\n/, "");
  content = content.replace(/\n```\s*$/, "");
  content = content.replace(/^(\w[\w_]*):([\S])/gm, "$1: $2");
  return content;
}

function normalizePath(relativePath) {
  return relativePath
    .replace(/^writing\/Archive\//i, "writing/archive/")
    .replace(/\/archive\//i, "/archive/")
    .replace(/2019 and pre/gi, "2019-and-pre");
}

const mapPattern =
  /"\.\.\/\.\.\/\.\.\/content\/((?:writing|pages)\/[^"]+\.md)":([A-Za-z_$][\w$]*)/g;

let match;
let count = 0;
const seen = new Set();

while ((match = mapPattern.exec(bundle)) !== null) {
  const [, relativePath, varName] = match;
  if (seen.has(relativePath)) continue;
  seen.add(relativePath);

  const raw = findVariableValue(bundle, varName);
  if (!raw) {
    console.warn(`Missing content for ${relativePath} (${varName})`);
    continue;
  }

  const normalizedPath = normalizePath(relativePath);
  const outPath = join(root, "src", "content", normalizedPath);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, normalizeContent(raw), "utf8");
  count++;
}

console.log(`Extracted ${count} content files.`);
