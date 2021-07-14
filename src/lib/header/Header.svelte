<script lang="ts">
	import logo from './spruce-logo.svg';
</script>

<header>
	<div class="header-blur">
		<a href="/" class="logo">
			<img src={logo} alt="Spruce Logo" />
			<div class="logo-shadow" />
		</a>

		<nav>
			<a href="/contact"><h2>Contact</h2></a>
			<a href="/"><h2>Home</h2></a>
			<a href="/projects"><h2>Projects</h2></a>
		</nav>
	</div>
</header>

<style lang="scss">
	header {
		background-image: url('/assets/img/header-bg.png');
		background-size: cover;
		background-position: 0 50%;
	}

	.header-blur {
		padding: 5em;
		width: 100%;
		height: 100%;
		backdrop-filter: blur(5px);
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
			color: white;
			text-decoration: none;

			text-align: center;
		}
	}

	@media only screen and (max-width: 770px) {
		.header-blur {
			padding: 3em;
		}

		nav {
			margin-top: 0.5rem;
			flex-direction: column;
			align-items: center;
			a {
				width: auto;
				margin: 0.25em 0;
			}
		}
	}
</style>
