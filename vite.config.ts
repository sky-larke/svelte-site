import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte',
		})
		],
});
