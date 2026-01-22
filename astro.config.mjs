// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // 1. Update to your new custom domain
  site: 'https://intentionaltech.co.uk',
  
  // 2. Change base to root. 
  // This ensures links work as "intentionaltech.co.uk/about" 
  // instead of "intentionaltech.co.uk/IntentionalTech/about"
  base: '/',

  integrations: [mdx()]
});