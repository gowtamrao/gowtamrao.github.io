import { getCollection } from 'astro:content';

/** Prefix an internal path with the configured base (e.g. /RaoWeb). */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}

/** Published posts, newest first. Drafts are visible only in `npm run dev`. */
export async function getPosts() {
  const posts = await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

/** Rough reading time in minutes. */
export function readingTime(text = ''): number {
  return Math.max(1, Math.round(text.split(/\s+/).length / 220));
}
