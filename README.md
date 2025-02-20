# Portfolio site
[![Netlify Status](https://api.netlify.com/api/v1/badges/21e72452-fab2-4137-a70e-e0550ad5503d/deploy-status)](https://app.netlify.com/sites/skylarke/deploys)

A static portfolio site. My third iteration. This time, I wanted to use SvelteKit for its component and routes system.

Setup was not too bad. [`Sveltekit`](https://svelte.dev/docs/kit/introduction) was rather straightforward in its instructions. I did find Svelte to be generally very easy to pick up, and very smooth. Tailwind helped a lot in terms of getting something up and running. 

Skeleton took care of the color scheme situation, since it auto-creates the color palette based upon my choice of primary/secondary/tertiary etc. I wanted to use the color scheme of my icon that I often use, which is easier said than done. It was a bit difficult to handle its [theme creator](https://www.skeleton.dev/docs/generator) since it freezes up if you take the wrong route, but the results speak for themselves. 

The displayed file system goes through the routes folder and populates it with the accurate file structure. It reads the frontmatter of sdx files using [`gray-matter`](https://www.npmjs.com/package/gray-matter) and gets the titles, icon, etc. It cleans up the svelte-routing related file names (e.g. `(projects)` becomes `projects`) and all `+pages.svx` files are subsumed by their parents. The file tree itself is [Lucide's File Tree](https://animation-svelte.vercel.app/magic/file-tree).

```npm run generate:projects```
runs the script to generate the file structure json, although this also occurs on every `npm build` instance. I currently have it fetching the json when the page loads, but I may experiment with localStorage.

I'd like to also integrate [`Tiptap`](https://tiptap.dev/product/editor) as a WYSIWYG editor, but that is a bit of scope creep. Mostly noting it here in case I forget my aspirations. 

I utilized:
* [`SvelteKit`](https://svelte.dev/docs/kit/introduction) deployed with [`Netlify`](https://app.netlify.com/)
* [`TailwindCSS`](https://tailwindcss.com/)
* UI components from [`Skeleton`](https://www.skeleton.dev/) and [`Svelte Animation Components`](https://animation-svelte.vercel.app/)
* icons from [`Iconify`](https://iconify.design/) using [`unplugin-icons`](https://github.com/unplugin/unplugin-icons), usually from Material Design
* [`mdsvex`](https://mdsvex.pngwn.io/) for markdown to svelte 

Color palette is my own invention, favicons/profile icons were also done by myself.
