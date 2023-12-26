import { getCollection } from '$lib/data/collection';

export async function load({ params }) {
	return {
		collection: getCollection(params.slug)
	};
}
