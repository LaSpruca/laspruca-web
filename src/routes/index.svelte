<script context="module" lang="ts">
	import Section from '$lib/section/Section.svelte';
	import { prefetch } from '$app/navigation';
	import { browser } from '$app/env';

	if (browser) {
		prefetch('/contact');
		prefetch('/projects');
	}

	export const prerender = true;
</script>

<script lang="ts">
</script>

<svelte:head>
	<title>Nathan Hare - LaSpruca</title>
</svelte:head>

<Section>
	<div class="content">
		<div class="left">
			<h1>Nathan Hare</h1>
			<h2>Semi-Professional Googler</h2>
			<ul>
				<li>
					<h3>
						<span role="img" aria-label="Computer"> 💻 </span>
						Software Developer
					</h3>
				</li>
				<li>
					<h3>
						<span role="img" aria-label="Open Book"> 📖 </span>
						Student
					</h3>
				</li>
				<li>
					<h3>
						<span role="img" aria-label="New Zealand Flag"> 🇳🇿 </span>
						Whangarei, New Zealand
					</h3>
				</li>
			</ul>
		</div>
		<div class="right">
			<p>
				I am a Year 12 student at Whangarie Boys' High School, a swimming coach for Kamo Amateur
				Swimming Club, a member of Questionable Research Labs, and a developer.
			</p>
			<p>
				At School, I take Electronics, Digital Technology, Maths, Physics and, Cemetery, and
				Economics. I have competed in Science Fair, and have won awards at the regional competition
				twice now. At Questionable, I help many of the younger attendees with their projects as best
				can.
			</p>
			<p>
				As a developer, I mostly use programming languages such as Rust, TypeScript, Java, C++. My
				preferred areas of development are: Native Apps and Backend. I work with, Flutter, React,
				Svelte, SvelteKit, Unity Engine, Linux, Firebase, GitHub, Actix Web, Spigot and others.
			</p>
		</div>
	</div>
</Section>

<style lang="scss">
	@import '../lib/colors.scss';

	.content {
		padding: 3rem;
		display: flex;

		.left,
		.right {
			width: 50%;
		}

		ul {
			list-style: none;

			padding-left: 20px;

			li {
				margin-left: 0;
				padding: 1rem 1rem 1rem 0;

				span {
					padding-right: 20px;
				}
			}
		}

		p {
			padding-bottom: 1rem;
			font-size: 12pt;
		}

		p:last-child {
			padding: 0;
		}
	}

	@media screen and (max-width: 850px) {
		.content {
			flex-direction: column;
			.left,
			.right {
				width: 100%;
			}

			.left {
				text-align: center;
				padding-bottom: 1rem;
			}
		}
	}

	@media screen and (max-width: 600px) {
		.content {
			flex-direction: column;
			padding: 0;
		}
	}
</style>
