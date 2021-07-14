<script context="module" lang="ts">
	import { prefetch } from '$app/navigation';
	import { browser } from '$app/env';
	import Section from '$lib/section/Section.svelte';

	if (browser) {
		prefetch('/');
		prefetch('/projects');
	}
	export const prerender = true;
</script>

<script lang="ts">
</script>

<svelte:head>
	<title>Nathan Hare - Contact</title>
</svelte:head>

<Section>
	<h1>Contact me</h1>
</Section>

<style>
</style>
