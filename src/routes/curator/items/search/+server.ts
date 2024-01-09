import { json } from '@sveltejs/kit';
import { getAllItems } from '$lib/data/item';

// @ts-ignore
export async function GET({ url }) {
	const q = url.searchParams.get('q');
	console.log(q);

	try {
		let result: {
			items: Item[] | undefined;
		} = {
			items: undefined
		};
		const allItems: Item[] = await getAllItems();

		if (q) {
			result.items = allItems.filter((item) => item.title.toLowerCase().includes(q));
		} else {
			result.items = allItems;
		}
		return json(result);
	} catch (error) {
		console.error(error);
		return json(error); // Return error message with status code 500
	}
}
