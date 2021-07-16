<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/projects/recent.json');

		if (res.ok) {
			console.log('Got pages');

			const recentProjects = await res.json();

			return {
				props: { projects: recentProjects }
			};
		}

		const { message } = await res.json();

		return {
			status: res.status,
			error: new Error(message)
		};
	};
</script>

<script lang="ts">
	import ProjectCard from '$lib/projectCard/ProjectCard.svelte';

	export let projects: string[];
</script>

<div class="projects">
	{#each projects as project}
		<div class="project">
			<ProjectCard projectName={project} />
		</div>
	{/each}
</div>

<style lang="scss">
	.projects {
		margin: 2em;
		row-gap: 1em;
		justify-content: space-evenly;
		display: grid;
		grid-template-columns: 30% 30% 30%;
	}

	@media only screen and (max-width: 885px) {
		.projects {
			grid-template-columns: 45% 45%;
		}
	}

	@media only screen and (max-width: 350px) {
		.projects {
			grid-template-columns: 100%;
		}
	}
</style>
