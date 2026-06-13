import rss from "@astrojs/rss";
import { getAllWriting, toSlug, getPostDescription } from "../lib/posts";
import { SITE } from "../lib/seo";
import type { APIRoute } from "astro";

export const GET: APIRoute = async (context) => {
  const posts = await getAllWriting();

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: posts.slice(0, 30).map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: getPostDescription(post),
      link: `/writing/${toSlug(post.id)}`,
    })),
    customData: `<language>en-us</language>`,
  });
};
