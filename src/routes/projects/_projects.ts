import type { Project } from '$lib/types';

export const loadProjects = async (): Promise<Project[]> => {
	return await Promise.all(
		Object.entries(import.meta.glob('./*.md')).map(async ([path, page]) => {
			// Get the metadata of the page
			const metadata = await page();
			// Get the slug of the tutorial
			const slug = path.split('/').pop().split('.').shift();
			// Return an object containg the information
			return { ...metadata['metadata'], slug };
		})
	);
};

export const loadSixRecentProjects = async (): Promise<Project[]> => {
	return (await Promise.all(
		Object.entries(import.meta.glob('./*.md')).map(async ([path, page]) => {
			// Get the metadata of the page
			const metadata = await page();
			// Get the slug of the tutorial
			const slug = path.split('/').pop().split('.').shift();
			// Return an object containg the information
			return { ...metadata['metadata'], slug };
		})
	)).sort((a: Project, b: Project) => {
		const dA = new Date(a.date);
		const dB = new Date(b.date);
		if (dA > dB) {
			return 1;
		} else if (dA < dB) {
			return -1;
		} else {
			return 0;
		}
	});
};
