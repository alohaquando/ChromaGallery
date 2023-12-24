import { writable } from 'svelte/store';

export const background = writable({
	color: 'B61BFF',
	design: 'top',
	randomized: true
});

export const resetBackground = () => {
	background.set({
		color: 'B61BFF',
		design: 'top',
		randomized: true
	});
};

export const test = writable(1);
