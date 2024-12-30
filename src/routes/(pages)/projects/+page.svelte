<script lang="ts">
	import projects from '$lib/projects.json';
</script>

<div class=" grid grid-cols-6  max-2xl:grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 justify-center gap-6 m-6 ">
	{#each projects as project}
		<div
			class="flex w-full max-w-full flex-col justify-between rounded-lg bg-white shadow-lg border border-gray-300"
		>	<div><h2 class="text-xl font-bold text-primary p-4 border-b">{project.title}</h2>
			<div class="p-5 pt-3">
			
				<span class="text-primary">{project.description}</span>
			</div>
		</div>
			<div class="flex flex-row justify-start border-t max-mdflex-wrap">
				{#if project.link}
					<a
						href={project.link}
						class=" flex flex-row items-center gap-2  m-3 rounded-full border-blue-400 border px-3 py-1 "
					>
						<svg
							width="24px"
							height="24px"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M13.5442 10.4558C11.8385 8.75022 9.07316 8.75022 7.36753 10.4558L4.27922 13.5442C2.57359 15.2498 2.57359 18.0152 4.27922 19.7208C5.98485 21.4264 8.75021 21.4264 10.4558 19.7208L12 18.1766"
								class="stroke-blue-700"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M10.4558 13.5442C12.1614 15.2498 14.9268 15.2498 16.6324 13.5442L19.7207 10.4558C21.4264 8.75021 21.4264 5.98485 19.7207 4.27922C18.0151 2.57359 15.2497 2.57359 13.5441 4.27922L12 5.82338"
								class="stroke-blue-700"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<span class="font-medium text-blue-700">Link</span>
						</svg>
					</a>
				{/if}

				{#if project.repo}
					<a
						href={project.repo}
						
						class=" flex flex-row items-center gap-2  m-3 rounded-full border-blue-400 border px-3 py-1 "
					>
						<svg viewBox="0 0 98 96" width="24px" height="24px" xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
								class="fill-primary"
							/></svg
						>
						<span class="font-medium text-blue-700">Git Repo</span>
					</a>
				{/if}
			</div>
		</div>
	{/each}
</div>
