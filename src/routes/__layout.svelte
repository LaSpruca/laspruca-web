<script lang="ts">
	import Header from '$lib/Header.svelte';
	import '$lib/app.scss';
	import { removeHeadderSpacing } from '$lib/stores';

</script>

<Header />
<main class:remove-spacing={$removeHeadderSpacing}>
	<slot />
</main>

<style lang="scss">
main {
	margin-top: 112px;
}

main.remove-spacing {
	margin-top: 0;
}
</style>
