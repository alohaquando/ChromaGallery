import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export interface Navbar {
	type: 'user' | 'curator';
}

export const getNewNavbar = (): Writable<Navbar> => {
	return writable({ type: 'user' });
};
