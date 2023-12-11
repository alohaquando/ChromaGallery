import { writable } from 'svelte/store';

export const header = writable({
	type: 'main',
	button: undefined,
	destructive: undefined
});

export const navbar = writable({
	type: 'user'
});

export const modal = writable({
	toggled: false,
	title: '',
	exit: undefined,
	button: undefined,
	destructive: undefined,
	transition: undefined
});

export const background = writable({
	color: 'B61BFF',
	design: 'top',
	randomized: true
});