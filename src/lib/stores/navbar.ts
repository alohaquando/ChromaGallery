import { writable } from 'svelte/store';

export const navbar = writable({
	type: 'user'
});

export const resetNavbar = () => {
	navbar.set({
		type: 'user'
	});
};
