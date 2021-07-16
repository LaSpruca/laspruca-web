import type { ProjectMetadata } from './types';
import { dev } from '$app/env';

let metadata = new Map<string, ProjectMetadata>();

const imports = (() =>
	dev
		? import.meta.glob('/static/projects/*/project.json')
		: import.meta.glob('./../../../projects/*/project.json'))();

async function loadMetas() {
	if (metadata.size > 0) {
		return;
	}

	let paths = Object.keys(imports);
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
