// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces

// Add this to prevent TypeScript errors with Tailwind's classes
declare module "*.css" {
	const content: any;
	export default content;
  }

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}
export {};
