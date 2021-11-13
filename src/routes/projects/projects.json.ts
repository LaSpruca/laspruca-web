import type { RequestHandler } from '@sveltejs/kit';
import { loadProjects } from './_projects';

export const get: RequestHandler = async () => {
	return {
		body: JSON.stringify(await loadProjects())
	};
};