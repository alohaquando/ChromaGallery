import { writable } from 'svelte/store';

export let imageFullView = writable({
	toggled: false,
	alt: '',
	src: ''
});

export const resetImageFullView = () => {
	imageFullView.set({
		toggled: false,
		alt: '',
		src: ''
	});
};

export const toggleImageFullView = (alt: string, src: string) => {
	imageFullView.set({
		toggled: true,
		alt: alt,
		src: src
	});
};
