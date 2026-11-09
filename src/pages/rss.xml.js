import rss from '@astrojs/rss';
import { site } from '../data/site';
import { getPosts } from '../utils';

export async function GET(context) {
  const posts = await getPosts();
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return rss({
    title: site.title,
    description: site.description,
    site: context.site + base.slice(1),
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: `${base}/posts/${p.id}/`,
    })),
  });
}
