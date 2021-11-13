/** @type{import("mdsvex").MdsvexOptions} */
const config = {
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: [],
	layout: './src/lib/ProjectLayout.svelte'
};

export default config;
