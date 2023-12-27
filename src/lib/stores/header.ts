import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export interface Header {
	type: string;
	href: string | undefined;
	button: undefined;
	buttonFunction: any;
	destructive: string | undefined;
	destructiveFunction: any;
	actionDisabled: boolean | undefined;
}

// export const header = writable({
// 	type: 'main',
// 	href: '',
// 	button: undefined,
// 	buttonFunction: function () {},
// 	destructive: undefined,
// 	destructiveFunction: function () {},
// 	actionDisabled: undefined
// });

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
