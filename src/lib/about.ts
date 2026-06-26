import { createMarkdownProcessor } from "@astrojs/markdown-remark";

const SECTION_FOCUS = "<!-- section:focus -->";
const SECTION_SECONDARY = "<!-- section:secondary -->";

export interface AboutSections {
  opening: string;
  focus: string;
  secondary: string;
}

export function splitAboutBody(body: string): AboutSections {
  const focusIdx = body.indexOf(SECTION_FOCUS);
  const secondaryIdx = body.indexOf(SECTION_SECONDARY);

  if (focusIdx === -1) {
    return { opening: body.trim(), focus: "", secondary: "" };
  }

  if (secondaryIdx === -1) {
    return {
      opening: body.slice(0, focusIdx).trim(),
      focus: body.slice(focusIdx + SECTION_FOCUS.length).trim(),
      secondary: "",
    };
  }

  return {
    opening: body.slice(0, focusIdx).trim(),
    focus: body.slice(focusIdx + SECTION_FOCUS.length, secondaryIdx).trim(),
    secondary: body.slice(secondaryIdx + SECTION_SECONDARY.length).trim(),
  };
}

let markdownProcessor: Awaited<ReturnType<typeof createMarkdownProcessor>> | null =
  null;

async function getMarkdownProcessor() {
  if (!markdownProcessor) {
    markdownProcessor = await createMarkdownProcessor();
  }
  return markdownProcessor;
}

async function renderSection(markdown: string): Promise<string> {
  if (!markdown) return "";
  const processor = await getMarkdownProcessor();
  const { code } = await processor.render(markdown);
  return code;
}

export async function renderAboutSections(sections: AboutSections) {
  const [opening, focus, secondary] = await Promise.all([
    renderSection(sections.opening),
    renderSection(sections.focus),
    renderSection(sections.secondary),
  ]);

  return { opening, focus, secondary };
}
