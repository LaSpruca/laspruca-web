import { loadAll } from 'js-yaml';
import type { ProjectMetadata } from './types';

let metadata = new Map<string, ProjectMetadata>();

async function loadMetas() {
	if (metadata.size > 0) {
		return;
	}

	let paths = Object.keys(import.meta.glob('/static/projects/*/project.json'));
	for (let path of paths) {
		const name = path.split('/')[3];

		metadata[name] = {
			...(await import(path))
		} as ProjectMetadata;
	}
}

const exists = (projectName) => Object.keys(metadata).includes(projectName);

export const recentProjects = async () => {
	await loadMetas();
	return {
		status: 200,
		body: JSON.stringify(
			Object.entries(metadata)
				.map(([key, value]) => {
					return { name: key, ...value };
				})
				.sort((a, b) => b.date - a.date)
				.map(({ name }) => name)
				.slice(0, 6)
		)
	};
};

export const getProjectMetadata = async (projectName) => {
	await loadMetas();

	if (exists(projectName)) {
		return {
			status: 200,
			body: JSON.stringify(metadata[projectName])
		};
	} else {
		return {
			status: 404,
			body: '{"error": "File not found"}'
		};
	}
};
