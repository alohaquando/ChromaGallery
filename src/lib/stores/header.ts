import { writable } from 'svelte/store';

export const header = writable({
	type: 'main',
	href: '',
	button: undefined,
	buttonFunction: function () {},
	destructive: undefined,
	destructiveFunction: function () {},
	actionDisabled: undefined
});

export const resetHeader = () => {
	header.set({
		type: 'main',
		href: '',
		button: undefined,
		buttonFunction: function () {},
		destructive: undefined,
		destructiveFunction: function () {},
		actionDisabled: undefined
	});
};
