import { writable } from 'svelte/store';

export let imageFullView = writable({
	toggled: false
});

export const resetImageFullView = () => {
	imageFullView.set({
		toggled: false
	});
};

export const toggleImageFullView = () => {
	imageFullView.set({
		toggled: true
	});
};
