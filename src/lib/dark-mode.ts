import type { Action } from '@sveltejs/kit';

export const changeTheme: Action = async ({ cookies, request }) => {
	const data = await request.formData();

	const theme = data.get('theme');

	if (theme === 'dark') {
		cookies.set('theme', 'dark', {
			path: '/'
		});
	} else if (theme === 'light') {
		cookies.set('theme', 'light', {
			path: '/'
		});
	}
};
