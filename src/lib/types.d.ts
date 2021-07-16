/**
 * Can be made globally available by placing this
 * inside `global.d.ts` and removing `export` keyword
 */
import { DateTime } from 'luxon';
import type { DefaultBody, JSONValue } from '@sveltejs/kit/types/endpoint';

export interface Locals {}

export interface ProjectsMetadata {
	projects: ProjectMetadata;
}

export interface ProjectMetadata extends DefaultBody {
	title: string;
	description: string;
	summary: string;
	subLinks: SubLinks[];
	date: DateTime;
	thumbnail: string;
}

export interface SubLinks {
	href: string;
	text: string;
}
