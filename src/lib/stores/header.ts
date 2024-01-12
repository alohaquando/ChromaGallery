import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export interface Header {
	type: 'main' | 'back' | 'curator';
	href: string | undefined;
	button: undefined | string;
	buttonFunction: any;
	destructive: string | undefined;
	destructiveFunction: any;
	actionDisabled: boolean | undefined;
}

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
