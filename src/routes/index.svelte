<script lang="ts" context="module">
	import type { LoadOutput, LoadEvent } from '@sveltejs/kit';

	// Load of the recent projects
	export async function load({ fetch }: LoadEvent): Promise<LoadOutput> {
		let projectsRequest = await fetch('/p/recent-projects.json');
		let projects = await projectsRequest.json();

		return {
			props: {
				projects
			}
		};
	}
</script>

<script lang="ts">
	import Section from '../lib/components/Section.svelte';
	import type { Project } from '../lib/types/project';
	import ProjectCard from '../lib/components/ProjectCard.svelte';
	import TopSection from '../lib/components/TopSection.svelte';
	import RustLogo from '../lib/components/graphics/RustLogo.svelte';
	import GitHubLogo from '../lib/components/graphics/GitHubLogo.svelte';
	import DiscordLogo from '../lib/components/graphics/DiscordLogo.svelte';
	import EmailLogo from '../lib/components/graphics/EmailLogo.svelte';

	export let projects: Project[];
</script>

<svelte:head>
	<title>LaSpruca</title>
	<meta name="description" content="All-rounder developer" />
</svelte:head>

<TopSection />

<Section>
	<span slot="title">Who am I</span>
	<span slot="subtitle"
		>I am a Year 13 student at Whangārei Boys' High School, a member of QRL, and a developer.</span
	>

	<p>
		I was born and raised in Whangārei, New Zealand. I found my love for IT in my second year of
		school. From then on I have always tinkered with computers, with my tinkering getting more
		serious as I got further on through school.
	</p>
	<p>
		During intermediate (about 11-12 years old), I started messing around with web development, with
		my skill continuing to grow from there. Through high school, I have competed in several
		competition, from mathematical modeling to a terrible ideas hackathon. As I come to the end of
		high school, I look to go to university to complete a bachelor of engineering, majoring in
		software engineering.
	</p>
</Section>

<Section>
	<span slot="title">What do I do?</span>
	<span slot="subtitle">I'm a software developer</span>
	<p>
		Of cause, I have my preferences and specialties. While I can make a website, I'm more into the
		backend, away from the CSS. I also like to participate in hackathons with my friends. These can
		range from competitions about cyber security to a competition "what is the worst idea you can
		come up with?". I always enjoy a challenge, and these competition provide many.
	</p>
</Section>

<Section>
	<span slot="title">What do I code in</span>
	<span slot="subtitle">Yes.</span>
	<p>
		I can program in many languages from C# and .NET, to Java, C/C++, Python, JavaScript. Sometimes
		if I'm feeling especially funkey, I might do some Haskel.
	</p>
	<p>
		While I can code in many languages, I have my specialties and favourites, if it's systems or
		backend, you'll find me coding in the Rust programming language most of the time. If I'm in the
		browser on the frontend, I'll gravitate towards Scss and TypeScript.
	</p>
	<svelte:fragment slot="images">
		<RustLogo />
		<img src="/ts-logo.png" alt="TypeScript logo" />
		<img src="/sass-logo.png" alt="Sass Logo" />
	</svelte:fragment>
</Section>

<Section>
	<span slot="title">What do I use</span>
	<span slot="subtitle">Many things</span>
	<p>
		When it comes to frontend frameworks, I can use React and NextJS, although I'm by no means an
		expert, my skills like with Svelte and SvelteKit. When I get a rush of blood to the head, I
		might try some <em>exotic</em>
		WebAssembly via Rust and the Yew framework. I have also had a bit of experience with Blazor.
	</p>

	<p>
		I've had expierence with many a different frameworks on the backend. Of cause, I have experience
		with NodeJS and Deno, using frameworks like Express although I have found Nest.JS to be quite
		nice, although, I haven't sunk
		<em>that</em> much time into either, instead, I tend to reach for rust frameworks. I have used many
		of the popular backend frameworks for rust. My favourite so far is Warp, but I have previously used
		both Actix Web and Rocket.
	</p>

	<svelte:fragment slot="images">
		<img src="/nodejs.png" alt="NodeJS Logo" />
		<img src="/nest-logo.svg" alt="NestJS Logo" />
		<img src="/actix-logo.png" alt="Actix Logo" />
		<img src="/rocket-logo.png" alt="Rocket Logo" />
	</svelte:fragment>
</Section>

<div class="projects">
	<Section>
		<span slot="title">What have I been upto?</span>
		<span slot="subtitle">Here are some of my recent projects</span>
	</Section>
	<div class="s" />
	<div class="cards">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
	<div class="s" />
	<a href="/p">See more projects</a>
</div>

<Section>
	<span slot="title">Wanna talk</span>
	<span slot="subtitle">Reach out to me on any of the following</span>
	<div class="contact-links">
		<a href="https://github.com/LaSpruca">
			<GitHubLogo />
			LaSpruca
		</a>

		<a href="https://discord.com/user/403646951259635713">
			<DiscordLogo />
			LaSpruca#5194
		</a>

		<a href="mailto:contact@laspruca.nz">
			<EmailLogo />
			contact@laspruca.nz
		</a>
	</div>
</Section>

<style lang="scss">
	@use 'sass:math';
	@use '../lib/util';

	.projects {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		.s {
			height: 5vh;
		}

		a {
			text-decoration: none;
			transition: all 0.2s ease-in-out;
			background-color: util.$color-darker;
			color: util.$text;
			font-size: 1.25rem;
			font-weight: bold;
			text-align: center;
			padding: 1rem;

			&:hover {
				transform: translateY(-0.5rem);
				background-color: util.$color-semi-dark;
			}
		}
	}

	.cards {
		display: grid;
		gap: 1rem;
	}

	.contact-links {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		padding-top: 2rem;
		flex-wrap: wrap;

		a {
			height: 100%;
			text-decoration: none;
			color: util.$text-darker;
			gap: 1rem;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 1rem;
			background-color: util.$color-semi-dark;
			transition: all 0.2s ease-in-out;

			&:hover {
				background-color: util.$color;
			}

			:global(*:first-child) {
				width: 1.5rem;
				height: auto;
			}
		}
	}

	@media only screen and (min-width: #{util.$desktop}) {
		.cards {
			grid-template-columns: 50% 50%;
		}
	}
</style>
