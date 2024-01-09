import { getCollection } from '$lib/data/collection';

// @ts-ignore
export async function load({ params }) {
	return {
		collectionId: params.slug,
		collection: getCollection(params.slug),
		modal: {
			toggled: true,
			title: 'Edit items',
			exit: true
		}
	};
}
