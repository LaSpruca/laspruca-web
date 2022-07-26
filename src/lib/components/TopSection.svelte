<script lang="ts">
	import SpruceLogo from './graphics/SpruceLogo.svelte';

	let randomText = 'Yeet!';
</script>

<div class="top">
	<div class="me">
		<div class="logo">
			<SpruceLogo animate class="logo-img" />
		</div>
		<div class="name">
			<h1>Nathan Hare</h1>
			<h2>LaSpruca</h2>
		</div>
	</div>

	<div class="tagline">
		<p>Developer</p>
		<div class="s" />
		<p>Student</p>
		<div class="s" />
		<p>{randomText}</p>
	</div>
</div>

<style lang="scss">
	@use '../util';

	:global(.logo-img) {
		--size: 100px;
		width: var(--size);
		height: var(--size);
	}

	.top {
		animation: box util.$fill-duration ease-in forwards;
		animation-delay: util.$outline-duration;
		display: flex;

		height: 80vh;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 3rem;

		.name {
			opacity: 0;
			animation: appear util.$fill-duration ease-in forwards;
			animation-delay: util.$outline-duration;
		}

		.me {
			display: flex;
			flex-direction: column;
			text-align: center;

			gap: 2rem;
		}

		.tagline {
			display: flex;
			align-items: center;
			font-size: 1.5rem;
			flex-direction: column;
			gap: 1rem;
			color: #ddd;

			.s {
				margin: 0 1rem;
				border: white 1px solid;
				width: 50%;
			}

			* {
				opacity: 0;
				animation: slide-in util.$fill-duration ease-in forwards;

				&:nth-child(1) {
					animation-delay: util.$animation-duration + (util.$fill-duration);
					transform: translateX(50%);
				}

				&:nth-child(2) {
					animation-delay: util.$animation-duration + (util.$fill-duration * 1.5);
					transform: translateX(50%);
				}

				&:nth-child(3) {
					animation-delay: util.$animation-duration + (util.$fill-duration * 2);
					transform: translateX(-50%);
				}

				&:nth-child(4) {
					animation-delay: util.$animation-duration + (util.$fill-duration * 2.5);
					transform: translateX(-50%);
				}

				&:nth-child(5) {
					animation-delay: util.$animation-duration + (util.$fill-duration * 3);
					transform: translateX(50%);
				}
			}
		}
	}

	@keyframes appear {
		to {
			opacity: 100%;
		}
	}

	@keyframes box {
		to {
			background-color: util.$color-darker;
			box-shadow: 0 0 20px util.$color-darker;
		}
	}

	@keyframes pop-up {
		from {
			transform: translateY(50%);
		}

		to {
			opacity: 100%;
			transform: translateY(0);
		}
	}

	@keyframes slide-in {
		to {
			opacity: 100%;
			transform: translateX(0);
		}
	}

	@media only screen and (min-width: #{util.$desktop}) {
		.top {
			.tagline {
				flex-direction: row;
				gap: 0;

				.s {
					width: 0;
					height: 50%;
				}

				* {
					transform: translateY(0) !important;
					animation: pop-up util.$fill-duration ease-in forwards;
				}
			}
		}
	}

	@media only screen and (min-width: #{util.$desktop}) and (min-height: 700px) {
		:global(.logo-img) {
			--size: 300px;
		}
	}
</style>
