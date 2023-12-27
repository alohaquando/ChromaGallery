import { getNewModal, previousState } from './modal';
import { getNewHeader } from './header';

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
