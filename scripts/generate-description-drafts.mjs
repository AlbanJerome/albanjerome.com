// scripts/generate-description-drafts.mjs
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

const WRITING_DIR = 'src/content/writing/2026';

function getFiles(dir) {
  return readdirSync(dir, { withFileTypes: true })
    .filter(dirent => dirent.isFile() && dirent.name.endsWith('.md'))
    .map(dirent => dirent.name);
}

function extractTitleAndBody(filePath) {
  const content = readFileSync(filePath, 'utf-8');
  
  // Extract frontmatter
  const frontmatterMatch = content.match(/^---\s*([\s\S]*?)\s*---/);
  let title = 'Untitled';
  
  if (frontmatterMatch) {
    const frontmatter = frontmatterMatch[1];
    const titleMatch = frontmatter.match(/title:\s*["']?(.+?)["']?\s*$/m);
    if (titleMatch) title = titleMatch[1].trim();
  }

  // Get body (after frontmatter)
  const bodyStart = content.indexOf('---', frontmatterMatch ? frontmatterMatch.index + frontmatterMatch[0].length : 0) + 3;
  const body = content.slice(bodyStart).trim();

  // Get first ~450 characters of body (clean-ish)
  const preview = body
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/\[([^\]]+)\]\(.*?\)/g, '$1')
    .replace(/\n{2,}/g, '\n')
    .slice(0, 450)
    .trim();

  return { title, preview };
}

console.log('\n=== Description Drafts for 2026 Essays ===\n');

const files = getFiles(WRITING_DIR);

files.forEach((filename, index) => {
  const filePath = join(WRITING_DIR, filename);
  const { title, preview } = extractTitleAndBody(filePath);

  console.log(`\n--- [${index + 1}/${files.length}] ${filename} ---`);
  console.log(`Title: ${title}`);
  console.log(`\nPreview:\n${preview}`);
  console.log(`\nSuggested description (edit this):\n`);
  console.log(`description: ""\n`);
  console.log('─'.repeat(80));
});