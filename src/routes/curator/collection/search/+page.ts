import { getAllCollection } from '$lib/data/collection';

// @ts-ignore
export async function load() {
	return {
		modal: {
			toggled: true,
			title: 'Edit items',
			exit: true
		},
		collections: getAllCollection()
	};
}
