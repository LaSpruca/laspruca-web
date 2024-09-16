<script lang="ts">
	type Props = {
		isDark: boolean;
		setDark: (dark: boolean) => void;
	};

	const { isDark, setDark }: Props = $props();
</script>

<button
	class="fixed bottom-16 right-16 aspect-square w-10 rounded-full bg-bg-alt"
	onclick={() => setDark(!isDark)}>{isDark ? 'L' : 'D'}</button
>
