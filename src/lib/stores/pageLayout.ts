import { writable } from 'svelte/store';

export const headerInfo = writable({
	type: 'main',
	button: undefined,
	destructive: undefined
});

export const navbarInfo = writable({
	type: 'user'
});

export const modalInfo = writable({
	toggled: false,
	title: '',
	exit: undefined,
	button: undefined,
	destructive: undefined,
	transition: undefined
});

export const bgInfo = writable({
	color: 'B61BFF',
	design: 'top',
	randomized: true
});