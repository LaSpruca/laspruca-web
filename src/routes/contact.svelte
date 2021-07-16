<script context="module" lang="ts">
	import { prefetch } from '$app/navigation';
	import { browser } from '$app/env';
	import Section from '$lib/section/Section.svelte';

	import discord from '$lib/assets/image/discord.svg';
	import gh from '$lib/assets/image/gh.svg';
	import reddit from '$lib/assets/image/reddit.svg';
	import email from '$lib/assets/image/email.svg';
	import ig from '$lib/assets/image/ig.svg';

	if (browser) {
		prefetch('/');
		prefetch('/projects');
	}
	export const prerender = true;
</script>

<script lang="ts">
</script>

<svelte:head>
	<title>Nathan Hare - Contact</title>
</svelte:head>

<Section>
	<div class="content">
		<h1>Contact me</h1>
		<h3>I am on the following platforms:</h3>
		<div class="socials">
			<div class="social-link">
				<a href="https://github.com/LaSpruca">
					<img class="social-logo" src={gh} alt="GitHub" />
					<p>LaSpruca</p>
				</a>
			</div>
			<div class="social-link">
				<a href="https://discord.com/users/403646951259635713" class="discord">
					<img class="social-logo" src={discord} alt="Discord" />
					<p>LaSpruca#5194</p>
				</a>
			</div>
			<div class="social-link">
				<a href="https://reddit.com/u/laspruca">
					<img class="social-logo" src={reddit} alt="Reddit" />
					<p>laspruca</p>
				</a>
			</div>
			<div class="social-link">
				<a href="https://www.instagram.com/laspruca/">
					<img class="social-logo" src={ig} alt="Instagram" />
					<p>@laspruca</p>
				</a>
			</div>
			<div class="social-link email">
				<a href="mailto:me@laspruca.nz">
					<img class="social-logo" src={email} alt="EMail" />
					<p>me@laspruca.nz</p>
				</a>
			</div>
		</div>
	</div>
</Section>

<style lang="scss">
	@import '../lib/colors';

	.content {
		padding: 3rem;
	}

	@media screen and (max-width: 600px) {
		.content {
			padding: 0;
		}
	}

	.social-logo {
		width: 40px;
	}

	.socials {
		display: grid;
		justify-content: center;
		align-items: center;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		gap: 1em 1em;
		padding: 1rem;

		.social-link {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			a {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				text-decoration: none;
				font-weight: 700;

				color: $radical-red;
			}

			&.email {
				grid-column: 1 / span 2;
			}
		}
	}
</style>
