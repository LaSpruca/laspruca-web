<script>
	// Have to use JSDoc here because TypeScript is not a thing that I have

	/** @type{string} */
	export let title;
	/** @type{string} */
	export let date;
	/** @type{string | undefined} */
	export let website;
	/** @type{string | undefined} */
	export let gitRepo;
</script>

<svelte:head>
	<title>{title} | LaSpruca</title>
</svelte:head>

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
		<a href="/">Go back</a>
	</div>
	<slot />
</article>

<style>
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

	.article-header .links {
		padding: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.article-header a {
		height: 100%;
		width: fit-content;
		padding: 0.75rem;
		background-color: var(--color-semi-dark);
		color: var(--text);
		font-weight: bold;
		text-align: center;
		text-decoration: none;
		transition: all 0.2s ease-in-out;
	}

	.article-header a:hover {
		background-color: var(--color-darker);
		transform: translateY(-0.5rem);
	}

	.article-header .links a {
		font-weight: normal;
	}

	article {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		background-color: var(--color-darker);
		padding: 2rem;
		box-shadow: 0 0 10px var(--color-darker);
	}

	:global(img) {
		max-width: calc(75vw - 4rem);
		padding: 2rem 2rem;
	}

	:global(h1) {
		padding-top: 1.8rem;
	}
	:global(h2) {
		padding-top: 1.6rem;
	}
	:global(h3) {
		padding-top: 1.4rem;
	}
	:global(h4) {
		padding-top: 1.2rem;
	}
	:global(h5) {
		padding-top: 1rem;
	}
	:global(h1) {
		padding-top: 0.8rem;
	}
</style>
