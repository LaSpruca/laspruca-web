<script lang="ts">
	import logo from './spruce-logo.svg';
	import { page } from '$app/stores';
</script>

<header>
	<div class="header-blur">
		<a href="/" class="logo">
			<img src={logo} alt="Spruce Logo" />
			<div class="logo-shadow" />
		</a>

		<nav>
			<a href="/contact" class={$page.path == '/contact' ? 'selected' : ''}
				><h2>Contact</h2>
				<div class="underline" />
			</a>

			<a href="/" class={$page.path == '/' ? 'selected' : ''}
				><h2>Home</h2>
				<div class="underline" />
			</a>

			<a href="/projects" class={$page.path.startsWith('/projects') ? 'selected' : ''}
				><h2>Projects</h2>
				<div class="underline" />
			</a>
		</nav>
	</div>
</header>

<style lang="scss">
	header {
		background-image: url('/assets/img/header-bg.webp');
		background-size: cover;
		background-position: 0 50%;
	}

	.header-blur {
		padding: 5em;
		width: 100%;
		height: 100%;
		backdrop-filter: blur(20px);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		& > * {
			padding: 1rem;
		}
	}

	.logo {
		display: flex;
		flex-direction: column;
		align-items: center;
		img {
			object-fit: contain;
			border-radius: 100%;
			width: 4rem;
			height: 4rem;
			z-index: 5;
		}

		.logo-shadow {
			background-color: white;
			position: absolute;
			width: 5em;
			height: 5em;
			transform: translate(0, -10%);
			border-radius: 100%;
		}
	}

	nav {
		margin-top: 2rem;
		display: flex;
		justify-content: space-between;
		width: 50%;

		a {
			outline: none;
			color: grey;
			text-decoration: none;
			text-align: center;
			padding-bottom: 5px;
			display: inline-block;

			& .underline {
				height: 3px;
				background-color: transparent;
				width: 0%;
				transition: width 0.2s, background-color 0.5s, height 0.3s, margin 0.3s;
				margin: 0 auto;
				height: 3px;
				margin-bottom: 3px;
			}

			&:hover {
				color: lightgray;
				.underline {
					background-color: lightgrey;
					width: 100%;
				}
			}

			&.selected {
				color: white;
				.underline {
					width: 100%;
					background-color: white;
					height: 6px;
					margin-bottom: 0px;
				}
			}
		}
	}
</style>
