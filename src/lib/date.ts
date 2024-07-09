import type { CollectionEntry } from "astro:content";

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    
  }).split('/').join('/');
}

export function sortPostsByDate(
  posts: CollectionEntry<"blog">[],
): CollectionEntry<"blog">[] {
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}