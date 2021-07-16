<script lang="ts">
	import type { ProjectMetadata } from '$lib/types';
	import { DateTime } from 'luxon';
	import { page } from '$app/stores';
	import { dev } from '$app/env';

	export let projectName: string;
	let width: number;
	let host: string;

	page.subscribe((page) => {
		if (dev) {
			host = 'http://' + page.host;
		} else {
			host = 'https://' + page.host;
		}
	});

	let project: ProjectMetadata;
	let resolved = false;

	(async () => {
		let url = host + '/projects/meta/' + projectName + '.json';
		let request = await fetch(url);

		if (request.ok) {
			console.log('resolved request');
			const proj = await request.json();
			project = { ...proj, date: DateTime.fromISO(proj['date']) };
			resolved = true;
		}
	})();
</script>

<div class="card" bind:clientWidth={width} style="--width: calc({width}px - 2em)">
	<!-- {#if resolved}
		<img src={'/projects/' + projectName + '/' + project.thumbnail} alt="" />
	{:else}
		<div class="thumbnail placeholder" />
	{/if} -->

	<div class="thumbnail placeholder" />

	<div class="info">
		{#if !resolved}
			<h1>Loading</h1>
		{:else}
			<h1>{project.title}</h1>
			<h2>{project.date.toFormat('DDD')}</h2>
		{/if}
	</div>
</div>

<style lang="scss">
	@import '../colors';

	.card {
		display: flex;
		flex-direction: column;
		padding: 1em;
		background-color: rgba($fluorescent-blue, 0.5);
		border-radius: 3px;
	}

	.thumbnail {
		margin-bottom: 1em;
		width: var(--width);
		height: calc(var(--width) / 16 * 9);
		animation: loading-fade 1.5s ease infinite;
	}

	.placeholder {
		background-color: grey;
	}

	.info {
		display: flex;
		justify-content: space-between;
		gap: 0.5em;
	}

	h1 {
		font-size: 20pt;
	}

	h2 {
		font-size: 10pt;
	}

	@media only screen and (max-width: 885px) {
		.info {
			flex-direction: column;
		}
	}

	@media only screen and (max-width: 410px) {
		h1 {
			font-size: 15pt;
		}
	}

	@keyframes loading-fade {
		0% {
			opacity: 60%;
		}
		30% {
			opacity: 20%;
		}
		100% {
			opacity: 60%;
		}
	}
</style>
