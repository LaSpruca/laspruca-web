import { readdirSync, readFileSync, existsSync } from 'fs';
import { loadAll } from 'js-yaml';
import { DateTime } from 'luxon';
import type { ProjectMetadata } from './types';

const loadMetadata = (projectName: string) =>
	parseMetadata({
		project: projectName,
		...loadAll(readFileSync(`projects/${projectName}/project.yaml`).toString())
	});

const parseMetadata = (project: any): ProjectMetadata => {
	return {
		...project[0],
		path: project['project']
	};
};

export async function recentProjects() {
	try {
		return {
			status: 200,
			body: readdirSync('projects')
				.map((path) => loadMetadata(path).path)
				// @ts-ignore
				.sort((a, b) => b.date - a.date)
				.slice(0, 6)
		};
	} catch (ex) {
		return {
			status: 500,
			body: { error: ex }
		};
	}
}

export async function getProjectMetadata(projectName: string) {
	return existsSync(`projects/${projectName}`)
		? {
				status: 200,
				body: JSON.stringify(loadMetadata(projectName)),
				headers: {}
		  }
		: { status: 404, body: { error: 'File not found' }, headers: {} };
}
