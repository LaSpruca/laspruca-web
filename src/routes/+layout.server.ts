import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const theme = cookies.get('theme');

	return {
		isDark: theme ? theme === 'dark' : undefined
	};
};
