export interface Project {
	slug: string;
	title: string;
	date: Date;
	description: string;
	gitRepo?: string;
	website?: string;
}