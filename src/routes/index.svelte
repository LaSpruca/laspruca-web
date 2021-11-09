<script lang="ts">
	import { showHeader } from '$lib/stores';
	import { bind } from 'svelte/internal';

	let vh: number = 0;
	let y: number = 0;
	$: {
		if (y > vh) {
			$showHeader = true;
		} else {
			$showHeader = false;
		}
	}
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={vh} />

<div class="title">
	<div class="title__text--wrapper">
		<div class="title__text">
			<h1>Nathan Hare</h1>
			<h2>LaSpruca</h2>
			<div class="title__text__list">
				<p>Software Developer</p>
				<p>High School Student</p>
				<p>Got no clue what I am doing</p>
			</div>
		</div>
	</div>
	<svg version="1.1" viewBox="0 0 281.09 1440" xmlns="http://www.w3.org/2000/svg" id="header-wave">
		<path
			d="m256 0 5.3 30c5.7 30 15.7 90 0 150-16.3 60-58.3 120-58.6 180 0.3 60 42.3 120 64 180 21.3 60 21.3 120-16 180-37.7 60-111.7 120-117.4 180-5.3 60 58.7 120 53.4 180-5.7 60-79.7 120-117.4 180-37.3 60-37.3 120-37.3 150v30h-32v-30-150-180-180-180-180-180-180-150-30z"
		/>
	</svg>
	<div class="title__sprucebg" />
</div>

<div class="kontent">
	<p>Ahh yesh this is some quality <strong>K O N T E N T</strong></p>
</div>

<style lang="scss">
	.title {
		display: flex;
		flex-grow: 1;
		width: 100vw;
		height: 100vh;
		max-width: 100%;

		&__sprucebg {
			background: url('/assets/img/header-bg.webp') center;
			background-size: cover;
			background-position-x: 40%;
			width: auto;
			height: 100vh;
			flex: 1;
		}

		&__text {
			text-align: center;

			&__list {
				display: flex;
				text-align: center;
				justify-content: center;
				align-items: center;
				padding: 2rem;
				p {
					padding: 1rem;
					width: 33.3%;
					& + p {
						border-left: 3px solid black;
					}
				}
			}

			&--wrapper {
				background-color: white;
				width: 40vw;
				height: 100vh;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-end;
			}
		}
	}

	#header-wave {
		position: absolute;
		left: 40vw;
		top: 0;
		height: 100vh;

		path {
			fill: #ffffff;
		}
	}

	.kontent {
		width: 100%;
		height: 101vh;
	}
</style>
