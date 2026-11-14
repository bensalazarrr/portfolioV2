import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    year: z.string(),
    discipline: z.enum(['web', 'mobile', 'systems', 'concept']),
    frame: z.enum(['wide', 'portrait']).default('wide'),
    summary: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    live: z.string().url().optional(),
    repo: z.string().url().optional(),
    specs: z.array(z.object({ label: z.string(), value: z.string() })),
    stack: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work };
