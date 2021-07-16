import type { Locals } from '$lib/types';
import type { RequestHandler } from '@sveltejs/kit';
import { recentProjects } from '$lib/projects';

export const get: RequestHandler<Locals> = async (_) => recentProjects();
