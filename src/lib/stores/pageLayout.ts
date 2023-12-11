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

export const navbar = writable({
	type: 'user'
});

export const modal = writable({
	toggled: false,
	href: '',
	title: '',
	exit: false,
	button: undefined,
	buttonFunction: function () {},
	transition: false
});

export function resetModal() {
	modal.set({
		toggled: false,
		href: '',
		title: '',
		exit: false,
		button: undefined,
		buttonFunction: function () {},
		transition: false
	});
}

export const background = writable({
	color: 'B61BFF',
	design: 'top',
	randomized: true
});

export const dialog = writable({
	toggled: false,
	title: '',
	text: '',
	button1: {
		option: '',
		type: '',
		function: function () {}
	},
	button2: {
		option: '',
		type: 'filled',
		function: function () {}
	}
});

export const defaultLayout = () => {
	header.set({
		type: 'main',
		href: '',
		button: undefined,
		buttonFunction: function () {},
		destructive: undefined,
		destructiveFunction: function () {},
		actionDisabled: undefined
	});
	navbar.set({
		type: 'user'
	});
	modal.set({
		toggled: false,
		href: '',
		title: '',
		exit: false,
		button: undefined,
		buttonFunction: function () {},
		transition: false
	});
	background.set({
		color: 'B61BFF',
		design: 'top',
		randomized: true
	});
	dialog.set({
		toggled: false,
		title: '',
		text: '',
		button1: {
			option: '',
			type: '',
			function: function () {}
		},
		button2: {
			option: '',
			type: 'filled',
			function: function () {}
		}
	});
};
