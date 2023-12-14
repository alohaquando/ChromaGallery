import { resetHeader } from '$lib/stores/header';
import { resetNavbar } from '$lib/stores/navbar';
import { modalData, previousState, resetModal } from '$lib/stores/modal';
import type { modal } from '$lib/stores/modal';
import { resetBackground } from '$lib/stores/background';
import { resetDialog } from '$lib/stores/dialog';

export const defaultLayout = () => {
	resetHeader();
	resetNavbar();
	resetModal();
	resetBackground();
	resetDialog();
};

let Modal: modal;
let PrevState: boolean;
modalData.subscribe((value) => (Modal = value));
previousState.subscribe((value) => (PrevState = value));

export const stateCheck = () => {
	if (!PrevState && Modal) {
		previousState.set(true);
		modalData.update((modalData) => ({
			...modalData,
			animation: 'animate-flyUp'
		}));
	} else if (PrevState && Modal) {
		modalData.update((modalData) => ({
			...modalData,
			animation: ''
		}));
	} else if (PrevState && !Modal) {
		previousState.set(false);
		modalData.update((modalData) => ({
			...modalData,
			animation: 'animate-flyUpOut'
		}));
	}
};

export const generateModal = (): modal => {
	stateCheck();
	let modal: modal;
	modalData.subscribe((value) => (modal = value));
	// @ts-ignore
	return modal;
};
