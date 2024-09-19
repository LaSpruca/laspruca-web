import { changeTheme } from '$lib/dark-mode';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	'change-theme': changeTheme
};
