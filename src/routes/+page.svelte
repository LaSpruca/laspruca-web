<script lang="ts">
	import Circle from '$lib/components/Circle.svelte';
	import type { Vector } from '$lib/vector';
	import { clampVector, gravity, mul, randomVector, sum } from '$lib/vector';
	import { onMount } from 'svelte';

	let circVelocities: Vector[] = [
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0]
	];

	let circPositions = $state([
		randomVector(),
		randomVector(),
		randomVector(),
		randomVector(),
		randomVector()
	]);

	onMount(() => {
		const interval = setInterval(() => {
			for (let i = 0; i < circPositions.length; i++) {
				let position = circPositions[i];
				let velocity = circVelocities[i];

				let acceleration = circPositions.reduce(
					(acc, other) => sum(acc, mul(gravity(position, 5, other, 5), -1)),
					gravity(position, 5, [0, 0], 100)
				);

				velocity = sum(velocity, mul(acceleration, 1 / 60));
				position = sum(position, mul(velocity, 1 / 60));

				circPositions[i] = clampVector(position);
				circVelocities[i] = velocity;
			}
		}, 16.67);

		return () => clearInterval(interval);
	});

	function toPercent(vector: Vector): Vector {
		return mul(sum(vector, 1), 50);
	}
</script>

<div class="absolute left-0 right-0 h-screen w-screen bg-bg">
	<div class="relative m-[5vh_5vw] h-[calc(90vh-20rem)] w-[calc(90vw-20rem)]">
		<Circle color="#FF0000" position={toPercent(circPositions[0])} />
		<Circle color="#DD4E02" position={toPercent(circPositions[1])} />
		<Circle color="#3B006B" position={toPercent(circPositions[2])} />
		<Circle color="#4BDE55" position={toPercent(circPositions[3])} />
		<Circle color="#1B97B0" position={toPercent(circPositions[4])} />
	</div>
</div>
<div
	class="absolute m-[5vh_5vw] flex h-[90vh] w-[90vw] flex-col items-center justify-center gap-10 rounded-lg bg-glass shadow-lg shadow-shadow backdrop-blur-[15rem] lg:flex-row"
>
	<div class="lg:w-[50%]">
		<h1 class="text-center text-5xl font-bold text-primary lg:text-right lg:text-9xl">
			Connor<br />
			Hare
		</h1>
		<h2 class="text-center text-3xl font-bold text-secondary lg:text-right">LaSpruca</h2>
	</div>
	<div class="flex max-w-[90%] flex-wrap justify-center gap-5 lg:w-[50%]">
		<a
			href="/about"
			class="rounded-lg bg-glass px-4 py-2 text-xl font-bold text-glass-text shadow-sm shadow-shadow backdrop-blur-3xl lg:text-3xl"
		>
			About
		</a>
		<button
			class="rounded-lg bg-glass px-4 py-2 text-xl font-bold text-glass-text shadow-sm shadow-shadow backdrop-blur-3xl lg:text-3xl"
		>
			Projects
		</button>
		<button
			class="rounded-lg bg-glass px-4 py-2 text-xl font-bold text-glass-text shadow-sm shadow-shadow backdrop-blur-3xl lg:text-3xl"
		>
			Résumé
		</button>
	</div>
</div>
