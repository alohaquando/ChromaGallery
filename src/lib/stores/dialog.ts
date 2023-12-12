import { writable } from 'svelte/store';

export const dialog = writable({
	toggled: false
});

export const resetDialog = () => {
	dialog.set({
		toggled: false
	});
};

export const toggleDialog = () => {
	dialog.set({
		toggled: true
	});
};
