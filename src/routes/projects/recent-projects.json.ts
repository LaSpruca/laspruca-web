import type { RequestHandler } from '@sveltejs/kit';
import { loadSixRecentProjects } from './_projects';

export const get: RequestHandler = async () => {
	return {
		body: JSON.stringify(await loadSixRecentProjects())
	}
}