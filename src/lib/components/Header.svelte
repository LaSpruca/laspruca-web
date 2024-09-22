<script lang="ts">
	import { page } from '$app/stores';
</script>

<div
	class="fixed left-5 top-5 flex w-[calc(100vw-2.5rem)] flex-col items-center justify-between gap-5 rounded-lg bg-glass p-5 shadow-sm shadow-shadow backdrop-blur-[15rem] md:h-14 md:flex-row"
>
	<a class="text-xl font-bold text-primary" href="/">Connor Hare</a>

	<nav class="flex flex-row items-center gap-8">
		<a class="px-3 py-1" class:active={$page.route.id === '/(pages)/about'} href="/about">About</a>
		<a class="px-3 py-1" class:active={$page.route.id === '/(pages)/projects'} href="/projects"
			>Projects</a
		>
		<a class="px-3 py-1" class:active={$page.route.id === '/(pages)/resume'} href="/resume"
			>Résumé</a
		>
	</nav>
</div>

<div class="h-[calc(2.5rem+120px)] md:h-[6rem]"></div>

<style>
	.active {
		@apply text-primary;
	}

	nav > a:not(.active) {
		@apply rounded-sm bg-glass text-glass-text;
	}

	a {
		transition: all 0.2s ease-in-out;
	}
</style>
