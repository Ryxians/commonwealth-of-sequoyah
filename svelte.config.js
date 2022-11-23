import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = true;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		}),
		paths: {
			base: dev ? "" : "/commonwealth-of-sequoyah"
		}
	}
};

export default config;
