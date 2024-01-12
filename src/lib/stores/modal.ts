import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export const previousState = writable(false);

export interface Modal {
	toggled: boolean;
	href: string | undefined;
	title: string;
	exit: boolean;
	button: string | undefined;
	buttonFunction: (() => {}) | undefined;
	animation: string | undefined;
}

export const getNewModal = (): Writable<Modal> => {
	return writable({
		toggled: false,
		href: undefined,
		title: '',
		exit: false,
		button: undefined,
		buttonFunction: function (): any {},
		animation: ''
	});
};

//
// let prevState;
// let modalData;
//
// previousState.subscribe((previousState) => (prevState = previousState));
// modal.subscribe((modal) => (modalData = modal));
//
// const stateCheck = () => {
// 	if (!prevState && modalData.modalPage) {
// 		previousState.set(true);
// 		modal.update((modalData) => ({
// 			...modalData,
// 			animation: 'animate-flyUp'
// 		}));
// 	} else if (prevState && modalData.modalPage) {
// 		modal.update((modalData) => ({
// 			...modalData,
// 			animation: ''
// 		}));
// 	} else if (prevState && !modalData.modalPage) {
// 		previousState.set(false);
// 		modal.update((modalData) => ({
// 			...modalData,
// 			animation: 'animate-flyUpOut'
// 		}));
// 	}
// };
