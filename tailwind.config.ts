import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				bg: 'var(--bg)',
				'bg-alt': 'var(--bg-alt)',

				primary: 'var(--primary)',
				secondary: 'var(--secondary)',

				shadow: 'var(--shadow)',
				glass: 'var(--glass)',

				'glass-text': 'var(--glass-text)'
			}
		}
	},

	plugins: []
} as Config;
