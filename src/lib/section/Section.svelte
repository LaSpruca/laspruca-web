<script lang="ts">
</script>

<section>
	<div class="section-content">
		<slot />
	</div>
</section>

<style lang="scss">
	@import '../colors.scss';
	section {
		filter: drop-shadow(0 5px 10px $fluorescent-blue);
	}

	.section-content {
		width: 100%;
		margin-top: 3rem;
		margin-bottom: 30px;

		background: $fluorescent-blue;

		clip-path: polygon(10% 10%, 99% 0, 90% 90%, 1% 100%);
		padding: 5rem;
	}

	@media screen and (max-width: 600px) {
		.section-content {
			clip-path: none;
			padding: 3rem;
		}
	}

	@media screen and (max-width: 850px) and (min-width: 601px) {
		.section-content {
			clip-path: polygon(0 20%, 100% 0, 100% 80%, 0% 100%);
			padding: 5rem;
		}
	}
</style>
