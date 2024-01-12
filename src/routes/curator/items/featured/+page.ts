import { getAllItems } from '$lib/data/item';

export async function load() {
	return {
		modal: {
			toggled: true,
			title: 'Featured items',
			href: './',
			exit: true
		},
		items: await getAllItems()
	};
}
