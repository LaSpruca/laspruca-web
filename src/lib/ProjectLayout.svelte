<script>
	export let title;
	export let description;
	export let date;
</script>

<div class='project-info'>
	<h1>{title}</h1>
	<h2>{description}</h2>
	<h3>{date}</h3>
</div>

<div class='content'>
	<slot></slot>
</div>

<style>
  .project-info {
    padding: 2rem
  }

  .content {
    width: 70%;
    margin: auto;
  }

  .content :global(h1),
	.content :global(h2),
	.content :global(h3),
	.content :global(h4),
	.content :global(h5),
	.content :global(h6) {
    padding-top: 2rem;
    padding-bottom: 1rem;
  }
</style>