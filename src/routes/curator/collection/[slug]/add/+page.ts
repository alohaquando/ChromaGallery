import { getCollection } from '$lib/data/collection';
import { getAllItems } from '$lib/data/item';

// @ts-ignore
export async function load({ params }) {
	return {
		modal: {
			toggled: true,
			title: 'Add item to collection',
			exit: true
		},
		slug: params.slug,
		items: getAllItems(),
		collection: getCollection(params.slug)
	};
}
