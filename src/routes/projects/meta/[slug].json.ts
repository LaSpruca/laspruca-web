import type { RequestHandler } from '@sveltejs/kit';
import { getProjectMetadata } from '$lib/projects';

export const get: RequestHandler<void> = async (request) => {
	return getProjectMetadata(request.params.slug);
};
