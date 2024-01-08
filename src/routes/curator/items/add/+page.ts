import { fail, redirect } from '@sveltejs/kit';

export async function load() {
	return {
		modal: {
			toggled: true,
			title: 'Add item',
			exit: true
		}
	};
}
