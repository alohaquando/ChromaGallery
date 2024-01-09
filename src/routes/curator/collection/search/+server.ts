import { json } from '@sveltejs/kit';
import { getAllItems } from '$lib/data/item';
import type { Collection } from '$lib/data/dataModels';
import { getAllCollection } from '$lib/data/collection';

// @ts-ignore
export async function GET({ url }) {
	const q = url.searchParams.get('q');
	console.log(q);

	try {
		let result: {
			collections: Collection[] | undefined;
		} = {
			collections: undefined
		};
		// @ts-ignore
		const allCollections: Collection[] = await getAllCollection();

		if (q) {
			result.collections = allCollections.filter((collection) =>
				collection.title.toLowerCase().includes(q)
			);
		} else {
			result.collections = allCollections;
		}
		return json(result);
	} catch (error) {
		console.error(error);
		return json(error); // Return error message with status code 500
	}
}
