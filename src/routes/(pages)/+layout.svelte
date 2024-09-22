<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import type { Snippet } from 'svelte';

	type Props = { children: Snippet };

	const { children }: Props = $props();
</script>

<div class="min-h-screen bg-bg">
	<Header />
	{@render children()}
</div>
