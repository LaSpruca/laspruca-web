<script>
	export let title;
	export let date;
	export let website;
	export let gitRepo;
</script>

<article>
	<div class="article-header">
		<h1>{title}</h1>
		<p class="date">Written: {date}</p>
		<div class="links">
			{#if website}
				<a href={website}>Website</a>
			{/if}

			{#if gitRepo}
				<a href={gitRepo}>Git Repo</a>
			{/if}
		</div>
	</div>
	<slot />
</article>

<style lang="scss">
	.article-header {
		text-align: center;
		padding-bottom: 3rem;
	}
	.article-header h1 {
		padding-bottom: 0.5rem;
	}
	.article-header p {
		font-size: 1rem;
	}
	.article-header a {
		height: 100%;
		width: fit-content;
		padding: 0.75rem;
		background-color: var(--color);
		color: var(--text-darker);
		text-align: center;
		text-decoration: none;
	}
	.article-header a:hover {
		background-color: var(--color-darker);
	}

	:global(img) {
		max-width: 75vw;
	}
</style>
