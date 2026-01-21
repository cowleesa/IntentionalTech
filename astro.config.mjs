// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // Remove the brackets here:
  site: 'https://cowleesa.github.io',
  
  // And here:
  base: '/IntentionalTech',

  integrations: [mdx()]
});