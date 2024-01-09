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
			items: Item[] | undefined;
			collections: Collection[] | undefined;
		} = {
			items: undefined,
			collections: undefined
		};
		const allItems: Item[] = await getAllItems();
		// @ts-ignore
		const allCollections: Collection[] = await getAllCollection();

		if (q) {
			result.items = allItems.filter((item) => item.title.toLowerCase().includes(q));
			result.collections = allCollections.filter((collection) =>
				collection.title.toLowerCase().includes(q)
			);
		} else {
			result.items = allItems;
			result.collections = allCollections;
		}
		return json(result);
	} catch (error) {
		console.error(error);
		return json(error); // Return error message with status code 500
	}
}
