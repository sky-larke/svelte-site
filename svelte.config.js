import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';  // Correct import for mdsvex

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // File extensions that should be treated as Svelte components
  extensions: ['.svelte', '.svx', '.md'], // Include .svx for Markdown + Svelte components

  preprocess: [
    vitePreprocess(),  // General preprocessing (e.g., SCSS, TypeScript)
    mdsvex({
      extensions: ['.svx', '.md'],
      layout: {
        blog: './src/lib/components/blog.svelte'
      }
    }
    )           // Preprocess .svx files (Markdown with Svelte components)
  ],

  kit: {
    // Adapter for deployment (auto-detects environment)
    adapter: adapter(),
  }
};

export default config;
