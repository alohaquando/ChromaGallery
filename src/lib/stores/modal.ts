import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

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

export function generateModal(pageData: any = {}) {
	let modal = getNewModal();

	modal.update((data) => ({
		...data,
		...pageData
	}));

	let prevState;
	previousState.subscribe((previousState) => (prevState = previousState));

	let modalData: any;
	modal.subscribe((data) => (modalData = data));

	let isToggled = modalData.toggled;

	if (!prevState && !isToggled) {
		modal.update((data) => ({
			...data,
			animation: 'animate-flyUp'
		}));
	} else if (!prevState && isToggled) {
		modal.update((data) => ({
			...data,
			animation: 'animate-flyUp'
		}));
		previousState.set(true);
	} else if (prevState && isToggled) {
		modal.update((data) => ({
			...data,
			animation: ''
		}));
	} else if (prevState && !isToggled) {
		modal.update((data) => ({
			...data,
			animation: 'animate-flyUpOut'
		}));
		previousState.set(false);
	}

	modal.subscribe((data) => (modalData = data));
	return modalData;
}

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
