import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content', // This is CRITICAL for .md and .mdx files
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    // ... rest of your schema
  }),
});

export const collections = { blog };