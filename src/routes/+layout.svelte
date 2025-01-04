<script lang="ts">
	import { type Snippet } from 'svelte';
	import '../app.css';
	import DarkButton from '$lib/components/DarkButton.svelte';
	import type { LayoutData } from './$types';

	let { children, data }: { children: Snippet; data: LayoutData } = $props();
	const { isDark } = data;

	let dark = $state(isDark);
</script>

<div class="root bg-bg" class:dark class:default-scheme={dark === undefined}>
	{@render children()}
	<!-- <DarkButton isDark={dark} setDark={(isDark) => (dark = isDark)} /> -->
</div>

<style>
	.root {
		--bg: #eee;
		--bg-alt: #333;

		--primary: #222;
		--secondary: #555;

		--shadow: #aaa;
		--glass: rgb(0 0 0 / 40%);
		--glass-text: #ccc;
	}

	.dark {
		--bg: #333;
		--bg-alt: #eee;

		--primary: #eee;
		--secondary: #aaa;

		--shadow: #3e3e3e;
		--glass: rgb(255 255 255 / 34%);
		--glass-text: #eee;
	}

	@media (prefers-color-scheme: dark) {
		.root:default {
			--bg: #333;
			--bg-alt: #eee;

			--primary: #eee;
			--secondary: #aaa;

			--shadow: #3e3e3e;
			--glass: rgb(255 255 255 / 25%);
			--glass-text: #eee;
		}
	}
</style>
