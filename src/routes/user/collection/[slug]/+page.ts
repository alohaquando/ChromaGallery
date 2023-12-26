import { getCollection } from '$lib/stores/dataLoad';

export async function load({ params }) {
	return {
		collection: getCollection(params.slug)
	};
}
