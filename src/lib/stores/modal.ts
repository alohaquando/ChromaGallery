import { writable } from 'svelte/store';

export const previousState = writable(false);

export const modalData = writable({
	modalPage: false,
	href: '',
	title: '',
	exit: false,
	button: undefined,
	buttonFunction: function () {},
	animation: ''
});

export const resetModal = () => {
	modalData.set({
		modalPage: false,
		href: '',
		title: '',
		exit: false,
		button: undefined,
		buttonFunction: function () {},
		animation: ''
	});
};

export interface modal {
	modalPage: boolean | undefined;
	href: string | undefined;
	title: string | undefined;
	exit: boolean | undefined;
	button: string | undefined;
	buttonFunction: () => void | undefined;
	animation: string | undefined;
}
