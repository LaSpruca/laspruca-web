<script lang="ts">
	import type { Vector } from '$lib/vector';
	const { color, position }: { color: string; position: Vector } = $props();
	const [x, y] = $derived(position);
</script>

<div
	style="background-color: {color}; left: {x}%; top: {y}%"
	class="absolute aspect-square w-[20rem] rounded-full"
></div>
