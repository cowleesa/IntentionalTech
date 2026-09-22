import { getCollection } from "astro:content";

export interface TagCount {
  tag: string;
  count: number;
}

export async function getSortedTags(): Promise<TagCount[]> {
  const allPosts = await getCollection("blog");
  const tagMap = new Map<string, number>();

  allPosts.forEach((post) => {
    post.data.tags?.forEach((tag: string) => {
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
    });
  });

  // ties keep first-encountered order (stable sort)
  return [...tagMap.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

const ACRONYMS: Record<string, string> = { pc: "PC" };

export function formatTagLabel(tag: string): string {
  return tag
    .split("-")
    .map((word) => ACRONYMS[word] ?? word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
