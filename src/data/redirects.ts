/**
 * URL redirect map for the Astro site.
 *
 * ## How redirects work (GitHub Pages)
 *
 * Astro's static build emits an HTML page at each source path with a meta
 * refresh + canonical link to the destination. GitHub Pages cannot return
 * true HTTP 301 responses, so this is the correct approach for this host.
 *
 * ## How to add a new batch
 *
 * 1. Copy the batch template at the bottom of this file.
 * 2. Name it clearly: `batch2027`, `batchArchive2024`, etc.
 * 3. Add your `'/old-path': '/new-path'` entries inside the object.
 * 4. Spread the new batch into `redirects` at the bottom.
 * 5. Run `npm run build` and confirm `dist<old-path>/index.html` exists.
 *
 * ## Rules
 *
 * - Paths must be exact matches (no trailing slashes).
 * - Keys are the OLD URL; values are the NEW URL.
 * - Astro does not support regex redirects — list each path explicitly.
 * - External redirects are allowed: use a full `https://` URL as the value.
 * - Later batches override earlier entries if the same key appears twice.
 */

export type RedirectMap = Record<string, string>;

// === Batch 1: Slug normalization (2026 migration) ===
// Cross-cutting slug changes from the React SPA → Astro migration.
// Covers unicode punctuation, version numbers, and filename cleanup.
const batchSlugNormalization: RedirectMap = {
  // Unicode apostrophes + trailing punctuation stripped in new slugs
  "/writing/change-isn\u2019t-coming.-it\u2019s-already-here.":
    "/writing/change-isnt-coming-its-already-here",
  // Version "1.0" in filename slugified differently (dot removed)
  "/writing/thinking-tools-or-thinking-machine-1.0":
    "/writing/thinking-tools-or-thinking-machine-10",
  // Example: renamed essay after updating the filename
  // "/writing/old-slug-with-spaces": "/writing/new-clean-slug",
};

// === Batch 2: Archive 2025 (LinkedIn slug suffixes) ===
// Old React site kept `-alban-jerome-*` suffixes from LinkedIn cross-posts.
const batchArchive2025: RedirectMap = {
  "/writing/ai-human-learning-wont-replace-teachers-alban-jerome-vg3sc":
    "/writing/ai-human-learning-wont-replace-teachers",
  "/writing/beyond-iq-why-9-intelligences-matter-more-than-grades-alban-jerome-dw4lc":
    "/writing/beyond-iq-why-9-intelligences-matter-more-than-grades",
  "/writing/beyond-valuations-metrics-truly-matter-startup-success-alban-jerome-2wdsc":
    "/writing/beyond-valuations-metrics-truly-matter-startup-success",
  "/writing/biggest-mistakes-founders-make-first-year-alban-jerome-xp81c":
    "/writing/biggest-mistakes-founders-make-first-year",
  "/writing/classrooms-full-data-wisdom-alban-jerome-v8psc":
    "/writing/classrooms-full-data-wisdom",
  "/writing/education-human-rightbut-equally-humanizing-alban-jerome-h7qkc":
    "/writing/education-human-rightbut-equally-humanizing",
  "/writing/education-learning-why-market-longer-hires-just-degrees-alban-jerome-zgv3c":
    "/writing/education-learning-why-market-longer-hires-just-degrees",
  "/writing/education-system-failing-founders-alban-jerome-nbsjc":
    "/writing/education-system-failing-founders",
  "/writing/education-system-isnt-brokenits-just-outdated-alban-jerome-6mxgc":
    "/writing/education-system-isnt-brokenits-just-outdated",
  "/writing/engineer-doctor-lawyerand-everyone-were-leaving-behind-alban-jerome-nuqcf":
    "/writing/engineer-doctor-lawyerand-everyone-were-leaving-behind",
  "/writing/from-confucian-chatgpts-alban-jerome-2ggfc":
    "/writing/from-confucian-chatgpts",
  "/writing/hidden-advantage-generational-wealth-education-alban-jerome-1fw2c":
    "/writing/hidden-advantage-generational-wealth-education",
  "/writing/hidden-curriculum-obedience-over-curiosity-alban-jerome-2xrcc":
    "/writing/hidden-curriculum-obedience-over-curiosity",
  "/writing/how-fundraising-distracts-startup-success-alban-jerome-tihic":
    "/writing/how-fundraising-distracts-startup-success",
  "/writing/local-roots-global-reach-how-canadian-innovations-have-alban-jerome-r7gec":
    "/writing/local-roots-global-reach-how-canadian-innovations-have",
  "/writing/standardization-killing-creativity-alban-jerome-d5dzc":
    "/writing/standardization-killing-creativity",
  "/writing/we-teach-algebra-how-file-taxeswhy-alban-jerome-rvmtc":
    "/writing/we-teach-algebra-how-file-taxeswhy",
  "/writing/were-failing-right-alban-jerome-bsxqc":
    "/writing/were-failing-right",
  "/writing/what-hybrid-learning-look-like-alban-jerome-bqyqc":
    "/writing/what-hybrid-learning-look-like",
  "/writing/what-we-dont-realize-how-kids-learn-best-alban-jerome-u1whc":
    "/writing/what-we-dont-realize-how-kids-learn-best",
  "/writing/why-current-k-12-system-fails-prepare-kids-future-alban-jerome-rqwnc":
    "/writing/why-current-k-12-system-fails-prepare-kids-future",
  "/writing/why-do-smart-students-struggle-real-life-skills-alban-jerome-q0hac":
    "/writing/why-do-smart-students-struggle-real-life-skills",
  "/writing/you-got-bagnow-dont-blow-alban-jerome-xgawc":
    "/writing/you-got-bagnow-dont-blow",
};

// === Batch 3: Archive 2024 (LinkedIn slug suffixes) ===
const batchArchive2024: RedirectMap = {
  "/writing/art-algorithm-alban-jerome-tfqoc": "/writing/art-algorithm",
  "/writing/cleaning-house-targeted-protein-degradation-alban-jerome-ynkwc":
    "/writing/cleaning-house-targeted-protein-degradation",
  "/writing/future-our-minds-literally-alban-jerome-cw6vc":
    "/writing/future-our-minds-literally",
};

// === Batch 4: Archive 2023 and earlier (LinkedIn slug suffixes) ===
const batchArchiveEarlier: RedirectMap = {
  "/writing/thinking-tools-machine-10-alban-jerome-0krkc":
    "/writing/thinking-tools-machine-10",
  "/writing/fuelling-fire-alban-jerome": "/writing/fuelling-fire",
  "/writing/ideate-innovate-generate-alban-jerome":
    "/writing/ideate-innovate-generate",
  "/writing/stone-soup-alban-jerome": "/writing/stone-soup",
};

// === Batch 5: Future additions ===
// Add new batches below as you discover more legacy URLs.
// const batch2027: RedirectMap = {
//   "/writing/renamed-essay-old-slug": "/writing/renamed-essay-new-slug",
// };

/** Combined redirect map — spread new batches here. */
export const redirects: RedirectMap = {
  ...batchSlugNormalization,
  ...batchArchive2025,
  ...batchArchive2024,
  ...batchArchiveEarlier,
  // ...batch2027,
};
