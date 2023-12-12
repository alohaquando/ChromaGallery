import { writable } from 'svelte/store';

export const previousState = writable(false);

export const modal = writable({
	modalPage: false,
	href: '',
	title: '',
	exit: false,
	button: undefined,
	buttonFunction: function () {},
	animation: ''
});

export const resetModal = () => {
	modal.set({
		modalPage: false,
		href: '',
		title: '',
		exit: false,
		button: undefined,
		buttonFunction: function () {},
		animation: ''
	});
};
