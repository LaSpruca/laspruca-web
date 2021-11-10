<script lang="ts">
	import { showHeader } from '$lib/stores';

	let windowInnerHeight: number = 0;
	let scrollVirt: number = 0;

	$: {
		if (scrollVirt > windowInnerHeight) {
			$showHeader = true;
		} else {
			$showHeader = false;
		}
	}
</script>

<svelte:window bind:scrollY={scrollVirt} bind:innerHeight={windowInnerHeight} />

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
<div class="main-content">
	<div class="about-me">
		<div class="about-me__title">
			<h1>Hi I'm Nathan</h1>
		</div>
		<div class="about-me__text">
			<p>
				I'm a year 12 student at Whangarei Boys' High School, a coatch at Kamo Amature Swimming
				Club, and a member of <a href="https://questionable.org.nz">Questionable Research Labs</a>.
				I am doing Digial Technologies, Chemistry, Electronics, Physics, Maths, and Economics at
				school.
			</p>
			<p>
				I'm into SvelteJS and SvelteKit for web design, and NestJS or Actix Web on the backend. When
				it comes to mobile apps, I use Flutter, or native android. I also have some experence in
				Unity and Unreal Engine as well. I primarly code in TypeScript and Rust, but can code in
				Python, JS, Dart, Java, and C# as well, and maybe C++ if pushed.
			</p>
		</div>
	</div>
</div>

<style lang="scss">
	.title {
		display: flex;
		flex-grow: 1;
		width: 100vw;
		height: 135vh;
		max-width: 100%;
		border-bottom-left-radius: 25%;
		border-bottom-right-radius: 25%;
		overflow: hidden;

		&__sprucebg {
			background: url('/assets/img/header-bg.webp') center;
			background-size: cover;
			background-position-x: 40%;
			width: auto;
			height: 100%;
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
				height: 100%;
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
		height: 125vh;

		path {
			fill: #ffffff;
		}
	}

	.main-contnet {
		padding-top: 5rem;
	}

	.about-me {
		padding: 1rem;
		margin: 3rem;
		border-radius: 1rem;
		overflow: hidden;
		&__title {
			padding: 3rem;
		}
	}
</style>
