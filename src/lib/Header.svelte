<script lang="ts">
	import { showHeader } from './stores';
	import spruceLogo from './assets/image/spruce-logo.svg';

	$: console.log($showHeader);
</script>

<header class="header" class:hidden={!$showHeader}>
	<div class="header__spruce-logo">
		<img class="" src={spruceLogo} alt="" />
		<div class="header__spruce-logo-name">
			<h1>Nathan Hare</h1>
			<h2>LaSpruca</h2>
		</div>
	</div>
	<nav class="header__nav" />
</header>

<style lang="scss">
	.header {
		display: flex;
		justify-content: space-between;
		z-index: 100;
		transform: translateY(0);
		opacity: 100%;
		transition: transform 200ms ease-in-out, opacity 200ms ease-in-out;
		position: fixed;
		top: 0;
		left: 0;
		padding: 1rem;
		width: 100%;
		background: url('/assets/img/header-bg-strip.webp') center;
		background-size: cover;

		&__spruce-logo {
			gap: 1rem;
			align-items: center;
			justify-content: center;
			display: flex;
			img {
				height: 5rem;
				border-radius: 100%;
				border: 0.2rem solid white;
			}
			h1,
			h2 {
				color: white;
			}
		}

		&__nav {
		}

		&.hidden {
			transform: translateY(-100%);
			opacity: 0;
		}
	}
</style>
