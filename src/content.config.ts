import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { topics } from './data/site';

const topicSlugs = topics.map((t) => t.slug) as [string, ...string[]];

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    // Must match one of the topic slugs in src/data/site.ts
    topic: z.enum(topicSlugs),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
