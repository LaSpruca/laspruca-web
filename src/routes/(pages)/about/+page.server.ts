import { changeTheme } from '$lib/dark-mode';
import type { Actions } from './$types';

export const actions: Actions = {
	'change-theme': changeTheme
};
