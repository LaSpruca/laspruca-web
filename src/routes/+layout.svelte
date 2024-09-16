<script>
	import '../app.css';
	import DarkButton from '$lib/components/DarkButton.svelte';

	let { children } = $props();
	let dark = $state(true);
</script>

<div class="root bg-bg" class:dark>
	{@render children()}
	<DarkButton isDark={dark} setDark={(isDark) => (dark = isDark)} />
</div>

<style>
	.root {
		--bg: #eee;
		--bg-alt: #333;

		--primary: #222;
		--secondary: #555;

		--shadow: #aaa;
		--glass: rgb(0 0 0 / 25%);
		--glass-text: #ccc;
	}

	.dark {
		--bg: #333;
		--bg-alt: #eee;

		--primary: #eee;
		--secondary: #aaa;

		--shadow: #3e3e3e;
		--glass: rgb(255 255 255 / 25%);
		--glass-text: #eee;
	}
</style>
