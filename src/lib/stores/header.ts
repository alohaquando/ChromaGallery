import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export interface Header {
	type: string;
	href: string | undefined;
	button: undefined;
	buttonFunction: any;
	destructive: string | undefined;
	destructiveFunction: any;
	actionDisabled: boolean | undefined;
}

export const header = writable({
	type: 'main',
	href: '',
	button: undefined,
	buttonFunction: function () {},
	destructive: undefined,
	destructiveFunction: function () {},
	actionDisabled: undefined
});

export const getNewHeader = (): Writable<Header> => {
	return writable({
		type: 'main',
		href: '',
		button: undefined,
		buttonFunction: function () {},
		destructive: undefined,
		destructiveFunction: function () {},
		actionDisabled: undefined
	});
};

export function generateModal(pageData: any = {}) {
	let header = getNewHeader();

	header.update((data) => ({
		...data,
		...pageData
	}));

	let headerData;

	header.subscribe((data) => (headerData = data));
	return headerData;
}
