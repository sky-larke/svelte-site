import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
	plugins: [
		sveltekit(),
		AutoImport({
			resolvers: [
			  IconsResolver({
				prefix: 'Icon',
				extension: 'jsx',
			  }),
			],
		  }),
		Icons({
			compiler: 'svelte',
		})
		],
});
