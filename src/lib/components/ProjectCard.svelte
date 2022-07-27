<script lang="ts">
	import type { Project } from '../types/project';

	export let project: Project;
</script>

<a href={`/p/${project.slug}`}>
	<div>
		<h1>{project.title}</h1>
		<p>{project.description}</p>
		<div class="links">
			{#if project.website}
				<a href={`${project.website}`}>Website</a>
			{/if}
			{#if project.gitRepo}
				<a href={project.gitRepo}>Git Repo</a>
			{/if}
		</div>
	</div>
</a>

<style lang="scss">
	@use '../util';

	a {
		text-decoration: none;
		transition: all 0.2s ease-in-out;
		background-color: util.$color-darker;

		&:hover {
			transform: translateY(-0.5rem);
			background-color: util.$color-semi-dark;
		}

		:global(.odd) &:last-child {
			justify-self: center;
			align-self: center;
			grid-column-start: span 2;
		}
	}

	div {
		padding: 1em;
		text-decoration: none;
		color: util.$text;
	}

	h1 {
		font-size: 1.6rem;
		padding-bottom: 1em;
	}

	p {
		font-size: 1rem;
		font-weight: normal;

		text-align: center;
	}

	.links {
		padding-top: 1rem;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 1rem;

		a {
			height: 100%;
			width: fit-content;
			padding: 0.75rem;
			background-color: util.$color;
			color: util.$text-darker;
			text-align: center;

			&:hover {
				background-color: util.$color-darker;
			}
		}
	}
</style>
