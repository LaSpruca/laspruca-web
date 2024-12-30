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

<div class="absolute left-0 right-0 h-screen w-screen bg-bg  overflow-hidden">
	<div class="relative h-screen w-screen">
		<Circle color="#FF0000" position={toPercent(circPositions[0])} />
		<Circle color="#DD4E02" position={toPercent(circPositions[1])} />
		<Circle color="#3B006B" position={toPercent(circPositions[2])} />
		<Circle color="#4BDE55" position={toPercent(circPositions[3])} />
		<Circle color="#1B97B0" position={toPercent(circPositions[4])} />
	</div>
</div>
<div
	class="absolute flex h-screen w-screen flex-col justify-between gap-10 rounded-lg  shadow-lg shadow-shadow backdrop-blur-[15rem]"
>
	<div class="m-12">
		<h1 class=" text-8xl font-bold text-primary">Connor Hare is a Software Engineer</h1>
		<h2 class=" mt-5 text-3xl text-secondary">You can find him as Laspruca on the interwebs</h2>
	</div>
	<div class="m-12 flex flex-row gap-8 ">
		<a
			href="/about"
			class="rounded-lg px-8 py-2 text-xl font-bold text-white bg-glass text-glass-text  "
		>
			About
		</a>
		<a
		href="/projects"
		class="rounded-lg px-8 py-2 text-xl font-bold text-white bg-glass text-glass-text"
	>
		Projects
	</a>
	<a
		href="https://github.com/laspruca"
		class="rounded-lg px-8 py-2 text-xl font-bold text-white bg-glass text-glass-text"
	>
		GitHub
	</a>
	</div>
</div>
