import { getNewModal, previousState } from './modal';
import { getNewHeader } from './header';
import { getNewNavbar } from '$lib/stores/navbar';
import { currentBg, getNewBackground } from '$lib/stores/background';

export function generateModal(pageData: any = {}) {
	let modal = getNewModal();

	modal.update((data: any) => ({
		...data,
		...pageData
	}));

	let prevState;
	previousState.subscribe((previousState: any) => (prevState = previousState));

	let modalData: any;
	modal.subscribe((data: any) => (modalData = data));

	let isToggled = modalData.toggled;

	if (!prevState && !isToggled) {
		modal.update((data: any) => ({
			...data,
			animation: 'animate-flyUp'
		}));
	} else if (!prevState && isToggled) {
		modal.update((data: any) => ({
			...data,
			animation: 'animate-flyUp'
		}));
		previousState.set(true);
	} else if (prevState && isToggled) {
		modal.update((data: any) => ({
			...data,
			animation: ''
		}));
	} else if (prevState && !isToggled) {
		modal.update((data: any) => ({
			...data,
			animation: 'animate-flyUpOut'
		}));
		previousState.set(false);
	}

	modal.subscribe((data: any) => (modalData = data));
	return modalData;
}

export const generateHeader = (pageData: any = {}) => {
	let header = getNewHeader();

	header.update((data: any) => ({
		...data,
		...pageData
	}));

	let headerData;

	header.subscribe((data: any) => (headerData = data));
	return headerData;
};

export const generateNavbar = (pageData: any = {}) => {
	let navbar = getNewNavbar();

	navbar.update((data: any) => ({
		...data,
		...pageData
	}));

	let headerData;

	navbar.subscribe((data: any) => (headerData = data));
	return headerData;
};

export const generateBackground = (pageData: any = {}) => {
	let bg = getNewBackground();

	bg.update((data: any) => ({
		...data,
		...pageData
	}));

	let backgroundData;

	bg.subscribe((data: any) => (backgroundData = data));
	return backgroundData;
};
