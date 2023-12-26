import { resetNavbar } from '$lib/stores/navbar';
import { previousState } from '$lib/stores/modal';
import { resetBackground } from '$lib/stores/background';
import { resetDialog } from '$lib/stores/dialog';
import { resetImageFullView } from '$lib/stores/imageFullView';

export const defaultLayout = () => {
	resetHeader();
	resetNavbar();
	resetBackground();
	resetDialog();
	resetImageFullView();
};

export const generateModal = () => {
	let modalData;
	modal.subscribe((value) => (modalData = value));
	return modalData;
};
