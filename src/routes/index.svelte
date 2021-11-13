<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const prerender = true;
	export const load: Load = async ({fetch}) => {
		return {
			props: {
				projects: await fetch('/projects/recent-projects.json')
			}
		}
	}
</script>

<script lang="ts">
	import { showHeader } from '$lib/stores';
	import discordLogo from "$lib/assets/image/discord.svg";
	import emailLogo from "$lib/assets/image/email.svg";
	import ghLogo from "$lib/assets/image/gh.svg";
	import reddit from "$lib/assets/image/reddit.svg";
	import type { Project } from '$lib/types';

	export let projects: Project[];

	console.log(projects)

	let vh: number = 0;
	let scrollY: number = 0;

	$: $showHeader = scrollY > vh;
	$: borderRadius =  Math.min(scrollY, 300)+ "px";
</script>

<svelte:window bind:scrollY={scrollY} bind:innerHeight={vh} />

<div style='border-bottom-left-radius: {borderRadius}; border-bottom-right-radius: {borderRadius}' class="title">
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
	<svg viewBox="0 0 281.09 1440" xmlns="http://www.w3.org/2000/svg" id="header-wave">
		<path
			d="m256 0 5.3 30c5.7 30 15.7 90 0 150-16.3 60-58.3 120-58.6 180 0.3 60 42.3 120 64 180 21.3 60 21.3 120-16 180-37.7 60-111.7 120-117.4 180-5.3 60 58.7 120 53.4 180-5.7 60-79.7 120-117.4 180-37.3 60-37.3 120-37.3 150v30h-32v-30-150-180-180-180-180-180-180-150-30z"
		/>
	</svg>
	<div class="title__sprucebg"></div>
</div>

<div class="about-me">
	<div class="about-me__title">
		<h1>Hi i'm Nathan</h1>
	</div>

	<div class="about-me__main-content">
		<p>I am a Year 12 student at Whangarei Boys' High School, a swimming coach for Kamo Amateur Swimming Club, a member of Questionable Research Labs, and a developer.</p>

		<p>At School, I take Electronics, Digital Technology, Maths, Physics and, Chemistry, and Economics. I have competed in Science Fair, and have won awards at the regional competition twice now. At Questionable, I help many of the younger attendees with their projects as best can.</p>

		<p>As a developer, I mostly use programming languages such as Rust, TypeScript, Java, C++. My preferred areas of development are: Native Apps and Backend. I work with, Flutter, React, Svelte, Sapper, Unity Engine, Linux, Firebase, GitHub, Actix Web, Spigot and others.</p>
	</div>

	<div class='about-me__socials'>
		<a href='https://reddit.com/u/laspruca'><img src={reddit} alt='Reddit logo'></a>
		<a href='https://github.com/laspruca'><img src={ghLogo} alt='Github logo'></a>
		<a href='https://discord.com/users/403646951259635713'><img src={discordLogo} alt='Discord Logo'></a>
		<a href='mailto:me@laspruca.nz'><img src={emailLogo} alt='Email logo'></a>
	</div>
</div>

<style lang="scss">
	.title {
		display: flex;
		flex-grow: 1;
		width: 100vw;
		height: 100vh;
		max-width: 100%;
		overflow: hidden;
		transition: border-radius 10ms ease-in-out;

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
		height: 100vh;

		path {
			fill: #ffffff;
		}
	}

	.about-me {
		padding: 5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		&__title h1 {
			font-weight: bolder;
			text-shadow: 5px 5px 0 cyan ;
		}

		&__main-content {
			text-align: center;
      width: 60%;

      p {
				padding: 1rem 0;
				text-space: 1rem;
			}
		}

		&__socials  {
			padding: 1rem 0;
			display: flex;
			gap: 2rem;
			justify-content: center;
			img {
        width: 2rem;
			}
		}
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
