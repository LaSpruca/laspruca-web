import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import autoAdapter from '@sveltejs/adapter-auto';
import staticAdapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { argv } from 'process';

const staticFlag = argv.some((x) => x === '--static');
const adapter = staticFlag ? staticAdapter : autoAdapter;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess({}), mdsvex(mdsvexConfig)],

	kit: {
		adapter: adapter(),
		prerender: { default: true }
	}
};

export default config;
