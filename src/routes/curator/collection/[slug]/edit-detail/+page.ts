import { getCollection } from '$lib/data/collection';

// @ts-ignore
export async function load({ params }) {
	return {
		modal: {
			toggled: true,
			title: 'Edit collection',
			exit: true
		},
		collectionId: params.slug,
		collection: getCollection(params.slug)
	};
}
