<script lang="ts">
	type Props = {
		isDark: boolean;
		setDark: (dark: boolean) => void;
	};

	const { isDark, setDark }: Props = $props();
</script>

<form method="post" target="?/change-theme">
	<input
		type="submit"
		name="theme"
		value={!isDark}
		class="fixed bottom-16 right-16 aspect-square w-10 rounded-full bg-bg-alt"
		onclick={(event) => {
			event.preventDefault();

			setDark(!isDark);
			const body = new URLSearchParams();
			body.set('theme', isDark ? 'dark' : 'light');

			fetch('?/change-theme', {
				method: 'POST',
				body
			});
		}}
	/>
</form>
