import preprocess, { scss } from 'svelte-preprocess';
import adapter_static from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(
		scss({
			includePaths: ['src/lib/assets/style']
		})
	),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter_static(),
		vite: {}
	}
};

export default config;
