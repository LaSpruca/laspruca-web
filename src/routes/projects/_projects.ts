import type { Project } from '$lib/types';

export const loadProjects = async (): Promise<Project[]> => {
	return await Promise.all(
		Object.entries(import.meta.glob('./*.md')).map(async ([path, page]) => {
			// Get the metadata of the page
			const metadata = await page();
			// Get the slug of the project
			const slug = path.split('/').pop().split('.').shift();
			// Return an object containg the information
			return { ...metadata['metadata'], date: new Date(metadata['metadata']['date']), slug };
		})
	);
};

export const loadSixRecentProjects = async (): Promise<Project[]> => {
	return (await loadProjects()).sort(({ date: dA }, { date: dB }) =>
		dA > dB ? -1 : (dA < dB) ? 1 : 0).slice(0,6);
};
